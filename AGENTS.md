<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Deployment notes (learned the hard way)

Local dev has a habit of accumulating stale `next dev` processes across terminal sessions/restarts, each grabbing the next free port (3000 → 3001 → 3002...). Symptoms: fan spinning, Chrome tab rendering painfully slowly, "Another next dev server is already running" on startup. Fix: `pkill -f "next dev"` then confirm with `lsof -i :3000` before running `npm run dev` again. Always `Ctrl+C` before closing a terminal running the dev server.

Project lives in `~/Documents`, which macOS may sync via iCloud Drive ("Desktop & Documents Folders"). If Spotlight starts re-indexing `node_modules` (visible in Activity Monitor as `Spotlight`/`corespotlightd`/`spotlightknowledged.updater` near the top of CPU usage, especially right after a restart), it causes serious system-wide slowdowns. Fix: System Settings → Siri & Spotlight → Spotlight Privacy → add this project's `node_modules` folder (and `.next` if present) to the exclusion list.

Deploy target is Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`), not Vercel and not plain Cloudflare Pages — the README's default Next.js deploy instructions don't apply. Deploy sequence:
1. `git add -A && git commit -m "..." && git push` (no CI auto-deploy is wired up — pushing to GitHub does NOT trigger a Cloudflare build)
2. `./build.sh` — runs the OpenNext build and stages `.open-next/assets/_worker.js/`
3. `npx wrangler deploy`

`wrangler deploy` will fail with `Uploading a Pages _worker.js directory as an asset` unless `.open-next/assets/.assetsignore` contains `_worker.js`. `build.sh` now writes this automatically as its last step — if that line ever gets removed, re-add it or the deploy breaks again.

If `git status`/`git commit` fails with a stale `.git/index.lock`, check no git process is actually running (`ps aux | grep git`) and remove the lock file.

Live URL: https://3rd-ai-website.seanie-kim.workers.dev
