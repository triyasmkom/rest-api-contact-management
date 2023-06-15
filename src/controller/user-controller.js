import userService from "../service/user-service.js"

const test = async (req, res, next)=>{
    try{
        res.status(200).json({
            data: "test"
        })
    } catch(error){
        next(error)
    }
}

const register = async(req, res, next)=>{
    try{
        const result = await userService.register(req.body)
        res.status(200).json({
            data: result
        })
    } catch(error){
        next(error)
    }
}

const login = async(req, res, next)=>{
    try{
        const result = await userService.login(req.body)
        res.status(200).json({
            data: result
        })
    } catch(error){
        next(error)
    }
}


export default {
    register, login, test
}