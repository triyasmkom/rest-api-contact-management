import { validate } from "./../validation/validation.js"
import { createContactValidation, getContactValidation, updateContactValidation } from "../validation/contact-validation.js"
import { prismaClient } from "../application/databases";
import { ErrorHandling } from "../error/error-handling.js";

const createContact = async (user, request)=>{
    const contact = validate(createContactValidation, request);
    contact.username = user.username;
    
    return prismaClient.contact.create({
        data: contact,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });
}

const getContact = async (user, contactId)=>{
    contactId = validate(getContactValidation, contactId);

    const contact = await prismaClient.contact.findFirst({
        where:{
            username: user.username,
            id: contactId
        },
        select:{
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });

    

    if(!contact){
        throw new ErrorHandling(404, "Contact is not found")
    }

    return contact;
}


const updateContact = async(user, request)=>{

    const contact = validate(updateContactValidation, request);

    const countContact = await prismaClient.contact.count({
        where:{
            username: user.username,
            id: contact.id
        }
    });

    if(!countContact){
        throw new ErrorHandling(404, "Contact is not found");
    }

    return prismaClient.contact.update({
        where:{
            id: contact.id
        },
        data:{
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone,
        },
        select:{
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true,
        }
    });
}

const removeContact = async(user, contactId)=>{
    contactId = validate(getContactValidation, contactId);
    const countContact = await prismaClient.contact.count({
        where:{
            username: user.username,
            id: contactId
        }
    });

    if(!countContact){
        throw new ErrorHandling(404, "Contact is not found");
    }

    return prismaClient.contact.delete({
        where:{
            id: contactId
        }
    })
}


export default {
    createContact,
    getContact,
    updateContact,
    removeContact
}