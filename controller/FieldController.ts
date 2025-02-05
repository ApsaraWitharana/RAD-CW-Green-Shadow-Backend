import express from "express";
import {Field,PrismaClient} from "@prisma/client";
import e from "express";
const router = express.Router();
const prisma = new PrismaClient();

// add a new field
export async function addField(field:Field){
    try {

        const newField = await prisma.field.create({
            data:{
                fieldName:field.fieldName,
                fieldLocation:field.fieldLocation,
                extentSize:field.extentSize,
                fieldImage1:field.fieldImage1,
                fieldImage2:field.fieldImage2
            }
        })
        console.log("field added successfully!!",newField);
        return newField;
    }catch (err){
        console.log("error adding field",err);
    }
}

export async function deleteField(fieldCode:number){
    try {
        const deleteField = await prisma.field.delete({
            where:{
                fieldCode:fieldCode,
            }
        })
        console.log('Field delete successfully!!',fieldCode);
        return deleteField;
    }catch (err){
        console.log("delete field",err);
    }
}

export async function updateField(fieldCode:number,field:Field){
    try {
        const updateField = await prisma.field.update({
            where:{
                fieldCode:fieldCode,
            },
            data:{
                fieldCode:field.fieldCode,
                fieldName:field.fieldName,
                fieldLocation:field.fieldLocation,
                extentSize:field.extentSize,
                fieldImage1:field.fieldImage1,
                fieldImage2:field.fieldImage2,
            }
        })
        console.log("field update successfully!!",updateField)
        return updateField;
    }catch (err){
        console.log("error update field",err);
    }
}

export async function getField(){
    try {
        return await prisma.field.findMany();
    }catch (err){
        console.log("error getting field from prisma data",err);
    }
}