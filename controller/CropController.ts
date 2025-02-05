import express from "express";
import {PrismaClient} from "@prisma/client";
import {Crop} from "../model/Crop";


const router = express.Router();
const prisma = new PrismaClient();

//add
export async function addCrop(crop:Crop){

    try {
        const newCrop = await prisma.crop.create({
            data:{
                cropCode:crop.cropCode,
                cropCommonName:crop.cropCommonName,
                cropScientificName:crop.cropScientificName,
                cropImage:crop.cropImage,
                category:crop.category,
                cropSeason:crop.cropSeason,
                fieldCode:crop.fieldCode

            }
        })
        console.log("crop added successfully!!",newCrop);
        return newCrop;

    }catch (err){
        console.log("error adding crop",err);
    }
}

//delete
export async function deleteCrop(cropCode:string){
    try {
        const deleteCrop = await prisma.crop.delete({
            where:{
                cropCode:cropCode,
            }
        })
        console.log("Crop delete successfully!!");
        return deleteCrop;
    }catch (err){
        console.log("delete crop",err);
    }
}

//update

export async function updateCrop(cropCode:string,crop:Crop){
    try {
        const updateCrop = await prisma.crop.update({
            where:{
                cropCode:cropCode,
            },
            data:{
                cropCommonName:crop.cropCommonName,
                cropScientificName:crop.cropScientificName,
                cropImage:crop.cropImage,
                category:crop.category,
                cropSeason:crop.cropSeason,
                fieldCode:crop.fieldCode,
            }
        })
        console.log("Crop update successfully!!")
        return updateCrop;
    }catch (err){
        console.log("update crop error",err);
    }
}

//get all

export async function getCrop(){
    try {
        return await prisma.crop.findMany();
    }catch (err){
        console.log("error getting crop from prisma data",err);
    }
}



export default router;