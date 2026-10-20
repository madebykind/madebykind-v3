// Compiles src/icons/*.svg into <symbol> markup, keyed by icon name, in
// data/icons.json. Hugo inlines only the symbols a page actually uses (see
// layouts/partials/icon-sprite.html) rather than shipping the whole sprite in JS.
import fs from 'fs';
import path from 'path';
import { compilerIcon } from 'vite-plugin-svg-icons';

const iconDir = 'src/icons';
const outFile = 'data/icons.json';
const icons = {};

for (const file of fs.readdirSync(iconDir).filter((f) => f.endsWith('.svg')).sort()) {
  const name = path.basename(file, '.svg');
  const source = fs.readFileSync(path.join(iconDir, file), 'utf-8');
  const svgTag = source.match(/<svg[^>]*>/i)[0];
  const width = parseFloat(
    (svgTag.match(/viewBox="[\d.-]+[ ,]+[\d.-]+[ ,]+([\d.]+)/i) || svgTag.match(/\swidth="([\d.]+)/) || [])[1]
  );

  // Logos render at ~200px or less, so on artboards 100+ units wide one decimal
  // place is sub-pixel. Roughly halves the size of the larger traced logos.
  const svgoOptions = width >= 100 ? { floatPrecision: 1 } : {};
  const symbol = await compilerIcon(path.join(iconDir, file), `icon-${name}`, svgoOptions);

  icons[name] = symbol.replace(/ xmlns(:xlink)?="[^"]*"/g, '');
}

fs.writeFileSync(outFile, JSON.stringify(icons));
console.log(`Compiled ${Object.keys(icons).length} icons to ${outFile}`);
