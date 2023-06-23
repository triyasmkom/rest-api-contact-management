import { prismaClient } from "../application/databases";

export const authMiddleware = async(req, res, next)=>{
    const token = req.get('Authorization');

    if(!token){
        res.status(401).json({
            status: false,
            errors: 'Unauthorized'
        }).end();
    } else{
        const user = await prismaClient.user.findFirst({
            where:{
                token:token
            }
        });

        if(!user){
            res.status(401).json({
                status: false,
                errors: 'Unauthorized'
            }).end();
        } else{
            req.user = user;
            next();
        }
    }
}
