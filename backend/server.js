const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

 app.use(express.static('public'))

//  app.use('/uploads', express.static(path.resolve(__dirname, './uploads')));

//import Routes
const packageRoutes = require('./routes/packages.js');
const busRouter = require('./routes/bus.js');
const busscheduleRouter = require('./routes/busschedule.js')
const cusRouter = require('./routes/customer.js');
const routeRouter = require('./routes/route.js')
const empRouter = require('./routes/employee.js');
const adminRouter = require('./routes/admin.js');
const bookingRouter = require('./routes/booking.js')
const ownerRouter = require('./routes/posts.js')
const seatsRouter = require('./routes/seats.js')

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use("/package", packageRoutes);
app.use("/bus", busRouter);
app.use("/busSchedule", busscheduleRouter);
app.use("/customer", cusRouter);
app.use("/route", routeRouter);
app.use("/admin",adminRouter);
app.use("/employee",empRouter);
app.use("/booking",bookingRouter);
app.use("/seats", seatsRouter);
app.use(ownerRouter);
 
const PORT = 8000;
// const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';
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