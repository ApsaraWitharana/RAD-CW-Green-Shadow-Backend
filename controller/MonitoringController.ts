import express from "express";
import {PrismaClient} from "@prisma/client";
import {Monitoring} from "../model/Monitoring";

const router = express.Router();
const prisma = new PrismaClient();

//add
export async function addMonitoring(monitoring:Monitoring){
    try {
        const newMonitoring = await prisma.monitoring.create({
            data:{
                logCode:monitoring.logCode,
                logDate : monitoring.logDate,
                logDetails: monitoring.logDetails,
                observedImage: monitoring.observedImage,
                cropCode : monitoring.cropCode
            }
        })
        console.log('monitoring added successfully!!',newMonitoring);
        return newMonitoring;

    }catch (err){
        console.log("error adding monitoring",err);
    }
}

//delete
export async function deleteMonitoring(logCode:string){
    try {
        const deletedMonitoring = await prisma.monitoring.delete({
            where:{
                logCode:logCode,
            }
        })
        console.log('log deleted successfully!!',logCode);
        return deletedMonitoring;
    }catch (err){
        console.log('deleted log',err);
    }
}

//update
export async function updateMonitoring(logCode:string,monitoring:Monitoring){
    try {
        const updatedMonitoring = await prisma.monitoring.update({
            where:{
                logCode:logCode,
            },
            data:{
                logDate : monitoring.logDate,
                logDetails: monitoring.logDetails,
                observedImage: monitoring.observedImage,
                cropCode : monitoring.cropCode
            }
        })
        console.log('log update successfully!!',updatedMonitoring);
        return updatedMonitoring;
    }catch (err){
        console.log('error update loging',err);
    }
}

//get
export async function getMonitoring(){
    try {
        return await prisma.monitoring.findMany();
    }catch (err){
        console.log('error getting log',err);
    }
}

export default router;