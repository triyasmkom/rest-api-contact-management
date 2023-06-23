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
    });
}

const getTestuser = async()=>{
    return prismaClient.user.findUnique({
        where:{
            username:"test"
        }
    });
}

const removeAllTestContact = async()=>{
    await prismaClient.contact.deleteMany({
        where:{
            username: 'test'
        }
    })
}

const createTestContact = async()=>{
    await prismaClient.contact.create({
        data:{
            username:"test",
            first_name:"test",
            last_name:"test",
            email:"test@gmail.com",
            phone:"089123456789",
        }
    })
}


const getTestContact = async()=>{
    return prismaClient.contact.findFirst({
        where:{
            username:"test"
        }
    })
}
export{
    removeTestUser, 
    createTestUser, 
    getTestuser, 
    removeAllTestContact,
    createTestContact,
    getTestContact
}