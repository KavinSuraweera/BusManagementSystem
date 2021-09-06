const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busScheduleSchema = new Schema({
    scheduleId : {
        type : String,
        required : true
    },

    RouteId : {
        type : Number,
        required : true
    },

    Route : {
        type : Number,
        required : true
    },

    Time : {
        type : String,
        required : true
    },

    BusNumber : {
        type : String,
        requird : true
    }


});


const busSchedule = mongoose.model("busSchedule", busScheduleSchema);

module.exports = busSchedule;
