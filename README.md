# MERN Recipes App

A Recipe app built with the MERN stack along with React Hooks, Redux for state management and Reactstrap

## Screenshots:

### Home Screen

![Home Screen](/client/public/assets/home.PNG)

![Home Screen mobile](/client/public/assets/home2.PNG)

### User Account Screen

![User Account Screen](/client/public/assets/dash.PNG)

![Recipes](/client/public/assets/picks.PNG)

### Recipe Details Screen

![Recipe](/client/public/assets/recipe.PNG)

### User Recipes Screen

![My Recipes](/client/public/assets/mypicks.PNG)

## Quick Start

Add your DB_CONNECTION url and your TOKEN_SECRET to file named .env

```bash
# Install dependencies for server
npm install

# Install dependencies for client
cd client
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

[Demo here](lien)
