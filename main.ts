// The Funniest AI Out-of-Office Reply — entry program (Node 22, stdlib only).
// Writes one original one-line out-of-office reply to /output/entry.txt.
// The reply: I'm on vacation, and a version of me from 2023 is watching my
// inbox — it still thinks everyone uses passwords. Deadpan "Good luck."
// closes it: the machine voice (an outdated model of myself) carries the
// joke, and the surprise is that the cover is worse than the absence.
// Revision: comment tightened to name why the cover is the joke — an
// outdated model guarding the inbox — the reply text itself is unchanged.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPLY =
  "I'm on vacation. My inbox is being watched by a version of me from 2023 — it still thinks you're all using passwords. Good luck.";

// Writes exactly the reply, no trailing newline: the gate counts characters
// (1-160), so the file is 128 characters / 130 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${REPLY.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), REPLY, 'utf8');
