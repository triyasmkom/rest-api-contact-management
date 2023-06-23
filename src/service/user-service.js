import { getUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js"
import { validate } from "./../validation/validation.js"
import {prismaClient} from "./../application/databases.js"
import { ErrorHandling } from "../error/error-handling.js"
import bcrypt from "bcrypt"
import { logger } from "../application/logging.js"
import {v4 as uuid} from "uuid"


const register = async (request)=>{
    // validate
    const user = validate(registerUserValidation, request)

    // check user
    const countUser = await prismaClient.user.count({
        where:{
            username: user.username
        }
    })

    if(countUser===1){
        throw new ErrorHandling(400, "Username already exist")
    }

    // hashing password
    user.password = await bcrypt.hash(user.password, 10)


    // query ke database

    return await prismaClient.user.create({
        data: user,
        select:{
            username: true, 
            name: true
        }
    })
}

const login = async(request)=>{
    const loginRequest = validate(loginUserValidation, request);

    // check user
    const user = await prismaClient.user.findUnique({
        where: {
            username: loginRequest.username
        },
        select:{
            username: true,
            password: true
        }
    });


    if(!user){
        throw new ErrorHandling(401, "Username or password wrong");
    }

    // check password
    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if(!isPasswordValid){
        throw new ErrorHandling(401, "Username or password wrong");
    }

    // membuat token
    const token = uuid().toString()

    return prismaClient.user.update({
        data:{
            token: token
        }, 
        where:{
            username: user.username
        },
        select: {
            token: true
        }
    });
}


const getUser = async(username)=>{
    username = validate(getUserValidation, username);

    const user = await prismaClient.user.findUnique({
        where:{
            username: username
        },
        select:{
            username: true, 
            name: true
        }
    });

    if(!user){
        throw new ErrorHandling(404, "User is not found");
    }

    return user;

}

const update = async (request)=>{
    const user = validate(updateUserValidation, request);

    const countUserInDb = await prismaClient.user.count({
        where:{
            username: user.username
        }
    });

    if(countUserInDb!==1){
        throw new ErrorHandling(404, "User is not found");
    }

    const data = {};

    if(user.name){
        data.name = user.name;
    }

    if(user.password){
        data.password = await bcrypt.hash(user.password, 10);
    }

    return prismaClient.user.update({
        where:{
            username: user.username
        }, 
        data: data,
        select:{
            username: true, name: true
        }
    })

}

const logout = async (username)=>{
    username = validate(getUserValidation, username);

    const user = await prismaClient.user.findUnique({
        where:{
            username:username
        }
    });

    if(!user){
        throw new ErrorHandling(404, "User not found");
    }

    return prismaClient.user.update({
        where:{
            username: username
        },
        data:{
            token: null
        },
        select:{
            username:true
        }
    })
}

export default {
    register,
    login, 
    getUser,
    update, 
    logout
}