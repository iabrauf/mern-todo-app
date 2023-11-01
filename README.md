# MERN Stack Todo App

A simple Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Backend](#running-the-backend)
- [Running the Frontend](#running-the-frontend)
- [Environment Variablesd](#Environment-Variables)
- [Application Features](#application-features)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Code editor (e.g., Visual Studio Code)
- Git (optional)

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/iabrauf/mern-todo-app.git
cd mern-todo-app
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Run the frontend development server:

```bash
cd frontend
npm run dev
```

The application should be accessible at http://localhost:3000.

## Running the Backend

To start the backend server, navigate to the `backend` directory and run the following command:

```bash
cd backend
npm start
```

You may need to set up environment variables, such as the MongoDB connection URI, in a .env file.

##Running the Frontend
To run the frontend, navigate to the frontend directory and execute the following command:

```bash
cd frontend
npm run dev
```

## Environment Variables

To run this project, you need to configure the following environment variables:

### Backend Environment Variables

- **ATLAS_URI**: MongoDB connection URI for your backend.
- **PORT**: Port number for the backend server.

### Frontend Environment Variables

- **NEXT_PUBLIC_API_URL**: The URL of the backend API for your frontend.

You can set these environment variables in your `.env.local` file for the frontend and in your backend environment.

#### Backend Environment Variables (.env)

```plaintext
ATLAS_URI = mongodb_connection_string
PORT = 5000

Frontend Environment Variables (.env.local)
plaintext
NEXT_PUBLIC_API_URL = "http://localhost:5000" or production url


## Application Features

features of application

## Feature 1: Create and Manage Todos

- Users can add, edit, and delete todo items.
- Each todo can have a name and a completion status.
- Each todo have the date of creation at which he is created also.
- Todos are organized for better task management.

## Feature 2: Mark Todos as Completed

- Users can mark todos as completed or uncompleted with a simple click.
- Completed todos are visually distinct to track progress easily.

## Feature 3: Sort and Filter Todos

- Users can sort todos by various criteria, such as creation date or completion status.
- Filtering options help users focus on specific tasks. Only those todos will be displayed which are created on same day

## Feature 4: User-Friendly Interface

- The app offers an intuitive and responsive user interface.
- Clean design and layout enhance the user experience.

## Feature 5: Error Handling and Validation

- The application provides error handling and validation to prevent user mistakes.
- Users receive feedback on incorrect input or failed actions.

## Feature 6: Responsive Design

- The app is designed to work seamlessly on various devices, including desktop and mobile.

## Feature 7: API Integration

- The application communicates with a backend server to store and retrieve todo data.
- This ensures data persistence and synchronization across devices.
```
