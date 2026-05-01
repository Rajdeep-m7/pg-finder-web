import express from "express"
import {  userSignIn, SignOut, userSignUp, checkAuth } from "../controller/userAuth.controller.js";
import { checkOwner, ownerSignIn,  ownerSignUp } from "../controller/ownerAuth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/user/signin",userSignIn);
authRouter.post("/user/signup", userSignUp);
authRouter.post("/logout", SignOut);
authRouter.get("/check", protect , checkAuth);
authRouter.post("/owner/signup", ownerSignUp); 
authRouter.post("/owner/signin", ownerSignIn); 
authRouter.get("/owner/check", protect, checkOwner);

export default authRouter;