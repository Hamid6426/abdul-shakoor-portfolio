This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## PROJECT STRUCTURE

/project-root
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── AdminNavbar.tsx
│   │   ├── Footer.tsx
│   │   ├── InfoGrid.tsx
│   │   ├── IntroCard.tsx
│   │   ├── Navbar.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   ├── hocs/
│   │   ├── withProtectedRoute.tsx
│   ├── lib/
│   │   ├── professional-info-array.ts
│   │   ├── dbConnect.ts
│   │   ├── envConfig.ts
│   ├── middleware/
│   │   ├── auth.ts
│   ├── models/
│   │   ├── Admin.ts
│   │   ├── Blog.ts
│   │   ├── Mail.ts
│   ├── /pages
│   │   ├── /admin
│   │   │   ├── blogs/
│   │   │   │   ├──  index.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├──  index.tsx
│   │   │   ├── mails/
│   │   │   │   ├──  index.tsx
│   │   │   ├── settings/
│   │   │   │   ├──  index.tsx
│   │   │   ├── support/
│   │   │   │   ├──  index.tsx
│   │   │   ├──  index.tsx (very simple page with button to links these pages)
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login.ts
│   │   │   │   ├── register.ts
│   │   │   ├── blogs/
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── delete-blog.ts
│   │   │   │   │   ├── get-blog.ts
│   │   │   │   │   ├── update-blog.ts
│   │   │   │   ├── create-blog.ts
│   │   │   │   ├── get-blogs.ts
│   │   │   │   ├── update-blog.ts
│   │   │   ├── mails/
│   │   │   │   ├── delete-mail.ts
│   │   │   │   ├── get-mails.ts
│   │   │   │   ├── post-mail.ts
│   │   ├── /auth
│   │   │   ├── index.tsx
│   │   ├── /blogs
│   │   │   ├── index.tsx
│   │   ├── /contact
│   │   │   ├── index.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   ├── services/
│   │     ├── adminService.ts
│   │     ├── blogService.ts
│   │     ├── mailService.ts
│   ├── /styles
│   │     ├── globals.css
│   ├── types/
│   │     ├── next.d.ts
│   ├── utils/
│   │     ├── bcrypt.ts
│   │     ├── jwt.ts
├── .env
├── .env.example
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.json
├── tsconfig.json
