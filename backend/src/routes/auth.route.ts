import express from "express"
import { userSignIn, userSignOut, userSignUp } from "../controller/userAuth.controller.js";
import { ownerSignIn, ownerSignOut, ownerSignUp } from "../controller/ownerAuth.controller.js";

const authRouter = express.Router();

authRouter.post("/user/signin",userSignIn);
authRouter.post("/user/signup", userSignUp);
authRouter.post("/user/logout", userSignOut);
authRouter.post("/owner/signup", ownerSignUp); 
authRouter.post("/owner/signin", ownerSignIn); 
authRouter.post("/owner/logout", ownerSignOut);

export default authRouter;