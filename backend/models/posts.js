const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    bid:{
        type:String,
        required:true
    },
    bname:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    pnum:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }



});

module.exports = mongoose.model('Posts',postSchema);