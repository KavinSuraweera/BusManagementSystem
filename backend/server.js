const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import Routes
const packageRoutes = require('./routes/packages.js');
const busRouter = require('./routes/bus.js');
const busSheduleRouter = require('./routes/busschedule.js')

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use("/package", packageRoutes);
app.use("/bus", busRouter);
app.use("/busSchedule", busSheduleRouter);
 
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