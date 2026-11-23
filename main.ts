import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One funny line, nothing else: the alarm negotiation —
// an everyday truth with a surprise ending that still makes sense.
const LINE = "I set my alarm for 6 AM. It went off. I negotiated. We agreed on 9.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
