const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir);
files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'HomePage.tsx' && file !== 'QuoteWorkflow.tsx') {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove the block completely or replace it with nothing if it's the only thing in the <p>
        content = content.replace(/2711 Williamsburg Cir, Auburn Hills, Michigan 48326<br\/>Serving clients nationwide for digital asset appraisals \| Property and business valuations available in Michigan only\./g, '');
        
        // In BlogPage and ComplianceHub, we also added just "Serving clients nationwide..."
        content = content.replace(/Serving clients nationwide for digital asset appraisals \| Property and business valuations available in Michigan only\.<br \/><br \/>/g, '');
        content = content.replace(/Serving clients nationwide for digital asset appraisals \| Property and business valuations available in Michigan only\.<br\/>/g, '');

        // In BlogPostPage we added it as well
        content = content.replace(/Serving clients nationwide for digital asset appraisals \| Property and business valuations available in Michigan only\./g, '');

        // We also want to remove empty <p> tags that might have been left behind
        content = content.replace(/<p className="[^"]*">\s*<\/p>/g, '');
        content = content.replace(/<p className="[^"]*">\n\s*<\/p>/g, '');

        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Footers removed from all pages.');
