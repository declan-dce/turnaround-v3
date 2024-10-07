my-nextjs14-app/
├── .storybook/               # Storybook configuration
├── .github/                  # GitHub Actions workflows
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js 14 App Router
│   │   ├── (auth)/           # Auth-related routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── profile/
│   │   ├── dashboard/        # Dashboard routes
│   │   ├── actions/          # Server Actions
│   │   │   ├── workOrders.ts # Work order related server actions
│   │   │   └── [...]/        # Other server actions
│   │   └── [...]/            # Other app routes
│   ├── components/           # Reusable React components
│   │   ├── ui/               # UI components (shadcn/ui)
│   │   └── [...]/            # Other component categories
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and libraries
│   │   ├── prisma.ts         # Prisma client instance
│   │   ├── supabase.ts       # Supabase client instance
│   │   ├── stripe.ts         # Stripe client instance
│   │   └── [...]/            # Other utility files
│   ├── styles/               # Global styles (Tailwind CSS)
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── content-access/       # Content Access Layer
│   └── state/                # Zustand stores
├── prisma/                   # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── docs/                     # Documentation
│   ├── architecture/         # Application architecture docs
│   │   ├── overview.md
│   │   ├── database.md
│   │   ├── auth.md
│   │   ├── file-structure.md
│   │   └── [...]/
│   ├── api/                  # API documentation (if needed)
│   └── user-stories/         # User stories
│       ├── backlog.md
│       ├── in-progress.md
│       └── completed.md
├── tests/                    # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── scripts/                  # Custom scripts for development and deployment
├── config/                   # Configuration files
├── .vscode/                  # VS Code specific settings
├── .env.local                # Local environment variables
├── .env.example              # Example environment variables
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── next.config.js            # Next.js configuration
├── package.json
├── README.md
├── tsconfig.json             # TypeScript configuration
└── .gitignore                # Git ignore file