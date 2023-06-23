import express from "express"
import userController from "../controller/user-controller.js"
import { authMiddleware } from "../middleware/auth-middleware.js";
import contactController from "../controller/contact-controller.js";


const userRouter = new express.Router();
userRouter.use(authMiddleware);

// API untuk user
userRouter.get('/api/users/current', userController.getUser);
userRouter.patch('/api/users/current', userController.updateUser);
userRouter.delete('/api/users/current', userController.logoutUser);

// API untuk contact
userRouter.post('/api/contacts', contactController.create);


export {
    userRouter
}