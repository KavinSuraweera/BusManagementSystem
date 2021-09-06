const express = require('express');
const { findByIdAndUpdate } = require('../models/bus.js');
let Bus = require('../models/bus.js')

const router = express.Router(); 

//Add bus 

router.route("/add").post((req, res) => {



    const busNo = req.body.busNo;
    const NoOfSeats = Number(req.body.NoOfSeats);
    const regNo = Number(req.body.regNo);
    const Type = req.body.Type;
    const permitID = req.body.permitID;

    const newBus = new Bus({
        busNo,
        NoOfSeats,
        regNo,
        Type,
        permitID
    })


    
    newBus.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Bus Added Successfully "
        })
    })

})

router.route("/").get((req, res) =>{
    Bus.find().then((bus)=>{
        res.json(bus)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) =>{
    let busId = req.params.id;
    const { busNo,
        NoOfSeats,
        regNo,
        Type,
        permitID} = req.body;

    const updateBus = {
        busNo,
        NoOfSeats,
        regNo,
        Type,
        permitID
    }

    const update = await Bus.findByIdAndUpdate(busId, updateBus).then(()=>{
        res.status(200).send({status:"Bus Updates sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating bus details"})
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let busId = req.params.id;
    const bus = await Bus.findById(busId).then((bus)=>{
        res.status(200).send({status:"Bus fetched",bus})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get bus", err : err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let busId = req.params.id;
    const bus = await Bus.findOneAndDelete(busId).then((bus)=>{
        res.status(200).send({status:"bus deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting bus",err : err.message})
    })
})




module.exports = router;