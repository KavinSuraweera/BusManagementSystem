const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardPaymentSchema = new Schema({
    uId : {
        type : String,
        required : true
    },

    


});


const cardPayment = mongoose.model("cardPayment", cardPaymentSchema);

module.exports = cardPayment;
