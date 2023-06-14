import { ErrorHandling } from "../error/error-handling.js"

const errorMiddleware = async (error, req, res, next)=>{

    if(!error){
        next()
        return
    }

    if(error instanceof ErrorHandling){
        res.status(error.status).json({
            status: false,
            errors: error.message
        }).end()
    } else{
        res.status(500).json({
            status: false,
            errors: error.message
        }).end()
    }

}

export {
    errorMiddleware
}