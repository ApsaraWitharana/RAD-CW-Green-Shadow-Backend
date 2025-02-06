import express from "express";
import {addVehicle, deleteVehicle, getVehicle, updateVehicle} from "../controller/VehicleController";
import e from "express";

const router = express.Router();

//add
router.post("/add",async (req,res)=>{
      const newVehicle = req.body;
      try {
          const addedVehicle = await addVehicle(newVehicle);
          res.status(201).json(addedVehicle);
          res.send("vehicle added");
      }catch (err){
          console.log(err);
      }
});

//delete
router.delete("/delete/:vehicleCode",async (req,res)=>{

    const {vehicleCode} = req.params;

    try {
        const deletedVehicle = await deleteVehicle(vehicleCode);
        res.json(deletedVehicle);
        res.send("vehicle deleted");
    }catch (err){
        console.log("error delete vehicle",err);
    }
});

//update
router.put("/update/:vehicleCode",async (req,res)=>{
    const {vehicleCode} = req.params;
    const vehicle = req.body;

    try {
        const updatedVehicle  = await updateVehicle(vehicleCode,vehicle);
        res.json(updatedVehicle);
        res.send("vehicle update successfully!!");
    }catch (err){
        console.log("error update vehicle",err);
    }
});


//get
router.get("/get",async (req,res)=>{
   try {
       const vehicle = await getVehicle();
       res.json(vehicle);
       res.send("get all vehicle");
   }catch (err){
       console.log("error getting vehicle",err);
   }
});

export default router;