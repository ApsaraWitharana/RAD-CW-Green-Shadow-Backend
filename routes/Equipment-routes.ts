import express from "express";
import {addEquipment, deleteEquipment, getEquipment, updateEquipment} from "../controller/EquipmentController";

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



 //delete
 router.delete("/delete/:equipmentCode",async (req,res)=>{
     const {equipmentCode} = req.params;

     try {
         const deletedEquipment = await deleteEquipment(equipmentCode);
         res.json(deletedEquipment);
         res.send("equipment deleted");

     }catch (err){
         console.log("error delete equipment",err);
     }
 })

//update
router.put("/update/:equipmentCode",async (req,res)=>{
    const {equipmentCode} = req.params;
    const equipment = req.body;

    try {
        const updatedEquipment = await updateEquipment(equipmentCode,equipment);
        res.json(updatedEquipment);
        res.send("equipment update successfully!!");
    }catch (err){
        console.log("error update equipment",err);
    }
});


//get all
router.get('/get',async (req,res)=>{
    try {
        const equipments = await getEquipment();
        res.json(equipments);
        res.send('get all equipment');
    }catch (err){
        console.log("error getting equipment",err);
    }
});

export default router;
