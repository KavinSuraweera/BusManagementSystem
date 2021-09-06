const express = require('express');
let BusSchedules = require('../models/busschedule.js')

const router = express.Router()

router.route("/add").post((req, res ) =>{
    const scheduleId = req.body.scheduleId;
    const RouteId = req.body.scheduleIde;
    const Route = req.body.scheduleIde;
    const Time = req.body.scheduleIde;
    const BusNumber = req.body.scheduleIde;

    const newBusSchedule = new BusSchedules({
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber 
    })

    newBusSchedule.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"BusSchedule Added Sucessfully"
        })
    })
})

