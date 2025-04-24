# Node.js Boilerplate with Express and TypeScript

A complete Node.js API boilerplate with Express and TypeScript, including user authentication (JWT, Google, Facebook), CRUD operations, file uploads, and Swagger documentation.

## Features

- **TypeScript**: Type safety and better developer experience
- **Express**: Fast and minimalist web framework for Node.js
- **PostgreSQL**: Robust relational database
- **TypeORM**: ORM for database operations
- **Authentication**:
  - Local (email/password) with JWT
  - Google OAuth
  - Facebook OAuth
- **API Documentation**: Swagger/OpenAPI
- **File Upload**: Multer for handling multipart/form-data
- **Validation**: Zod for schema validation
- **Error Handling**: Centralized error handling
- **Docker Support**: Containerization for easy deployment
- **ESLint**: Code linting
- **Husky**: Git hooks for code quality

## Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL
- Docker and Docker Compose (optional)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-boilerplate.git
   cd node-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

### Using Docker

1. Make sure Docker and Docker Compose are installed.

2. Set up environment variables in `.env`.

3. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

## API Documentation

API documentation is available at `http://localhost:3000/api-docs` when the server is running.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/facebook` - Facebook OAuth login
- `GET /api/auth/facebook/callback` - Facebook OAuth callback

### Users

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `POST /api/users/:id/profile-picture` - Upload user profile picture

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## License

MIT
