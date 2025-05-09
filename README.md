# Folder Explorer Backend - Made with Elysia, Bun and Prisma

## Please read this first!

Before running this project, please make sure:

```
1. This project is developed using Bun and Node v20.17.0
2. Please create the .env file from .env.example, and make sure to adjust it according to your environment
```

## Getting Started

```
1. Pull this project
2. Run `bun install` from your trusted terminal
3. Run `bunx prisma migrate dev` to apply migration to your lovely database
4. If you need, you can run `bun run seed` to seed your database
5. Then you can proceed to the next step
```

## Development

To start the development server run:

```bash
bun run dev
```

The project run on port 3000, so please check either:

- http://localhost:3000/
- http://127.0.0.1:3000/

## Todo

- [x] Create basic routes
- [x] Create basic services
- [x] Integrate with Prisma
- [] Implement auth
