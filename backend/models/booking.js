const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    id : {
        type : String,
        required : true
    },

    busId : {
        type : String,
        required : true
    },


});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;