
import contactService from "../service/contact-service.js"
const create = async (req, res, next)=>{
    try{
        const user = req.user;
        const request = req.body;

        const result = await contactService.createContact(user, request);
        
        res.status(200).json({
            data: result
        })
    } catch(error){
        next(error)
    }
}

const get = async (req, res, next)=>{
    try{
        const user = req.user;
        const contactId = req.params.contactId;
        const result = await contactService.getContact(user, contactId);
        
        res.status(200).json({
            data: result
        })
    } catch(error){
        next(error)
    }
}

const update = async (req, res, next)=>{
    try{
        const user = req.user;
        const contactId = req.params.contactId;
        const request = req.body;
        request.id = contactId;
        const result = await contactService.updateContact(user, request);
        
        res.status(200).json({
            data: result
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const remove = async (req, res, next)=>{
    try{
        const user = req.user;
        const contactId = req.params.contactId;
        await contactService.removeContact(user, contactId);
        
        res.status(200).json({
            data: 'OK'
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

export default{
    create,
    get,
    update,
    remove
}