const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpSchema = new Schema({

    EmpName : {
        type : String,
        required : true
    },

    

    Phone : {
        type : String,
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


const employee = mongoose.model("employee", EmpSchema);

module.exports = employee;
