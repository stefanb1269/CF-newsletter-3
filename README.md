# The Chestnut Chronicle

A recurring editorial newspaper for the Chestnut Farms A League. Built with Next.js and TypeScript.

## Local development

Run `pnpm dev` and open the local address printed in the terminal. Create a production build with `pnpm build`.

## Content system

Published issues live in `content/issues.ts`. Each issue is a typed object containing metadata, editorial copy, results, standings, rankings, and awards. The homepage renders `currentIssue`; permanent issue pages are generated at `/issues/[slug]`; the archive is generated from the same registry.

Weekly imagery lives in a matching directory under `public/issues/`. Week 1 uses `public/issues/2026-week-01/`. An issue should only reference assets inside its own folder.

## Creating a new issue

1. Create `public/issues/2026-week-02/` and add that week’s images using descriptive filenames.
2. Add a new issue object to the start of the `issues` array in `content/issues.ts`.
3. Give it a permanent slug such as `2026-week-02` and reference images only from `/issues/2026-week-02/`.
4. Keep the previous issue object and assets unchanged.
5. Ensure `currentIssue` points to the newest published issue.
6. Preview `/`, `/archive`, and `/issues/2026-week-02` locally.
7. Run `pnpm build` before publishing.

## Important rule

Never overwrite or modify a previous issue merely to create a new one. Each published issue is a permanent historical artifact.

## Publishing the Newspaper

### Where everything lives

- Weekly writing and league data: `content/issues.ts`
- Reusable newspaper layout: `components/newspaper-issue.tsx`
- Weekly images: `public/issues/<issue-slug>/`
- Global newspaper styling: `app/globals.css`
- Homepage: `app/page.tsx`
- Archive: `app/archive/page.tsx`
- Permanent issue pages: `app/issues/[slug]/page.tsx`

No environment variables are required for the initial site.

### Create and preview an issue

1. Add a new issue object and its issue-specific image folder as described above.
2. Open Terminal in the project folder.
3. Run `pnpm install` the first time only.
4. Run `pnpm dev`.
5. Open the local address shown in Terminal and check the homepage, archive, and permanent issue URL.
6. Stop the preview with `Ctrl+C`.
7. Run `pnpm build`. Do not publish if this command reports an error.

### Commit and push to GitHub

From the project folder, run:

```bash
git add .
git status
git commit -m "Publish Week 2 issue"
git push origin main
```

Read the `git status` output before committing. It should never include `.env` files, `node_modules`, `.next`, `.vercel`, passwords, access tokens, or temporary screenshots.

### Connect GitHub to Vercel the first time

1. Sign in at Vercel and select **Add New → Project**.
2. Choose **Import Git Repository** and authorize GitHub if prompted.
3. Select the newspaper repository.
4. Leave **Framework Preset** set to **Next.js**.
5. Leave **Root Directory** as `./` when this project is at the repository root.
6. Leave the build command and output directory on their automatic defaults.
7. Do not add environment variables; the initial site has none.
8. Select **Deploy**.

After the first deployment, every successful push to `main` automatically creates a new production deployment. Other branches and pull requests receive preview deployments.

### Confirm a deployment succeeded

1. Open the project in Vercel and select **Deployments**.
2. Confirm the newest `main` deployment says **Ready**, not **Error**.
3. Open its production URL and check `/`, `/archive`, and `/issues/2026-week-01`.
4. Check the site on both a phone and desktop.
5. Confirm the lead illustration loads and that its capitalization and path exactly match `public/issues/2026-week-01/monday-night-miracle.png`.

### Roll back a broken issue

In Vercel, open **Deployments**, find the last known-good production deployment, open its menu, and choose **Promote to Production**. Then fix the problem in GitHub and push a new commit. Promoting an older deployment restores the live site quickly, but it does not remove the bad commit from Git history.
