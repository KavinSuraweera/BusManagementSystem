const express = require('express');
let Employee = require('../models/employee.js')

const router = express.Router()

//add schedule

router.route("/add").post((req, res ) =>{
    
    const EmpName = req.body.EmpName;
    
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const NIC = req.body.NIC;
    const Type = req.body.Type;

    const newEmployee = new Employee({
        EmpName,
        
        Email,
        Phone,
        NIC,
        Type 
    })

    newEmployee.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Employee Added Sucessfully"
        })
    })
})

router.route("/").get((req, res) =>{
    Employee.find().then((emp) =>{
        res.json(emp)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    EmpID = req.params.id;
    const {
        EmpName,
        
        Email,
        Phone,
        NIC,
        Type 
    } = req.body;

    const updateemployee ={
        EmpName,
       
        Email,
        Phone,
        NIC,
        Type 
    }

    const update = await Employee.findByIdAndUpdate(EmpID, updateemployee ).then(() =>{
        res.status(200).send({status:"employee updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

router.route("get/:id").get(async(req, res) => {
    let empId = res.params.id;
    const employee = await Employee.findById(empId).then((emp)=>{
        res.status(200).send({status:" fetched",emp})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let empId = req.params.id;
    const employee = await Employee.findByIdAndDelete(empId).then((emp) =>{
        res.status(200).send({status:"Employee deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with removing employee",err : err.message})
    })
})

module.exports = router;