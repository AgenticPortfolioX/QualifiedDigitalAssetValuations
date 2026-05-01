const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir);
files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'HomePage.tsx' && file !== 'BlogPostPage.tsx') {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Match Williamsburg address
        if (content.includes('2711 Williamsburg Cir')) {
            content = content.replace(/2711 Williamsburg Cir(cle)?, Auburn Hills, Michigan 48326/g, 
                '2711 Williamsburg Cir, Auburn Hills, Michigan 48326<br/>Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.');
        } else if (file === 'BlogPage.tsx') {
             // In BlogPage, the footer is different
             content = content.replace(
                /<p className="text-white\/40 text-\[10px\] font-black uppercase tracking-widest">/,
                '<p className="text-white/40 text-[10px] font-black uppercase tracking-widest">\n              Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.<br /><br />'
             );
        } else if (file === 'ComplianceHub.tsx') {
            // Check for footer
            content = content.replace(
                /<p className="text-gray-400 text-\[10px\] font-bold uppercase tracking-widest">/,
                '<p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">\n          Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.<br/>'
            );
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Footers updated.');
