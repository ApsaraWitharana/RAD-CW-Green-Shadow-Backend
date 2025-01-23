import express from "express";
import {addStaff, deleteStaff} from "../controller/StaffController";
const router = express.Router();

router.post("/add", async (req, res) => {
    const newStaff = req.body;
    try {
        await addStaff(newStaff);
        res.send('staff added');
    } catch (err) {
        console.log(err);
    }
});

// delete
router.delete("/delete/:id",(req, res) => {

    const id = +req.params.id;
    deleteStaff(id);
    res.send('staff deleted')
});


export default router;