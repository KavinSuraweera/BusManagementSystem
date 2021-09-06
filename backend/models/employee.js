const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpSchema = new Schema({

    EmpName : {
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

    NIC : {
        type : String,
        requird : true
    },

    Email : {
        type : String,
        requird : true
    },

    Type: {
        type : String,
        requird : true
    }

});


const customer = mongoose.model("employee", EmpSchema);

module.exports = customer;
