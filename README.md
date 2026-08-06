# VELONA

The official website for VELONA, a handmade crochet fashion brand from Greece.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Convex
- Vercel-ready deployment

## Local development

Requirements: Node.js 22 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add the URL of your Convex deployment to `NEXT_PUBLIC_CONVEX_URL` in
`.env.local`. The storefront still renders its editorial fallback content when
Convex is not configured, while newsletter and wholesale submissions require a
live Convex deployment.

## Convex setup

```bash
npx convex dev
npm run convex:seed
```

The Convex schema, storefront queries, mutations, and sample seed data are in
the `convex/` directory.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Add `NEXT_PUBLIC_CONVEX_URL` in the Vercel project environment variables.
4. Deploy.

Vercel automatically uses `npm run build` and the standard Next.js output. The
project also retains optional `sites:*` scripts for its existing ChatGPT Sites
deployment workflow.
