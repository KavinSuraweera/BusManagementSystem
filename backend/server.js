const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD

const app = express();

//import Routes
const packageRoutes = require('./routes/packages.js');

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use("/package", packageRoutes);
 
const PORT = 8000;
const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser :true,
    useUnifiedTopology : true  
})

.then(()=>{
    console.log(`----------------- DB connectd Sucessfully ! -----------------`)
}).catch((err)=>{
    console.log(`DB connection error`, err.message)
})

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
});
=======
const dotenv = require('dotenv');
const app = express();
require("dotenv").config();

const port = process.env.port || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongodb Connection Success!");
});

const studentRouter = require("./routes/students");
app.use("/student", studentRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`)
})
>>>>>>> 56799b8b54716d7710bccef8bd1e85a68580e61c
