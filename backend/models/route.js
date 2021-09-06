const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routeSchema = new Schema({
    routeId : {
        type : String,
        required : true
    },

    routeName : {
        type : String,
        requuired : true
    },

    to : {
        type : String,
        requuired : true
    }  , 
    
    from: {
        type : String,
        requuired : true
    }



});


const route = mongoose.model("route", routeSchema);

module.exports = route;
