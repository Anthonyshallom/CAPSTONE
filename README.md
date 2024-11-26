1. Project Setup

Backend: Node.js with Express.

Database: MongoDB (or PostgreSQL).

Frontend: HTML, CSS, JavaScript.

2. Backend Structure

a. Server Setup (server.js)

Initialize Express server.

Set up middlewares for JSON parsing and handling errors.

Import routes for authentication and task management.

Connect to MongoDB/PostgreSQL database.

b. Models

User Model (models/User.js): Stores user data (hashed password, JWT).

Task Model (models/Task.js): Stores task data (title, description, deadline, priority, user ID).

c. Routes

Authentication (routes/auth.js):

POST /register: Registers a user, hashes the password, stores in the database.

POST /login: Verifies credentials, issues a JWT for session management.

Tasks (routes/tasks.js):

POST /tasks: Creates a task with title, description, deadline, priority.

GET /tasks: Retrieves all tasks for the user, with options to filter by priority or search by keywords.

PUT /tasks/:id: Updates a specific task by ID.

DELETE /tasks/:id: Deletes a specific task by ID.

d. Middleware

Auth Middleware: Checks if a user is authenticated by verifying the JWT token for each request.

3. Database Schema Design

User Collection:

Fields: email, hashedPassword, createdAt.

Task Collection:

Fields: title, description, deadline, priority, userID, completed.

4. Frontend Structure

a. HTML (index.html)

Structure for the login, task creation, task listing, and filter/search features.

b. JavaScript (app.js)

Handles AJAX requests to the backend for authentication and CRUD operations.

Implements functions for:

Login/Register: Sends credentials, receives token, stores in localStorage.

Add Task: Posts a new task to the backend.

Edit Task: Updates an existing task by ID.

Delete Task: Deletes a task by ID.

Filter/Search: Filters tasks by priority and searches by title/description keywords.

Error Handling: Displays error messages on the frontend for any invalid operations.

5. CSS (styles.css)

Provides styling for forms, task lists, buttons, and the main layout.

Error messages for invalid entries and visual cues for completed tasks.

6. Deployment

Backend: Deploy the server API on Fly.io.

Frontend: Host the HTML, CSS, and JavaScript files on Vercel or Netlify.

Environment Variables: Use .env for JWT secret and database credentials.

7. Key Features and Testing

Unit Testing: Test functions for registration, login, task creation, update, delete.

Security: Input validation, protection against SQL injection/XSS.

This setup provides a clear and secure foundation for TaskMaster’s core functionalities: user management, task CRUD, filtering, and error .



[![Watch the video](https://https://files.fm/f/s4k9wbmbfr)](https://files.fm/f/s4k9wbmbfr)



