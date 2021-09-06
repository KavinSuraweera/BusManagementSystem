const express = require('express');
const customer = require('../models/customer.js');
const { findByIdAndUpdate } = require('../models/customer.js');
let Customer = require('../models/customer.js')

const router = express.Router(); 

//Add bus 

router.route("/add").post((req, res) => {

    const CusNIC = Number(req.body.CusNIC);
    const Password = req.body.Password;
    const Phone = Number(req.body.Phone);
    const Name = req.body.Name;
    const Email =req.body.Email;
    const Address = req.body.Address;

    const newcustomer = new customer({
        CusNIC,
        Password,
        Phone,
        Name,
        Email,
        Address
    })


    
    newcustomer.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Customer Added Successfully "
        })
    })

})

router.route("/").get((req, res) =>{
    Customer.find().then((customermm)=>{
        res.json(customermm)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) =>{
    let cusId = req.params.id;
    const {
        CusNIC,
        Password,
        Phone,
        Name,
        Email,
        Address} = req.body;

    const customId = {
        CusNIC,
        Password,
        Phone,
        Name,
        Email,
        Address
    }

    const update = await Customer.findByIdAndUpdate(cusId, customId).then(()=>{
        res.status(200).send({status:"Customer Updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating customer details"})
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let cusId = req.params.id;
    const customer = await Customer.findById(cusId).then((cus)=>{
        res.status(200).send({status:"Customer fetched",cus})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with retrieving customer", err : err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let cusId = req.params.id;
    const customer = await Customer.findOneAndDelete(cusId).then((cus)=>{
        res.status(200).send({status:"Customer deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting Customer",err : err.message})
    })
})

module.exports = router;