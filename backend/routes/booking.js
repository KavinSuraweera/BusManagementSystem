const express = require('express');
const booking = require('../models/route.js');
const schedules = require('../models/busschedule.js')

const router = express.Router();

router.route("/get/:loc").get(async(req,res)=>{
    let loc = req.params.loc;
    const bookings =  await booking.find({from: loc}).then((bookings)=>{
        res.status(200).send({status:"sucessfull", bookings})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error",err:err.message})
    })
}) 

router.route("/getTo(/:to)(/:loc)").get(async(req,res)=>{
    let to = req.params.to;
    let loc =req.params.loc;

    console.log(to)
    const bookings = await booking.find({from:loc,to:to}).then((booking)=>{
        res.status(200).send({status:"Sucessfull", bookings})
    }).catch((err)=>{
        console.log(err);
        res.status(err).send({status:"error", err:err.message})
    })
    
})

router.route("/ge/:to").get(async(req,res)=>{
    let to = req.params.to;
    const schedule =  await schedules.find({to:to}).then((schedule)=>{
        res.status(200).send({status:"process sucessfull",schedule})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error",err:err.message})
    })
    
})

module.exports = router;