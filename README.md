# STANQ-Template


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Stanq a React.js template bootstrapped with Shadcn ui, Typescript, Auth.js, Next.js App router, and React Query.

## Features

- Typescript
- Next.js 13 App Directory
- Radix UI Primitives
- Icons from Lucide
- Dark mode with next-themes
- Shadcn UI
- React Query
- Tailwind CSS class sorting, merging and linting.
- Auth.js authentication


## Getting Started

Follow these steps to set up and run stanq locally.

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js
- npm or Yarn

### Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/joshuaedo/stanq-template.git
   cd stanq-template
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Delete the .git folder

1. Edit the name and version in the package.json

1. Edit the project folder's name 

1. Configure environment variables:

   Create a `.env.local` file in the project root and add the following variables:

   ```env
   NEXTAUTH_SECRET=your_next_auth_secret
   NEXTAUTH_URL=your_next_auth_url
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_NINJAS_API_KEY=api_key_from_ninjas_api
   ```

   Replace the placeholders with your actual Firebase and Google OAuth credentials.

1. Run the development server:

   ```bash
   npm run dev
   ```

   The application should be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT [License](https://github.com/joshuaedo/stanq-template/LICENSE) 
