# T3 Gallery

T3 Gallery is a modern, full-stack image gallery application built with the T3 Stack and other cutting-edge technologies. This project serves as a portfolio piece to showcase a robust, production-ready application with a focus on performance, user experience, and a sleek, neon purple aesthetic.

Users can sign in, and authorized users can upload images to a shared gallery. The application features a modal view for images, which also generates a unique, shareable URL for each image. This project was inspired by Theo's "From 0 to Production" tutorial, but has been extended with unique features and a custom design.

<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
  <img src="https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/UploadThing-4503A8?style=for-the-badge&logo=uploadthing&logoColor=white" alt="UploadThing"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Upstash-16A34A?style=for-the-badge&logo=upstash&logoColor=white" alt="Upstash"/>
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui"/>
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm"/>
</div>

<br/>

<img width="1360" height="768" alt="{33686724-D690-4F97-9B59-CF585155E1C9}" src="https://github.com/user-attachments/assets/0e54de70-4af5-4224-b0d3-5c6ac67b3a8d" />

## ✨ Live Demo

**[Live Demo](https://t3gallery-jet-three.vercel.app/)**

## 🌟 Features

- **Authentication:** Secure user authentication powered by Clerk, with custom logic to determine which users have upload privileges.
- **Image Uploads:** Image uploads handled by UploadThing, allowing file management.
- **Dynamic Image Gallery:** A responsive, grid-based gallery that displays all uploaded images.
- **Modal Image View:** Clicking on an image opens it in a modal, utilizing Next.js's Parallel Routes for a non-intrusive user experience and a shareable URL.
- **Direct Image Linking:** Each image has its own dedicated page, making it easy to share and view individual images.
- **Custom Styling:** A unique neon purple theme built with Tailwind CSS, giving the application a distinct look.
- **Database:** Utilizes Drizzle ORM with a Vercel PostgreSQL database for efficient and type-safe database queries.
- **Rate Limiting:** Implemented with Upstash Redis to prevent abuse with ratelimiting.
- **Toast Notifications:** User-friendly toast notifications for actions like successful uploads or errors.
- **Server Actions:** Secure and efficient server-side logic with Next.js Server Actions for operations like deleting images.

## ✅ Feature Checklist

This checklist outlines the features implemented in the project, based on the original tutorial and additional enhancements.

- [x] Make it deploy (Vercel)
- [x] Tidy up build process
- [x] Scaffold basic UI with mock data
- [x] Actually set up a database (Vercel Postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ Clerk)
- [x] Add image upload (w/ UploadThing)
- [x] "taint" (server-only)
- [x] Use Next/Image component
- [ ] Error Management (w/ Sentry) **Unavailable (Requires Subscription)**
- [x] Routing/image page (Parallel Route)
- [x] Update upload button to be less cringe
- [x] Add toast notifications
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (w/ Upstash)

## 💻 Tech Stack

This project is built with a modern, full-stack technology set:

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database:** [Vercel Postgres](https://vercel.com/storage/postgres)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **File Uploads:** [UploadThing](https://uploadthing.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **Rate Limiting:** [Upstash Redis](https://upstash.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or higher)
- pnpm
- A Clerk account
- An UploadThing account
- A Vercel account (for Vercel Postgres)
- An Upstash account (for ratelimiting)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/DiegoxK/t3gallery.git
    ```
2.  **Install NPM packages**
    ```sh
    pnpm install
    ```
3.  **Set up environment variables**

    Create a `.env` file in the root of the project and add the necessary environment variables. You can use the `.env.example` file as a template.

4.  **Push the database schema**
    ```sh
    pnpm db:push
    ```
5.  **Run the development server**
    ```sh
    pnpm dev
    ```

## 🎉 Acknowledgements

- [Theo - T3 Stack](https://t3.gg/)
- [Create T3 App](https://create.t3.gg/)
- [Original Tutorial by Theo](https://youtu.be/d5x0JCZbAJs?si=D9JJWjqBKohkpkd3)
