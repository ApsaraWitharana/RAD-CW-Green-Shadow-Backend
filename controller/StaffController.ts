import express from "express";
import {PrismaClient, Staff} from "@prisma/client";
const router = express.Router();

const prisma = new PrismaClient();

export async function addStaff(staff:Staff){
    try {
       const newStaff = await prisma.staff.create({
            data:{
                staffId:staff.staffId,
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
        console.log('staff added successfully!!',newStaff)
        return newStaff;
    }catch (err){
        console.log("error adding staff",err);
    }
}

export async function deleteStaff(staffId:string){
    try {
      const deleteStaff =  await prisma.staff.delete({
            where:{
                staffId:staffId,
            }
        })
        console.log('Staff delete Successfully!!',staffId);
       return deleteStaff;
    }catch (err){
        console.log("delete staff ",err);
    }
}

export async function updateStaff(staffId:string,staff:Staff){
    try {
     const updateStaff =   await prisma.staff.update({
            where:{
                staffId:staffId,
            },
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
                role:staff.role,
            }
        })
        console.log('staff update successfully!!',updateStaff)
        return updateStaff;
    }catch (err){
        console.log("error update staff ",err)
    }
}

export async function getStaffs(){
    try {
        return await prisma.staff.findMany();

    }catch (err){
        console.log("error getting staff from prisma data ",err);
    }
}