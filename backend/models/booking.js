const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    location1 :{
        type : String,
        required : true
    },

    location2 :{
        type : String,
        required : true
    }
});

const booking = mongoose.model("booking", bookingSchema);
module.exports = route;