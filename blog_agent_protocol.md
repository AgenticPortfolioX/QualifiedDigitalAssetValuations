# Blogging Agent Submission Protocol (SOP)

Provide this prompt to the AI or assistant responsible for uploading your blog content.

> **PROMPT: Master Blog Submission Format**
>
> "Your task is to prepare and upload a new blog post to the GitHub repository. Follow these steps exactly:
>
> 1. **Folder Naming**: Create a folder named exactly by the publication date in `YYYY-MM-DD` format (e.g., `2026-04-03`). 
> 
> 2. **File Manifest**: Ensure the folder contains exactly these 4 files:
>    - `final.md`: The post content. Ensure there is a YAML header at the top with `title`, `date`, `description`, and `author`.
>    - `feature_image.png`: The main preview image.
>    - `publish_instructions.md`: The SEO/Marketing instructions provided by the Sage agent.
>    - `sdira_compliance_schema.json`: The JSON-LD SEO markup.
>
> 3. **Upload Location**: Move this folder into the `/public/blog/` directory of the repository.
>
> 4. **GitHub Push**: Commit and push the new folder to the `main` branch. 
> 
> **Note**: Do not run any terminal commands or scripts. A GitHub Action is already configured to automatically detect your new folder and sync it to the website registry upon push."
