# Issue 2 publishing checklist

This project is already configured for GitHub and Vercel. Do not create a new Vercel project for each issue.

## Before editing

1. Collect the final matchup scores, standings, median, lineup decisions, weekly awards, and any league-history updates.
2. Keep the Week 1 object and its image folder unchanged. Published issues are permanent archive records.
3. Create `public/issues/2026-week-02/` for Issue 2 artwork and screenshots.

## Build Issue 2

1. Add the new Issue 2 object at the beginning of the `issues` array in `content/issues.ts`.
2. Use the slug `2026-week-02`, issue number `2`, and the correct publication date.
3. Reference images only from `/issues/2026-week-02/`.
4. Leave `currentIssue` as `issues[0]`; this automatically makes the newest issue the homepage.
5. Update the header’s Week link in `app/layout.tsx` from Week 1 to Week 2.
6. Confirm every team appears once in the results and standings.
7. Confirm the six matchup winners, records, PF, PA, and median outcomes against Sleeper.

## Verify locally

Run:

```bash
pnpm install --no-frozen-lockfile
pnpm build
```

Check these routes:

- `/`
- `/archive`
- `/issues/2026-week-01`
- `/issues/2026-week-02`

## Publish

1. Upload or push the project files themselves—not a ZIP file—to the existing GitHub repository.
2. Keep `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, and `vercel.json` together at the repository root.
3. Do not paste `allowBuilds` into `pnpm-lock.yaml`; it belongs only in `pnpm-workspace.yaml`.
4. Push to the existing `main` branch. Vercel will deploy automatically.
5. Do not change Vercel’s Root Directory when the project files are visible at the GitHub repository root.
6. Wait for the GitHub “Verify newspaper” check and the Vercel deployment to pass before sharing the issue.

## Vercel settings

- Framework: Next.js
- Install command: supplied by `vercel.json`
- Build command: supplied by `vercel.json`
- Root Directory: blank when the repository opens directly to `app/`, `package.json`, and `vercel.json`
