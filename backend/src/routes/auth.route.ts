import express from "express"
import { checkUser, userSignIn, userSignOut, userSignUp } from "../controller/userAuth.controller.js";
import { checkOwner, ownerSignIn, ownerSignOut, ownerSignUp } from "../controller/ownerAuth.controller.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/user/signin",userSignIn);
authRouter.post("/user/signup", userSignUp);
authRouter.post("/user/logout", userSignOut);
authRouter.get("user/check", protect , checkUser);
authRouter.post("/owner/signup", ownerSignUp); 
authRouter.post("/owner/signin", ownerSignIn); 
authRouter.post("/owner/logout", ownerSignOut);
authRouter.get("/owner/check", protect,adminOnly, checkOwner);

export default authRouter;