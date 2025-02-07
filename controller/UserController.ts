import {PrismaClient} from '@prisma/client';
import {User} from "../model/user";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function registerUser(user:User){
   const hashedPassword = await bcrypt.hash(user.password,10);
   const addedUser = await prisma.user.create({
       data:{
           name:user.name,
           password:user.password,
           email:hashedPassword,
           role:user.role,
       },
   });
   console.log("user created:",addedUser);
}

export async function verifyUserCredentials(verifyUser: User) {
    const user : User | null = await prisma.user.findUnique({
        where: { name: verifyUser.name },
    });
    if (!user) {
        return false;
    }

    return await bcrypt.compare(verifyUser.password, user.password);
}