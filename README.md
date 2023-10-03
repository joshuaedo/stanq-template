# Galleria 


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Galleria is an immersive web application that elevates your visual experience by presenting a dynamic gallery of images, intuitively manipulable through seamless drag-and-drop interactions. Developed using Next.js 13 and TypeScript, Galleria promises a captivating journey through the world of art and imagery, where every picture can be effortlessly repositioned to curate your digital exhibition.

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Icons from Lucide
- Dark mode with next-themes
- Pexels API
- Drag and Drop with DND Kit
- React Query
- Tailwind CSS class sorting, merging and linting.
- Local email/password authentication
- Google OAuth sign-in
- User session management
- Protected routes
- User authentication state in the frontend

## Getting Started

Follow these steps to set up and run the Galleria application locally.

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js
- npm or Yarn
- Firebase project with Firebase Authentication enabled (for Google OAuth)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/galleria.git
   cd galleria
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env.local` file in the project root and add the following variables:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   Replace the placeholders with your actual Firebase and Google OAuth credentials.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application should be accessible at `http://localhost:3000`.

## Usage

Galleria provides an example of how to create a sign-in form, sign out users, and protect routes that require authentication. You can explore the codebase to understand how these features are implemented.

## Authentication

### Local Email/Password Authentication

- Use the sign-up form to create a new account with your email and password.
- Use the sign-in form to log in with your email and password.

### Google OAuth Sign-In

- Sign In With Google is currently disabled for this project.

## Contributing

We welcome contributions to Galleria! If you find any issues, have feature requests, or want to contribute improvements, just do it.

## License

This project is licensed under the MIT License. 
