const express=require("express")


const router=express.Router()



const Cart=require("../models/usercart.model")


router.post("", async (req, res) => {
    try {
      let Productitem = await Cart.find()
      .populate("orderId")
      .lean()
      .exec()
      ;
  
      return res.status(201).send({Productitem });
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });


module.exports=router