import express from "express";
import { PrismaClient} from "@prisma/client";
import {Equipment} from "../model/Equipment";
import e from "express";

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

// delete
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

//update

export async function updateEquipment(equipmentCode:string,equipment:Equipment){
    try {
        const updatedEquipment = await prisma.equipment.update({
            where:{
                equipmentCode:equipmentCode,
            },
            data:{
                equipmentName:equipment.equipmentName,
                equipmentType:equipment.equipmentType,
                status:equipment.status,
                fieldCode:equipment.fieldCode,
                staffCode:equipment.staffCode,
            }
        })
        console.log('Equipment update successfully!!')
        return updatedEquipment;
    }catch (err){
        console.log("update Equipment",err)
    }
}

export async function getEquipment(){
    try {
        return await prisma.equipment.findMany();
    }catch (err){
        console.log("error getting Equipment from prisma data",err)
    }
}

export default router;