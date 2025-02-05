import express from "express";
import {addEquipment, deleteEquipment} from "../controller/EquipmentController";
import e from "express";

const router = express.Router();

//add
 router.post("/add",async (req,res)=>{
     const newEquipment = req.body;
     try {
         const addedEquipment = await addEquipment(newEquipment);
         res.status(201).json(addedEquipment);
         res.send("Equipment added");
     }catch (err){
         console.log(err);
     }
 });

 router.delete("/delete/:equipmentCode",async (req,res)=>{
     const {equipmentCode} = req.params;

     try {
         const deletedEquipment = await deleteEquipment(equipmentCode);
         res.json(deletedEquipment);
         res.send("Failed to delete");

     }catch (err){
         console.log("error delete equipment",err);
     }
 })
export default router;
