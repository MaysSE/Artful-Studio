This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Sanity CMS setup

1. Create a Sanity project at https://www.sanity.io/manage.
2. Copy your `projectId` and `dataset`.
3. Create a `.env.local` file in `artful-studio/` using `.env.local.example`.
4. Set:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_VERSION` (default: `2024-03-06`)
5. In your pages or server code, import the helper:

```ts
import { sanityClient, urlFor } from "./lib/sanity";
```

6. Run:

```bash
cd artful-studio
npm install
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
SANITY_PROJECT_ID=2etdioi1
SANITY_DATASET=production
SANITY_API_VERSION=2024-03-06
import { sanityClient } from "@/lib/sanity";

export default async function Home() {
  const data = await sanityClient.fetch('*[_type == "page"][0]{_id, title}');
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}