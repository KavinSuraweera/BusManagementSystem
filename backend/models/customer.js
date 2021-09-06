const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    CusNIC : {
        type : Number,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

    Phone : {
        type : Number,
        required : true
    },

    Name : {
        type : String,
        requird : true
    },

    Email : {
        type : String,
        requird : true
    },

    Address: {
        type : String,
        requird : true
    }

});


const customer = mongoose.model("customer", customerSchema);

module.exports = customer;
