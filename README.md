# Dav-Develops Portfolio

A full-stack portfolio website built with React, Vite, and Express. The project presents personal information, projects, skills, technologies, contact details, and protected authentication flows.
<img width="1912" height="932" alt="image" src="https://github.com/user-attachments/assets/29036ce9-4485-48af-be05-2455d3e846d8" />

**Fruit (3D Object) Navigation System.** 🤩

<img width="1892" height="906" alt="image" src="https://github.com/user-attachments/assets/de5de82c-1ddc-4400-9cdc-054c0a337d13" />


## Overview

This repository contains a modern portfolio application with:

- A React + Vite frontend for the public portfolio experience
- An Express backend for API routes and auth-related functionality
- Protected and public routing based on authentication state
- Sections for About, Home, Projects, Skills, Technologies, and Contact

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Bootstrap
- Framer Motion
- Font Awesome
- Redux Toolkit / React Redux
- Axios

### Backend
- Node.js
- Express
- CORS
- Cookie Parser
- JWT support via jsonwebtoken
- MongoDB via mongoose

## Project Structure (Simplified and easily perceptuable)

    // Rough Note: Sometimes we need to use the 'bootstrap java Api' mechanism, to control a bootstrap 
    // component's behavior with explicit javascript code, because, 'bootstrap data api' mechanism of bootstrap is not
    //  compatible with different javascript frameworks like React, Angular, Vue, etc. So,
    
 /                   Bootstrap Carousel
                            │
               ┌────────────┴────────────┐
               │                         │
        Data API                   JavaScript API
               │                         │
 data-bs-ride="carousel"       new Carousel(element)
               │                         │
        automatic init             manual init
 Reference/explanation: https://getbootstrap.com/docs/5.3/getting-started/javascript

```text
Portfolio/
├── client/
│   └── src/
│       ├── app/
│       ├── assets/
│       ├── camera/
│       ├── components/
│       ├── features/
│       ├── hooks/
│       ├── pages/
│       │   ├── About/
│       │   ├── Authentication/
│       │   ├── Contact/
│       │   ├── Home/
│       │   ├── Projects/
│       │   ├── Skills/
│       │   └── Technologies/
│       ├── routes/
│       ├── scenes/
│       ├── services/
│       ├── styles/
│       ├── utils/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── vite.config.js
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

From the project root:

```bash
npm install
```

To install the server dependencies:

```bash
cd server
npm install
```

### Run the app locally

Start the frontend:

```bash
npm run dev
```

Start the backend server:

```bash
cd server
npm run dev
```

The frontend typically runs on Vite's default port and the backend runs on its configured Express port.

## Available Scripts

### Root project

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the production bundle
npm run lint     # Run OXLint
npm run preview  # Preview the production build
```

### Server

```bash
cd server
npm run dev      # Start the Express server with nodemon
npm run start    # Start the Express server
npm test         # Placeholder test command
```

## Features

- Responsive portfolio layout
- Multi-page portfolio navigation
- Project showcase and skill sections
- Authentication routes and protected access
- Contact and personal branding sections
- API integration with backend services

## License

© 2026 Dav-Develops. Licensed under CC BY‑NC‑ND 4.0.
https://creativecommons.org/licenses/by-nc-nd/4.0/

## Author

Dav-Develops

## Notes

This repository is configured as a portfolio application with a frontend deployment and an API backend, making it suitable for showcasing work, technologies, and contact information while supporting authenticated features.
