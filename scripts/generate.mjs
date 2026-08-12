// Optional: regenerate the profile hero.
// Run: node scripts/generate.mjs
// The README itself does not execute JavaScript; JS is used only as a local asset generator.

import { mkdir, writeFile } from "node:fs/promises";

const out = new URL("../assets/", import.meta.url);
await mkdir(out, { recursive: true });

const makeHero = (dark) => {
  const bg = dark ? "#0B0F0D" : "#F3F5F2";
  const fg = dark ? "#E7ECE9" : "#17201B";
  const grid = dark ? "#202A25" : "#D4DCD7";
  const muted = dark ? "#7F8D86" : "#68756E";
  const green = "#86B89C";

  return `<!-- Generated from scripts/generate.mjs -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 520">
<defs><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
<path d="M32 0H0V32" fill="none" stroke="${grid}" stroke-width="1"/></pattern></defs>
<rect width="1400" height="520" fill="${bg}"/><rect width="1400" height="520" fill="url(#grid)"/>
<g fill="none" stroke="${fg}"><rect x="42" y="42" width="1316" height="436" stroke-width="2"/>
<path d="M42 116H1358M42 410H1358M116 42V478M1284 42V478" stroke-width="1"/></g>
<g fill="none" stroke="${green}" stroke-width="2"><path d="M82 78h22M93 67v22M1276 78h22M1287 67v22"/>
<circle cx="116" cy="116" r="5" fill="${green}"/><circle cx="1284" cy="116" r="5" fill="${green}"/></g>
<g fill="none" stroke="${fg}" stroke-width="2.5"><path d="M190 330H365L425 270H570L630 205H770L830 270H975L1035 330H1210"/>
<path d="M425 270V218H570V270M630 205V148H770V205M830 270V218H975V270"/>
<path d="M520 218V182M700 148V118M910 218V182"/></g>
<g fill="${green}"><circle cx="425" cy="270" r="6"/><circle cx="630" cy="205" r="7"/><circle cx="830" cy="270" r="6"/></g>
<g fill="none" stroke="${green}" stroke-width="1.5"><path d="M425 270V350H280M630 205V350H630M830 270V350H1010"/></g>
<g font-family="ui-monospace,monospace" fill="${fg}">
<text x="138" y="82" font-size="14" letter-spacing="4">ARCHIVE / 001</text>
<text x="1262" y="82" font-size="12" text-anchor="end" letter-spacing="3" fill="${muted}">SYSTEM STATUS :: ONLINE</text>
<text x="138" y="188" font-size="72" font-weight="700" letter-spacing="9">ROCHADEL</text>
<text x="142" y="226" font-size="19" letter-spacing="6">INFRASTRUCTURE / DEVOPS ENGINEERING</text>
<text x="138" y="384" font-size="12" letter-spacing="3" fill="${muted}">01</text><text x="270" y="384" font-size="13" letter-spacing="2">LINUX</text>
<text x="548" y="384" font-size="12" letter-spacing="3" fill="${muted}">02</text><text x="680" y="384" font-size="13" letter-spacing="2">KUBERNETES</text>
<text x="928" y="384" font-size="12" letter-spacing="3" fill="${muted}">03</text><text x="1060" y="384" font-size="13" letter-spacing="2">OBSERVABILITY</text>
<text x="138" y="448" font-size="11" letter-spacing="2" fill="${muted}">AUTOMATION / CLOUD / IaC / GITOPS</text>
<text x="1262" y="448" font-size="11" text-anchor="end" letter-spacing="2" fill="${muted}">REV. 2026.08</text>
</g></svg>`;
};

await writeFile(new URL("hero-light.svg", out), makeHero(false));
await writeFile(new URL("hero-dark.svg", out), makeHero(true));
console.log("Generated hero-light.svg and hero-dark.svg");
