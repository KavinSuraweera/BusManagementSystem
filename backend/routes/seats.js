const express = require('express');
let Seats = require('../models/seats.js');

const router = express.Router();

router.route("/add").post((req, res) =>{
    const busId =  req.body.busId;
    const adultsCount = Number(req.body.adultsCount);
    const childrenCount = Number(req.body.childrenCount);
    const studentCount = Number(req.body.studentCount);
    const seat1 = Boolean(req.body.seat1)

    const newSeats = new Seats({
        busId,
        adultsCount,
        childrenCount,
        studentCount,
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

// retricve all 

router.route("/").get((req, res) => {
    Seats.find().then((seats) => {
        res.json(seats)
    }).catch((err) => {
        console.log(err)
    })
})

// retrive by bus id 

router.route("/getseats/:busId").get(async(req, res) => {
    busId = req.params.busId;
    const schedule = await Seats.find({busId:busId}).then((seats) => {
        res.status(200).send({status:'Sucessfully fetched by busId', seats})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:'error with fetching seats by busId'})
    })
})

module.exports = router;