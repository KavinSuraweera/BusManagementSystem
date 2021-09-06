const express = require('express');
let route = require('../models/route.js');

const router = express.Router();

// add route 

router.route("/add").post((req, res ) =>{
      const routeId = req.body.routeId;
      const routeName = req.body.routeName;
      const to = req.body.to;
      const from = req.body.from;

      const newRoute = new route({
          routeId,
          routeName,
          to,
          from
      })

      newRoute.save((err) =>{
          if(err){
              return res.status(400).json({
                  error:err
              });
          }
          return res.status(200).json({
              sucess:"Route added Sucessfully"
          })
      })
})

router.route("/").get((req, res) =>{
    route.find().then((routs)=>{
        res.json(routs)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) =>{
    let rId = req.params.id;
    const{
        routeId,
        routeName,
        to,
        from
    } = req.body;

    const updateRoute ={
        routeId,
        routeName,
        to,
        from
    }

    const update = await route.findByIdAndUpdate(rId, updateRoute).then(() =>{
        res.status(200).send({statu:"Route updated sucessfully " })
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({statys:"error with updating data", err:  err.message})
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let rId = req.params.id;
    const routes = await route.findById(rId).then((routes) =>{
        res.status(200).send({status:"route fetched", routes})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with getting route",err : err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let rId = req.params,id;
    const routes = await route.findByIdAndDelete(rId).then((route)=>{
        res.status(200).send({status :"roure deleted sucessfully"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting this route",err : err.message})
    })
}) 

module.exports = router;