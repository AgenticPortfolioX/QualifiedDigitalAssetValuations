# Master Blog Architecture Blueprint: "Stay Current" System

This blueprint defines the precise technical and visual specifications for the automated, folder-driven blog system. Use this to replicate the exact formatting and automation on other websites.

## 1. Directory & File Manifest
All blog content must be stored in the `/public/blog/` directory to ensure static access.

**Folder Naming**: `YYYY-MM-DD` (e.g., `2026-04-03`)
**File Manifest (Required)**:
- `final.md`: The post body. Must begin with YAML frontmatter (Title, Date, Description, Author).
- `feature_image.png`: High-resolution preview image.
- `publish_instructions.md`: Metadata and SEO instructions for logs.
- `sdira_compliance_schema.json`: JSON-LD structured data for Google Search authority.

## 2. Sync Automation Logic (`scripts/sync-blog.ts`)
This script aggregates all dated folders into a single `src/data/blog-posts.json` registry.

```typescript
import fs from 'fs'; import path from 'path';
const blogDir = path.join(process.cwd(), 'public', 'blog');
const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');

function parseYAML(content: string) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const res: any = {};
  match[1].split('\n').filter(l => l.includes(':')).forEach(l => {
    const [k, ...v] = l.split(':');
    res[k.trim()] = v.join(':').trim().replace(/^["'](.*)["']$/, '$1');
  });
  return res;
}

async function sync() {
  const folders = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
  const posts = folders.map(f => {
    const meta = parseYAML(fs.readFileSync(path.join(blogDir, f, 'final.md'), 'utf8'));
    return { id: f, ...meta, image: `/blog/${f}/feature_image.png`, path: `/blog/${f}/final.md`, schema: `/blog/${f}/sdira_compliance_schema.json` };
  });
  posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
}
sync().catch(console.error);
```

## 3. GitHub Action Automation (`.github/workflows/blog-automation.yml`)
Runs the sync script automatically on every push to the blog directory.

```yaml
name: Blog Auto-Sync
on:
  push:
    branches: [main]
    paths: ['public/blog/**']
permissions:
  contents: write
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install && npx tsx scripts/sync-blog.ts
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: automated blog registry sync"
          file_pattern: 'src/data/blog-posts.json'
```

## 4. UI Rendering & Precise Formatting
### 4.1 Grid Layout (Blog Index)
- **Structure**: 4x3 Grid (4 Columns on Desktop, 1 on Mobile).
- **Behavior**: Newest post (by date) always appears at the **top-left** (Index 0).
- **CSS Logic**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`.

### 4.2 Post Page Rendering
- **Content Cleaning**: Remove the YAML header before displaying.
  - `const displayContent = rawText.replace(/^---\s*[\s\S]*?\s*---/, '').trim();`
- **Schema Injection**: Inject the `sdira_compliance_schema.json` into the `<head>` on mount.
  ```tsx
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    fetch(post.schema).then(r => r.json()).then(data => {
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });
    return () => script.remove();
  }, [post]);
  ```
- **Typography**: Use standard Markdown formatting for headings (`#`, `##`), bold, and lists.
