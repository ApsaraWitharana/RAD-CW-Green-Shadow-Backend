import express from "express";
import {Vehicle} from "../model/Vehicle";
import { PrismaClient} from "@prisma/client";
import e from "express";

const router = express.Router();

const prisma = new PrismaClient();

//add new vehicle
export async function addVehicle(vehicle:Vehicle){

    try {
        const newVehicle = await prisma.vehicle.create({
            data:{
                vehicleCode:vehicle.vehicleCode,
                licensePlateNumber:vehicle.licensePlateNumber,
                vehicleCategory:vehicle.vehicleCategory,
                fuelType:vehicle.fuelType,
                status:vehicle.status,
                staffId:vehicle.staffId,
                remarks:vehicle.remarks
            }
        })
        console.log("vehicle added successfully!!",newVehicle);
        return newVehicle;
    }catch (err){
        console.log("error adding vehicle",err);
    }
}

//delete
export async function deleteVehicle(vehicleCode:string){

    try {
        const deleteVehicle = await prisma.vehicle.delete({
            where:{
                vehicleCode:vehicleCode,
            }
        })
        console.log("Vehicle delete successfully!!");
        return deleteVehicle;
    }catch (err){
        console.log("delete vehicle",err);
    }
}

//update
export async function updateVehicle(vehicleCode:string,vehicle:Vehicle){

    try {
        const updateVehicle = await prisma.vehicle.update({
            where:{
                vehicleCode:vehicleCode,
            },
            data:{
                licensePlateNumber:vehicle.licensePlateNumber,
                vehicleCategory:vehicle.vehicleCategory,
                fuelType:vehicle.fuelType,
                status:vehicle.status,
                staffId:vehicle.staffId,
                remarks:vehicle.remarks
            }
        })
        console.log("vehicle update successfully!!");
        return updateVehicle;
    }catch (err){
        console.log("update vehicle",err);
    }
}

//get

export async function getVehicle(){
    try {
        return await prisma.vehicle.findMany();
    }catch (err){
        console.log('error getting vehicle from prisma data',err);
    }
}


export default router;