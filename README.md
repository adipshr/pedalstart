# Task Management Application

This is a simple Task Management Application that allows users to create, read, update, and delete tasks. This project demonstrates a full-stack application using MongoDB, Express.js, React, and Node.js (MERN stack).

## Features

- **Create a new task**: Add a new task with a title, description, due date, and status.
- **View all tasks**: Display a list of all tasks.
- **Edit a task**: Update the details of an existing task.
- **Delete a task**: Remove a task from the list.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Getting Started

### Install dependencies

\`\`\`bash
npm install
cd client
npm install
cd ..
\`\`\`

### Setting up MongoDB

Make sure you have MongoDB installed and running. If you're using a cloud instance (e.g., MongoDB Atlas), update the MongoDB connection string in \`config/keys.js\`.

### Configure Environment Variables

Create a \`.env\` file in the root directory and add the following environment variables:

\`\`\`
MONGO_URI=your_mongodb_connection_string
PORT=5000
\`\`\`

### Run the Application

Start the server and the React application:

\`\`\`bash
npm run dev
\`\`\`

This command will concurrently start the Express server and the React development server.

## API Endpoints

### Retrieve all tasks

\`\`\`
GET /api/tasks
\`\`\`

### Create a new task

\`\`\`
POST /api/tasks
\`\`\`

**Request Body:**
\`\`\`json
{
"title": "Task Title",
"description": "Task Description",
"dueDate": "2024-07-17",
"status": "in-progress"
}
\`\`\`

### Retrieve a single task by ID

\`\`\`
GET api/tasks/:id
\`\`\`

### Update an existing task

\`\`\`
PUT api/tasks/:id
\`\`\`

**Request Body:**
\`\`\`json
{
"title": "Updated Task Title",
"description": "Updated Task Description",
"dueDate": "2024-07-20",
"status": "completed"
}
\`\`\`

### Delete a task

\`\`\`
DELETE api/tasks/:id
\`\`\`
