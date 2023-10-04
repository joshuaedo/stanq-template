# Stanq-Template

## Table of Contents

- [Introduction](#introduction)
- [Frameworks](#frameworks)
- [UI](#ui)
- [Hooks and Utilities](#hooks-and-utilities)
- [Code quality](#code-quality)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

## Introduction

Stanq is a React.js template bootstrapped with Shadcn UI, Typescript, Auth.js, Next.js App router, and React Query.

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google etc.
- [React Query](https://tanstack.com/query) – Efficient data fetching and state management library for React applications

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Shadcn UI](https://ui.shadcn.com/) – Beautifully designed components that you can copy and paste into your app.
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [next/font](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [next-themes](https://github.com/pacocoursey/next-themes) – A library for adding dark mode support to Next.js applications

### Hooks and Utilities

- `useDate` – A custom React hook that provides information about the current date and time. It automatically updates every minute and returns an object with the current year and a greeting message based on the time of day.

- `useDeviceSize` – A custom React hook that tracks the width and height of the window and updates them when the window is resized. It returns an array with the current width and height.

- `useOnClickOutside` – A custom React hook that listens for clicks or touch events outside a specified element (provided as a ref). It invokes a handler function when a click or touch event occurs outside the element.

- `cn` - A custom function that merges and formats CSS classes for easier class name management in React, particularly useful for Tailwind CSS integration.

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Zod](https://github.com/colinhacks/zod) – A powerful TypeScript-first validation and parsing library for robust data handling.
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js
- npm or Yarn

### Usage

Follow these steps to set up and run stanq locally.

1. Create a new project:

   ```bash
   npx create-next-app --example https://github.com/joshuaedo/stanq-template
   ```

 2.  Create a `.env.local` file in the project root and add the following variables:

   ```env
   NEXTAUTH_SECRET=your_next_auth_secret
   NEXTAUTH_URL=your_next_auth_url
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_NINJAS_API_KEY=api_key_from_ninjas_api
   ```

   Replace the placeholders with your actual Next Auth and Google OAuth credentials.

 3. Run the development server:

   ```bash
   npm run dev
   ```

   The application should be accessible at `http://localhost:3000`.

 4: Either remove the Hero.tsx file and fetchFacts() function or include your Ninja API Key from https://api-ninjas.com to disable the errors.

## License

This project is licensed under the MIT [License](https://github.com/joshuaedo/stanq-template/blob/main/LICENSE.md) 

## Author

- Joshua Edo ([joshuaedo.com](https://joshuaedo.com))
