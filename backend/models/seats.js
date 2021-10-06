const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seatsSchema = new Schema({
    busId : {
        type : String,
        required : true
    },

    adultsCount : {
        type : Number,
        requuired : true
    },

    childrenCount : {
        type : Number,
        requuired : true
    },

    studentCount : {
        type : Number,
        requuired : true
    },

    seat1 : {
        type : Boolean,
        required : true

    }

    



});


const seats = mongoose.model("seats", seatsSchema);

module.exports = seata;
