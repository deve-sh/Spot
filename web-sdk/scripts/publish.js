const fs = require('fs');
const { execSync } = require('child_process');

execSync('npm run build', { stdio: 'inherit' });
// Copy package.json to dist
fs.writeFileSync('./dist/package.json', fs.readFileSync('./package.json'));
// Publish
execSync('npm publish', { stdio: 'inherit' });
