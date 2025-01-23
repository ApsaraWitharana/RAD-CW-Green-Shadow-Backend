import express from "express";
import {Staff,PrismaClient} from "@prisma/client";
const router = express.Router();

const prisma = new PrismaClient();

export async function addStaff(staff:Staff){
    try {
        await prisma.staff.create({
            data:{
                firstName:staff.firstName,
                lastName:staff.lastName,
                designation:staff.designation,
                gender:staff.gender,
                joinedDate: staff.joinedDate,
                dob:staff.dob,
                addressLine1:staff.addressLine1,
                addressLine2:staff.addressLine2,
                addressLine3:staff.addressLine3,
                addressLine4:staff.addressLine4,
                addressLine5:staff.addressLine5,
                contactNumber:staff.contactNumber,
                email:staff.email,
                role:staff.role
            }
        })
        console.log('staff added successfully!!')
    }catch (err){
        console.log(err)
    }
}

export async function deleteStaff(id:number){
    try {
        await prisma.staff.delete({
            where:{
                id:id,
            }
        })
        console.log('Staff delete Successfully!!');
    }catch (err){
        console.log(err);
    }
}