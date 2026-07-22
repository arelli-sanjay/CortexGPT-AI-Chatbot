#  CortexGPT

## Overview

MERN stack AI powered conversational chatbot that lets users have real-time intelligent conversations with Google's Gemini AI. CortexGPT has a clean chat interface, conversation history stored in MongoDB and provides a seamless interaction experience via a modern React frontend.

## Features

- Chat with Google Gemini API powered by AI
- Live chat UI
- Automatically save conversation history
- Thread based chat management
- View past chat sessions
- Fast Express.js backend APIs
- Completely responsive
- Contemporary, simple UI
- REST API designing
- integration with MongoDB database
- Support for environment variables for secure API keys

##  Tech Stack

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI
- Google Gemini API

### Development Tools
- Git
- GitHub
- VS Code
- Postman
- Render

## How It Works

1. User inputs prompt in chat interface.
2. The request is sent from React frontend to Express backend.
3. The prompt is sent to the backend via REST APIs.
4. The prompt is sent to the Google Gemini API.
5. Gemini creates an AI response.
6. The response is stored in MongoDB along with the user’s message.
7. The frontend shows the response immediately and keeps the conversation history for later review.

## Screenshots

### Web Page

<img width="1907" height="886" alt="image" src="https://github.com/user-attachments/assets/868d4506-e7d9-424b-9207-67de4234e7d7" />

## Installation

### Clone the repository

```bash
git clone https://github.com/arelli-sanjay/CortexGPT-AI-Chatbot.git
```

### Navigate to the project

```bash
cd CortexGPT-AI-Chatbot
```

### Install Backend Dependencies

```bash
cd BACKEND
npm install
```

### Install Frontend Dependencies

```bash
cd ../FRONTEND
npm install
```

### Configure Environment Variables

Create a `.env` file inside the **BACKEND** folder.

```env
MONGODB_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Create a `.env` file inside the **FRONTEND** folder.

```env
VITE_API_URL=http://localhost:8080
```

### Start Backend

```bash
cd BACKEND
npm start
```

### Start Frontend

```bash
cd FRONTEND
npm run dev
```

Visit:

```
http://localhost:5173
```

## Live Demo

**Frontend**

https://cortexgpt-ai-chatbot-1.onrender.com/

**Backend API**

https://cortexgpt-ai-chatbot.onrender.com

## What I Learned

CortexGPT allowed me to get hands-on experience in developing a full-fledged web application powered by AI, built on the MERN stack. I learned how to connect Google's Gemini API to a Node.js backend, REST API design, store chat history with MongoDB, and connect a React frontend with backend services with asynchronous API calls.

The project also helped me to learn more about React state management, environment variable configuration, deployment on Render, debugging production issues, graceful handling of API errors, and structuring scalable full-stack project architecture.

## Author

**ARELLI SANJAY**
- GitHub: https://github.com/arelli-sanjay
- Linkedin: https://www.linkedin.com/in/sanjay-arelli-2b0970383/

## Support
If you like CortexGPT consider giving it a star, on GitHub.
