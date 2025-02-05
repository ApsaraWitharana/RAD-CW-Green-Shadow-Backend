import express from "express";
import {addField, deleteField, getField, updateField} from "../controller/FieldController";

const router = express.Router();

// add
router.post("/add",async (req,res)=>{

    const newField = req.body;

    try {
        const addedField = await addField(newField);
        res.status(201).json(addedField);
        res.send('field added');
    }catch (err){
        console.log(err);
    }
});


//delete
router.delete("/delete/:fieldCode",async (req,res)=>{
    const fieldCode = +req.params.fieldCode;
    try {
        const deletedField = await deleteField(fieldCode);
        res.json(deletedField);
        res.send("field deleted");
    }catch (err){
        console.log("error delete field",err);
    }
});

//update
router.put('/update/:fieldCode',async (req,res)=>{
    const fieldCode = +req.params.fieldCode;
    const field = req.body;
    try {
        const updatedField = await updateField(fieldCode,field);
        res.json(updatedField);
        res.send('field update')
    }catch (err){
        console.log("error update field",err);
    }
});

//get all

router.get('/get',async (req,res)=>{
    try {
        const fields = await getField();
        res.json(fields);
        res.send('get all field');
    }catch (err){
        console.log('error getting field',err);
    }
});


export default router;