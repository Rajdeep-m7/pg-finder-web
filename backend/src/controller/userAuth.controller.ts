import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { User } from "../model/user.model.js";
import { createUser, getUserByEmail } from "../model/user.model.js";

export const userSignUp = async ( req : express.Request , res : express.Response)=>{

    const {email , password , name , phone}= req.body;

    try {
        const user = await getUserByEmail(email);
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        const role : "admin" | "owner" | "user" = "user";
        const newUser = await createUser({name , email , phone , password : hashedPassword , role} as User);

        const token = jwt.sign({ id: newUser.id , 
            email : newUser.email ,
            name : newUser.name ,
            role: newUser.role
        }, process.env.SECRET as string , {expiresIn : "7d"});

        res.status(201).json({message : "User created succesfully", token});
    } catch (error){
        res.status(500).json({message: "Sign up failed"} );
        console.error("Error during user sign up:", error);
    }
}

export const userSignIn = async ( req: express.Request , res: express.Response)=>{
    const { email ,password}= req.body;

    try {
        const user = await getUserByEmail(email);
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid){
            return res.status(400).json({message: "Invalid email or password"});
        }
        const token = jwt.sign({ id: user.id , 
            email : user.email ,
            name : user.name ,
            role: user.role
        }, process.env.SECRET as string , {expiresIn : "7d"});

        res.status(200).json({message : "Sign in successful", token});
    } catch (error) {
        res.status(500).json({message: "Sign in failed"} )
    }
}
