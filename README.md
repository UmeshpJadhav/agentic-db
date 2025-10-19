Here is your complete and latest **README.md** file content from the `agentic-db` repository:

***

# Agentic DB

Agentic DB is a **Next.js + TypeScript** web application integrated with **Drizzle ORM** and **Turso Database**, designed to offer a robust and secure data interaction layer for agentic or AI-driven applications. It features a modular architecture and is optimized for cloud deployment on Vercel.

## Features

- ⚡ **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** with Next.js  
- 🧑‍💻 **Type-safe database schema** with Drizzle ORM  
- 🪶 **Edge-compatible database** using Turso (based on libSQL)  
- 🎨 **Tailwind CSS** for styling consistency  
- 🪄 **PostCSS** for advanced CSS transformations  
- 🧱 **Clean architecture** promoting reusability and scalability  
- 🚀 **Deploy-ready for Vercel**

## Tech Stack

- **Frontend Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Database:** Turso (libSQL) + Drizzle ORM  
- **Styling:** Tailwind CSS + PostCSS  
- **Package Manager:** pnpm  
- **Deployment:** Vercel

## Project Structure

```
agentic-db/
├── src/                     # Source code
│   ├── app/                 # Next.js pages and routes
│   ├── components/          # Shared UI components
│   ├── lib/                 # Database and utilities
│   └── styles/              # Global and module styles
├── drizzle.config.ts        # Drizzle + Turso configuration
├── components.json          # Component registry
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # Documentation
```

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/UmeshpJadhav/agentic-db.git
cd agentic-db
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create Environment File

Create a `.env.local` file at the root directory:

```env
TURSO_DATABASE_URL="your_turso_database_url"
TURSO_AUTH_TOKEN="your_turso_auth_token"
```

### 4. Run Development Server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Integration (Turso + Drizzle)

- **Turso** is a distributed edge database built on libSQL, compatible with SQLite.  
- **Drizzle ORM** provides a type-safe query interface and seamless integration.  
- Configuration stored in `drizzle.config.ts` manages generation paths, migrations, and schema bindings.

To apply migrations:

```bash
pnpm drizzle-kit push
```

## Deployment

This project is fully optimized for **Vercel** deployment:

```bash
pnpm build
```

Push to your main branch, and Vercel automatically deploys the app.

## Available Scripts

| Command | Description |
|----------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run linting checks |
| `pnpm drizzle-kit` | Manage Drizzle migrations |

## Contribution

Pull requests are welcome. To contribute:

1. Fork the repo  
2. Create a new branch (`feature/your-feature-name`)  
3. Commit your changes  
4. Open a pull request  

.