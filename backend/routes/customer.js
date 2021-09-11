const express = require('express');
const customer = require('../models/customer.js');
const { findByIdAndUpdate } = require('../models/customer.js');
let Customer = require('../models/customer.js')

const router = express.Router(); 

//LOGIN
router.route("/login").post((req, res) => {

    const Email = req.body.Email;
    const Password =req.body.Password;

   Customer.findOne({Email}).then((customer)=>{  
       if(!customer){
            return res.status(400).json({msg:"User does not exist"});
       }
       if(customer.Password===Password){
           res.json(customer);
       }
       else{
           res.status(400).json({msg:"Invalid Password"});
       }
        console.log(customer)

    }).catch((err) =>{
        res.status(500).json({msg:"Server Error"});
    })

})


//ADD

router.route("/add").post((req, res) => {

    const UserName = req.body.UserName;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password =req.body.Password;

    const newcustomer = new customer({
        UserName,
        FirstName,
        LastName,
        Email,
        Password
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
        UserName,
        FirstName,
        LastName,
        Email,
        Password} = req.body;

    const customId = {
        UserName,
        FirstName,
        LastName,
        Email,
        Password
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