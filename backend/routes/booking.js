const express = require('express');
const booking = require('../models/route.js');
const schedules = require('../models/busschedule.js')

const router = express.Router();

router.route("/add").post((req, res) =>{
    const busId =  req.body.busId;
    const uId = req.body.uId;
    const seat1 = Number(req.body.seat1)
    

    const newSeats = new Seats({
        uId,
        busId,
        seat1
    
        

    })

    newSeats.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Seats booked successfully"
        })
    })
})

module.exports = router;