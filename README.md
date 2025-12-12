

````markdown
# SwiftCareer Frontend

This is the **frontend** of the **SwiftCareer** job portal application, built with **React**, **Vite**, and **Tailwind CSS**.
It connects to the SwiftCareer backend API to allow users to register, login, browse jobs, apply for jobs, and manage their profiles.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [API Integration](#api-integration)  
- [Available Scripts](#available-scripts)  
- [Environment Variables](#environment-variables)  
- [Deployment](#deployment)  
- [License](#license)  
- [Author](#author)

---

## Features

- User authentication (register, login, logout)  
- User profile update with image upload  
- Company and job listing display  
- Job application functionality  
- Dark/light theme support with `next-themes`  
- State management using **Redux Toolkit** + **redux-persist**  
- Smooth animations with **Framer Motion** and **tw-animate-css**  
- Responsive and modern UI using **Tailwind CSS**  
- Component library support using **Radix UI**  

---

## Technologies Used

- **React** (v19.x)  
- **Vite** (v7.x)  
- **Tailwind CSS** (v4.x) + `tailwind-merge`  
- **Redux Toolkit** + `react-redux` + `redux-persist`  
- **Axios** for API calls  
- **Framer Motion** for animations  
- **Radix UI** for accessible components  
- **Lucide React** for icons  
- **Next-Themes** for theme switching  
- **tw-animate-css** for animations  

---

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/swiftcareer-frontend.git
cd swiftcareer-frontend
````

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables** (see [Environment Variables](#environment-variables)).

4. **Start the development server:**

```bash
npm run dev
```

The app will run on `http://localhost:5173` (or the port provided by Vite).

---

## Project Structure

```
src/
 ├─ assets/            # Images, icons, fonts
 ├─ components/        # Reusable React components
 ├─ pages/             # Route components / pages
 ├─ redux/             # Redux store and slices
 ├─ services/          # Axios API services
 ├─ styles/            # Tailwind CSS and global styles
 ├─ utils/             # Utility functions
 ├─ App.jsx            # Main App component
 └─ main.jsx           # Entry point
```

**Alias `@`** points to `src/` for easier imports:

```js
import Button from '@/components/Button'
```

---

## API Integration

All API calls are proxied through Vite to your backend (`https://swiftcareer-server.vercel.app`):

```js
axios.get('/api/users/login', { withCredentials: true })
```

* `/api/...` automatically forwards to backend.
* `withCredentials: true` allows cookies to be sent for authentication.

---

## Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build production-ready bundle            |
| `npm run preview` | Preview the production build             |
| `npm run lint`    | Run ESLint to check code quality         |

---

## Environment Variables

Create a `.env` file in the root folder if needed:

```
VITE_API_URL=https://swiftcareer-server.vercel.app
```

* Used in API services to set the backend base URL.

---

## Deployment

* Can be deployed to **Vercel**, **Netlify**, or any static hosting that supports React.
* Make sure the backend URL in `.env` or proxy in `vite.config.js` points to your deployed backend.

---

## Author

**Jakaria Ahmed**
Student & Developer
Green University of Bangladesh
```


