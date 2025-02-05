import express from "express";
import {addStaff, deleteStaff, getStaffs, updateStaff} from "../controller/StaffController";
const router = express.Router();

router.post("/add", async (req, res) => {
    const newStaff = req.body;
    try {
        const addedStaff = await addStaff(newStaff);
        res.json(addedStaff);
        res.send('staff added');
    } catch (err) {
        console.log(err);
    }
});

// delete
router.delete("/delete/:staffId",async (req, res) => {

    const {staffId} = req.params;
    try {
        const deletedStaff = await deleteStaff(staffId);
        res.json(deletedStaff);
        res.send('staff deleted');
    }catch (err){
        console.log("error delete staff",err);
    }
});

//update
router.put('/update/:staffId',async (req, res) =>{

    const {staffId} = req.params;
    const staff = req.body;
    try {
        const updatedStaff = await updateStaff(staffId,staff);
        res.json(updatedStaff);
        res.send('staff updated')
    }catch (err){
        console.log("error update staff",err)
    }

});

//getAll
router.get('/get',async (req, res) =>{
    try{
        const staffs = await getStaffs();
        res.json(staffs);
        res.send('get all staff');
    }catch (err){
        console.log('error getting staffs',err);
    }
})

export default router;