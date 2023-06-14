import { ErrorHandling } from "../error/error-handling.js"

const validate = (schema, request)=>{
    const result = schema.validate(request, {
        abortEarly: false,      // dicek semua field
        allowUnknown: false     // field yang tak diketahui
    })
    if(result.error){
        throw new ErrorHandling(400, result.error.message)
    } else {
        return result.value
    }
}

export {
    validate
}