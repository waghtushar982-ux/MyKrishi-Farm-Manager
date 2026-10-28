# MyKrishi

A mobile-first farm manager for Indian farmers to track fields, crops, activities, finances, tasks, harvests, and crop observations.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/mykrishi/src/App.tsx` — app shell, routes, screens, and English/Marathi interface text
- `artifacts/mykrishi/src/lib/farmData.ts` — typed farm models, fictional demo records, and local persistence

## Architecture decisions

- Initial demo data is fictional and stored in the current browser with localStorage.
- No cloud sync, AI crop diagnosis, live scheme verification, or push notifications are claimed.

## Product

MyKrishi gives farmers a simple place to review farm activity and manage crop, field, finance, task, harvest, and observation records. English and Marathi are supported in the initial interface; other planned languages are marked as coming soon.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
