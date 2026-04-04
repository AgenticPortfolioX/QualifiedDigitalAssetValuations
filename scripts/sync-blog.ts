import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'public', 'blog');
const dataDir = path.join(process.cwd(), 'src', 'data');
const outputFile = path.join(dataDir, 'blog-posts.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function parseYAML(content: string) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  
  const yamlContent = match[1];
  const result: Record<string, string> = {};
  
  yamlContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      result[key.trim()] = valueParts.join(':').trim().replace(/^["'](.*)["']$/, '$1');
    }
  });
  
  return result;
}

async function syncBlog() {
  if (!fs.existsSync(blogDir)) {
    console.warn(`Blog directory not found at ${blogDir}`);
    return;
  }

  const folders = fs.readdirSync(blogDir).filter(f => 
    fs.statSync(path.join(blogDir, f)).isDirectory()
  );

  const posts = folders.map(folder => {
    const folderPath = path.join(blogDir, folder);
    const finalMdPath = path.join(folderPath, 'final.md');
    const hasImage = fs.existsSync(path.join(folderPath, 'feature_image.png'));
    const schemaPath = path.join(folderPath, 'sdira_compliance_schema.json');
    
    // Default metadata using the folder name as date
    let metadata: any = {
      title: `Blog Post ${folder}`,
      excerpt: "Read more about this update...",
      author: "QDAV Team",
      date: folder // Folder is now only YYYY-MM-DD
    };

    if (fs.existsSync(finalMdPath)) {
      const content = fs.readFileSync(finalMdPath, 'utf8');
      const frontmatter = parseYAML(content);
      
      metadata = {
        ...metadata,
        ...frontmatter,
        excerpt: frontmatter.description || metadata.excerpt
      };
    }

    return {
      id: folder, // ID is the date string
      ...metadata,
      image: hasImage ? `/blog/${folder}/feature_image.png` : null,
      path: `/blog/${folder}/final.md`,
      schema: fs.existsSync(schemaPath) ? `/blog/${folder}/sdira_compliance_schema.json` : null
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Successfully synced ${posts.length} blog posts to ${outputFile}`);
}

syncBlog().catch(console.error);
