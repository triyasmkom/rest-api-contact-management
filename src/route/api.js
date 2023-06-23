import express from "express"
import userController from "../controller/user-controller.js"
import { authMiddleware } from "../middleware/auth-middleware.js";


const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get('/api/users/current', userController.getUser);
userRouter.patch('/api/users/current', userController.updateUser);
userRouter.delete('/api/users/current', userController.logoutUser);


export {
    userRouter
}