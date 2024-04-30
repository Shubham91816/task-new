


const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

// //import routes for TODO API
const todoRoutes = require("./routes/todos");




//mount the todo API routes
app.use( todoRoutes);




//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");

dbConnect();
