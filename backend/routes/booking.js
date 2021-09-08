const express = require('express');
const booking = require('../models/route.js');

const router = express.Router();

router.route("/get/:loc").get(async(req,res)=>{
    let loc = req.params.loc;
    const bookings =  await booking.find({from: loc}).then((bookings)=>{
        res.status(200).send({status:"sucessfull", bookings})
    }).catch((err)=>{
        console.lof(err.message);
        res.status(500).send({status:"error",err:err.message})
    })
}) 

module.exports = router;