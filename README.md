<h2 align="center">
  Prebaked medusajs 2.0 monorepo (backend + postgres + redis + storefront)<br>
  <a href="https://railway.app/template/gkU-27?referralCode=-Yg50p">one-click deploy on railway!</a>
</h2>

## About this boilerplate
This boilerplate is a monorepo consisting of the officially released MedusaJS 2.0 backend and storefront application. It is a pre-configured, ready-to-deploy solution, modified for seamless deployment on [railway.app](https://railway.app?referralCode=-Yg50p).

Updated: to `version 2.1.3` 🥳

## Preconfigured 3rd party integrations

- MinIO file storage: Replaces local file storage with MinIO cloud storage, automatically creating a 'medusa-media' bucket for your media files. [README](backend/src/modules/minio-file/README.md)
- Resend email integration [setup video](https://youtu.be/pbdZm26YDpE?si=LQTHWeZMLD4w3Ahw) - special thanks to [aleciavogel](https://github.com/aleciavogel) for Resend notification service, and react-email implementation! [README](backend/src/modules/email-notifications/README.md)
- Stripe payment service: [setup video](https://youtu.be/dcSOpIzc1Og)
- Meilisearch integration: Adds powerful product search capabilities to your store. When deployed on Railway using the template, MeiliSearch is automatically configured and products are automatically indexed through subscribers (backend/src/subscribers/product-upsert.ts and product-delete.ts).

# /backend

### local setup
Video instructions: https://youtu.be/PPxenu7IjGM

- `cd /backend`
- `pnpm install` or `npm i`
- Rename `.env.template` ->  `.env`
- To connect to your online database from your local machine, copy the `DATABASE_URL` value auto-generated on Railway and add it to your `.env` file.
  - If connecting to a new database, for example a local one, run `pnpm ib` or `npm run ib` to seed the database.
- `pnpm dev` or `npm run dev`

### requirements
- **postgres database** (Automatic setup when using the Railway template)
- **redis** (Automatic setup when using the Railway template) - fallback to simulated redis.
- **MinIO storage** (Automatic setup when using the Railway template) - fallback to local storage.
- **Meilisearch** (Optional) - provides advanced search capabilities.

### commands
`cd backend/`
`npm run ib` or `pnpm ib` will initialize the backend by running migrations and seed the database with required system data.
`npm run dev` or `pnpm dev` will start the backend (and admin dashboard frontend on `localhost:9000/app`) in development mode.
`pnpm build && pnpm start` will compile the project and run from compiled source. This can be useful for reproducing issues on your cloud instance.

# /storefront

### local setup
Video instructions: https://youtu.be/PPxenu7IjGM

Install dependencies `npm i`
Rename `.env.local.template` ->  `.env.local`

### requirements
- A running backend on port 9000 is required to fetch product data and other information needed to build Next.js pages.

### commands
`cd storefront/`
`npm run dev` will run the storefront on uncompiled code, with hot-reloading as files are saved with changes.

## Useful resources
- How to setup credit card payment with Stripe payment module: https://youtu.be/dcSOpIzc1Og
- https://funkyton.com/medusajs-2-0-is-finally-here/#succuessfully-deployed-whats-next
  
<p align="center">
  <a href="https://funkyton.com/">
    <div style="text-align: center;">
      A template by,
      <br>
      <picture>
        <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
      </picture>
    </div>
  </a>
</p>
