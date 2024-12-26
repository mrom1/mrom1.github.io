# mrom1 GitHub Page Source Code

A web application built using [Nuxt.js 2](https://nuxtjs.org/) for hosting several self-written articles about software development.

## Prerequisites

To run this project, ensure you have the following installed:

- **Node.js**: Version `12.22.12` (required for compatibility with Nuxt.js 2).
- **npm**: Comes bundled with Node.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Building for Production

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

## Steps for Deployment

1. Generate static files:

   ```bash
   npm run generate
   ```

2. Test locally:

   ```bash
   npx serve dist
   ```

3. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```
