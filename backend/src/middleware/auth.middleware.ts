import type { NextFunction } from "express";
import jwt from "jsonwebtoken";
import express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const protect = async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        const token = req.cookies.stayNest;
        const decoded = jwt.verify(token, process.env.SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
    }
}

export const adminOnly = (req: express.Request, res: express.Response, next: NextFunction) => {
    if (req.user && req.user.role === "admin") {
        next(); 
    } else {
        res.status(403).json({ message: "Access denied, admin only" });
    }
}