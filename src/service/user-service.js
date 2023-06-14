import { registerUserValidation } from "../validation/user-validation.js"
import { validate } from "./../validation/validation.js"
import {prismaClient} from "./../application/databases.js"
import { ErrorHandling } from "../error/error-handling.js"
import bcrypt from "bcrypt"

const register = async (request)=>{
    try{
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

    } catch(error){
        if(process.env.DEBUG){
            console.error(error)
        }
        throw new ErrorHandling(500, "error user service register")
    }
}

export default {
    register
}