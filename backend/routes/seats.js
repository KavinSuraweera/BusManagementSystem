const express = require('express');
let Seats = require('../models/seats.js');

const router = express.Router();

router.route("/add").post((req, res) =>{
    const busId =  req.body.busId;
    const adultsCount = Number(req.body.adultsCount);
    const childrenCount = Number(req.body.childrenCount);
    const studentCount = Number(req.body.studentCount);

    const newSeats = new Seats({
        busId,
        adultsCount,
        childrenCount,
        studentCount

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

module.exports = seats();