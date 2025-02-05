import express from "express";
import { PrismaClient} from "@prisma/client";
import {Equipment} from "../model/Equipment";

const router = express.Router();
const prisma = new PrismaClient();

// add a new equipment
export async function addEquipment(equipment:Equipment){
    try {
        const newEquipment = await prisma.equipment.create({
            data:{
                equipmentCode:equipment.equipmentCode,
                equipmentName:equipment.equipmentName,
                equipmentType:equipment.equipmentType,
                status:equipment.status,
                fieldCode:equipment.fieldCode,
                staffCode:equipment.staffCode
            }
        })
        console.log("equipment added successfully!!",newEquipment);
        return newEquipment;
    }catch (err){
        console.log("error adding equipment",err);
    }
}

export async function deleteEquipment(equipmentCode:string){
    try {
        const deletedEquipment = await prisma.equipment.delete({
            where:{
                equipmentCode:equipmentCode,
            }
        })
        console.log("Equipment delete successfully!!");
        return deletedEquipment;
    }catch (err){
        console.log("delete Equipment",err);
    }
}


export default router;