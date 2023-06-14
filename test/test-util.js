import { prismaClient } from "../src/application/databases.js";
import bcrypt from 'bcrypt';

const removeTestUser = async() =>{
    await prismaClient.user.deleteMany({
        where:{
            username: 'test'
        }
    });
}


const createTestUser = async() =>{
    await prismaClient.user.create({
        data:{
            username: 'test',
            password: await bcrypt.hash('rahasia',10),
            name: 'test',
            token: 'test'
        }
    })
}

export{
    removeTestUser, createTestUser
}