# Vishal Chaudhari — Backend Engineer Portfolio

A responsive React + Vite portfolio focused on real backend engineering experience, project case studies, and architecture thinking. It uses placeholder contact details and avoids invented performance metrics.

## Requirements
- Node.js 20+ recommended
- npm

## Local setup
```bash
npm install
cp .env.example .env
npm run dev
```
On Windows PowerShell, copy the environment file with:
```powershell
Copy-Item .env.example .env
```
Update `.env` values with your public contact/profile links. All browser-exposed Vite variables must start with `VITE_`. Never put secrets in a Vite environment variable.

## Production build
```bash
npm run build
npm run preview
```
The production build is generated in `dist/`.

## Deploy directly to Vercel
1. Create a personal GitHub repository and upload/push the project files.
2. Sign in to Vercel and select **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite** (usually detected automatically).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Add the required public environment variables in Vercel → Project → Settings → Environment Variables. The `.env` file is intentionally not committed.
8. Deploy. Future pushes to the connected branch trigger deployments automatically.
9. Add a custom domain later under Vercel → Project → Settings → Domains.

No backend server or database is required for this static portfolio. `vercel.json` includes a rewrite for client-side routes if you add routes later.

## Content accuracy
The content reflects the technologies and project areas discussed: Node.js/TypeScript, APIs, microservices, hotel supplier integrations, Elasticsearch search/autocomplete, Redis caching, DynamoDB, and AI/RAG exploration. Replace any line that doesn't accurately describe your personal contribution. Do not publish proprietary employer code, internal URLs, supplier credentials, confidential diagrams, or unverified performance claims.

## Project structure
```text
src/
  components/   Reusable navigation, section, project, and footer components
  data/         Portfolio content and project case studies
  styles/       Responsive visual system
  App.jsx       Page composition
  main.jsx      React entry point
public/         Static assets
```

## Before publishing checklist
- [ ] Replace dummy email, GitHub, LinkedIn, and resume URL.
- [ ] Check employer/project descriptions for confidentiality and exact ownership.
- [ ] Add a PDF resume if desired.
- [ ] Test on mobile, tablet, laptop, and wide screens.
- [ ] Run `npm run build`.
- [ ] Confirm no secrets are committed.
