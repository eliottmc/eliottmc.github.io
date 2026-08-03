const { copyFileSync } = require('fs');
const { join } = require('path');

const routes = ['approche', 'prestations', 'bilan', 'tarifs', 'education', 'contact', 'legals'];

for (const route of routes) {
  copyFileSync(join('dist', 'index.html'), join('dist', `${route}.html`));
  console.log(`✓ dist/${route}.html`);
}
