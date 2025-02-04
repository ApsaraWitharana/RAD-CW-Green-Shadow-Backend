import express from "express";
import {Field,PrismaClient} from "@prisma/client";
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
