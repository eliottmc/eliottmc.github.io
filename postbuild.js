const { copyFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const routes = ['approche', 'prestations', 'bilan', 'tarifs', 'education', 'contact', 'legals'];

for (const route of routes) {
  const dir = join('dist', route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join('dist', 'index.html'), join(dir, 'index.html'));
  console.log(`✓ dist/${route}/index.html`);
}
