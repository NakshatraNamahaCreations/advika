// Next 16's static export writes route prefetch payloads into folders, e.g.
// out/about/__next.about/__PAGE__.txt, but the browser requests the flat name
// out/about/__next.about.__PAGE__.txt. Without this the pages still work, but
// every prefetch 404s on a static host. Copy each payload to the flat name.
import fs from "node:fs";
import path from "node:path";

const out = path.resolve("out");
if (!fs.existsSync(out)) {
  console.log("flatten-export: no out folder, nothing to do");
  process.exit(0);
}

let copied = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      for (const file of fs.readdirSync(full)) {
        const target = path.join(dir, `${entry.name}.${file}`);
        if (!fs.existsSync(target)) {
          fs.copyFileSync(path.join(full, file), target);
          copied++;
        }
      }
    }
    walk(full);
  }
}

walk(out);
console.log(`flatten-export: ${copied} prefetch payload(s) copied`);
