import express from "express";
import {addField} from "../controller/FieldController";

const router = express.Router();

router.post("/add",async (req,res)=>{

    const newField = req.body;

    try {
        const addedField = await addField(newField);
        res.json(addedField);
        res.send('field added');
    }catch (err){
        console.log(err);
    }
});



export default router;