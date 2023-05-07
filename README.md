# Image Generation UI Frontend

This is a REST API built with NodeJS and Express for an image generation service. The service allows users to generate images by inputting text or choosing images from a library.

## Prerequisites

To build and run the application, you need to have the following software installed on your system:

- Node.js (version 14.x or higher)

## Getting started

1. Clone the repository: `git clone https://github.com/MrBlackv2/raw-image-api.git`
2. Install dependencies: `cd image-generation-ui && npm install`
3. Start the development server: `npm run dev`
4. Send API requests to `http://localhost:3000`

## Build

To build and run the application for production, run the following command:
`npm run build && npm start`

## Packages Used

This project relies on the following Node.js packages:

- [axios](https://www.npmjs.com/package/axios): a package for making HTTP requests
- [body-parser](https://www.npmjs.com/package/body-parser): a package for parsing HTTP request bodies
- [cors](https://www.npmjs.com/package/cors): a package for enabling Cross-Origin Resource Sharing (CORS) between different domains
- [dotenv](https://www.npmjs.com/package/dotenv): a package for loading environment variables from a `.env` file
- [express](https://www.npmjs.com/package/express): a web framework for Node.js
- [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer): a package for handling OAuth 2.0 authentication with JSON Web Tokens (JWT)

These packages are listed in the `dependencies` field of the `package.json` file. To install them, run `npm install`.
