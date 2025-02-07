import express from "express";
import {addMonitoring, deleteMonitoring, getMonitoring, updateMonitoring} from "../controller/MonitoringController";

const router = express.Router();

//add
router.post("/add",async (req,res)=>{
    const newMonitoring = req.body;
    try {
        const addedMonitoring = await addMonitoring(newMonitoring);
        res.status(201).json(addedMonitoring);
        res.send('added log');
    }catch (err){
        console.log(err);
    }
});

//delete
router.delete("/delete/:logCode",async (req,res)=>{
    const {logCode} = req.params;
    try {
        const deletedMonitoring = await deleteMonitoring(logCode);
        res.json(deletedMonitoring);
        res.send("log deleted");
    }catch (err){
        console.log('error delete log',err);
    }
});

//update
router.put("/update/:logCode",async (req,res)=>{
    const {logCode} = req.params;
    const monitoring = req.body;

    try {
        const updatedMonitoring = await updateMonitoring(logCode,monitoring);
        res.json(updatedMonitoring);
        res.send("log update");
    }catch (err){
        console.log("error update log",err);
    }
});

//get all
router.get('/get',async (req,res)=>{
    try {
        const monitoring = await getMonitoring();
        res.json(monitoring);
        res.send("get all monitoring");
    }catch (err){
        console.log('error getting monitoring',err);
    }
});

export default router;