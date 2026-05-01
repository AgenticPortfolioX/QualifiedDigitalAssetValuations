const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const appFile = path.join(srcDir, 'App.tsx');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir);
}

const content = fs.readFileSync(appFile, 'utf8');

const functionsToExtract = [
    'BlogPage',
    'BlogPostPage',
    'ComplianceLinksPage',
    'AboutPage',
    'ScopeServicesPage',
    'ComplianceHub',
    'QuoteWorkflow',
    'PrivacyPolicyPage',
    'TermsOfServicePage'
];

// Read imports from top
const importsMatch = content.match(/^(?:import.*?\n)+/m);
let imports = importsMatch ? importsMatch[0] : '';
// Make sure imports from '../data' work in 'pages/'
imports = imports.replace(/"\.\/data\//g, '"../data/');
// Add type imports
imports += '\nimport { BlogPost } from "../types";\n\n';

let newAppContent = content;

functionsToExtract.forEach(funcName => {
    // Find where the function starts
    const regex = new RegExp(`^function ${funcName}\\(.*?\\).*?\\{[\\s\\S]*?^\\}\\n*`, 'm');
    const match = content.match(regex);
    if (match) {
        const funcBody = match[0];
        
        let fileContent = imports;
        // Fix imports for React icons if needed
        fileContent += `export default ${funcBody}`;
        
        fs.writeFileSync(path.join(pagesDir, `${funcName}.tsx`), fileContent, 'utf8');
        
        // Remove from App.tsx
        newAppContent = newAppContent.replace(funcBody, '');
    } else {
        console.error(`Could not find function ${funcName}`);
    }
});

// For App.tsx itself, we need to extract the return value that corresponds to HomePage
// App.tsx has: if (view === ...) return ...
// and then the default return is HomePage.
// Let's do that manually since it requires careful AST/string logic.

fs.writeFileSync(appFile, newAppContent, 'utf8');
console.log('Pages extracted.');
