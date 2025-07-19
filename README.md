# WeeSpeak – Frontend

A modern frontend application for an English language school website.  
Built with **React**, **TypeScript**, and **Vite**.

This project allows users (typically parents) to sign up their children for English courses via an online form.  
The form connects to a REST API backend built in ASP.NET Core.

---

## Features

- Course registration form with validation
- Integration with a REST API backend
- Client-side routing using `react-router-dom`
- Pages: Home, Offer, Schedule, Contact, Signup
- Simple structure, ready for styling with Tailwind CSS, CSS Modules, or Styled Components
- Built with scalability and code clarity in mind

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weespeak-frontend.git
cd weespeak-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be running at:  
`http://localhost:5173`

Make sure the backend API is also running at:  
`http://localhost:5000`

---

## Backend Integration

This frontend app sends registration form data to the backend endpoint:

```http
POST http://localhost:5000/api/registrations
```

The backend is built with ASP.NET Core Web API.  
You can find the backend repository here:  
[weespeak-backend](https://github.com/juliarutkowska/WeeSpeak-backend)

---

## License

This project was created for educational and portfolio purposes.  
Feel free to explore, use, or modify it as needed.
