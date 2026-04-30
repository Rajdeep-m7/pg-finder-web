import express from "express"
import { userSignIn, userSignUp } from "../controller/userAuth.controller.js";

const authRouter = express.Router();

authRouter.post("/user/signin",userSignIn);
authRouter.post("/user/signup", userSignUp);
authRouter.get("/user/signout", (req, res)=>{
    res.status(200).json({message: "Sign out successful"});
});

export default authRouter;