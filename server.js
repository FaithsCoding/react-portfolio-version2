// Importing necessary modules
const express = require("express");  // Express is a popular Node.js framework
const router = express.Router();  // Router is used to define routes in our application
const cors = require("cors");  // CORS (Cross-Origin Resource Sharing) allows our API to process requests from different origins
const nodemailer = require("nodemailer");  // Nodemailer allows us to send emails

// Creating an instance of express server
const app = express();

// Middlewares
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON bodies in the request
app.use("/", router);  // Using the router to manage our routes

// Setting up our server to listen on port 5000
app.listen(5000, () => console.log("Server Running"));
