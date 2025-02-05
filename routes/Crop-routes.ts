import express from "express";
import {addCrop, deleteCrop, getCrop, updateCrop} from "../controller/CropController";

const router = express.Router();

//add
router.post("/add",async (req,res)=>{
    const newCrop = req.body;
    try {
        const addedCrop = await addCrop(newCrop);
        res.status(201).json(addedCrop);
        res.send("Crop added");
    }catch (err){
        console.log(err);
    }
});

//delete
router.delete("/delete/:cropCode",async (req,res)=>{
    const {cropCode} = req.params;

    try {
        const deletedCrop = await deleteCrop(cropCode);
        res.json(deletedCrop);
        res.send("crop deleted");
    }catch (err){
        console.log("error deleted crop",err);
    }
});

//update

router.put("/update/:cropCode",async (req,res)=>{
    const {cropCode} = req.params;
    const crop = req.body;

    try {
        const updatedCrop = await updateCrop(cropCode,crop);
        res.json(updatedCrop);
        res.send("crop update successfully!!");
    }catch (err){
        console.log("error update crop",err);
    }
});

//get

router.get("/get",async (req,res)=>{
    try {
        const crops = await getCrop();
        res.json(crops);
        res.send("get all crops");
    }catch (err){
        console.log("error getting crops",err);
    }
});






export default router;