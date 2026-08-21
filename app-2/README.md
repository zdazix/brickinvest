# Backend Application

## Local Development

Install the Node.js version required by `package.json`, then run:

```bash
pnpm install
PORT=3000 pnpm run dev
```

## Database

The application can run without a database. To enable PostgreSQL, set `DATABASE_URL`, apply the
migrations explicitly after schema changes, and start the application:

```bash
export DATABASE_URL=postgresql://app:app@localhost:5432/app
pnpm run db:migrate
PORT=3000 pnpm run dev
```

## Production Build

```bash
pnpm run build
PORT=3000 pnpm run start
```

When `DATABASE_URL` is configured, production startup applies pending migrations before accepting
requests. Development startup never applies migrations implicitly.

The available development and maintenance commands are defined in `package.json`.
