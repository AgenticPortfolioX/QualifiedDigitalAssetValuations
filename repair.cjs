const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appFile, 'utf8');

// The file has a syntax error between lines 1397 and 1591 due to a bad merge.
// We can just extract everything before 1397, and then append the correct PrivacyPolicyPage and TermsOfServicePage.

const lines = content.split('\n');

// 1. Fix App.tsx content
// Real PrivacyPolicyPage starts at 1592
// Real TermsOfServicePage starts at 1660
const beforeBadMerge = lines.slice(0, 1396).join('\n'); // up to line 1396
const realPrivacy = lines.slice(1591, 1658).join('\n'); // lines 1592 to 1658
const realTerms = lines.slice(1659).join('\n'); // line 1660 onwards

const fixedContent = beforeBadMerge + '\n' + realPrivacy + '\n' + realTerms;

fs.writeFileSync(appFile, fixedContent, 'utf8');
console.log('App.tsx repaired.');
