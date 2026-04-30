import {  pool } from "../config/db.js";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;
    role: "admin" | "owner" | "user";
    created_at: Date;
}

// Function to create a new user in the database
export const createUser = async (user : User)=>{
    const {name , email , phone , password , role } = user;

    const query = `
    INSERT INTO users (name , email , phone , password , role)
    VALUES($1 ,$2 , $3 , $4 , $5)
    RETURNING *;`

    const values = [name , email , phone , password , role];
    const result = await pool.query(query,values);

    return result.rows[0];
}

// function to get a user by email for login
export const getUserByEmail = async(email : string)=>{
    const result = await pool.query(`
    SELECT * FROM users WHERE email = $1`,
    [email]
    )

    return result.rows[0];
}

// get user by ID
export const getUserById = async(id: number)=>{
    const result = await pool.query(`
        SELECT * FROM users WHERE id=$1`, [id]
    );
    
    return result.rows[0];
}

// get all users
export const getAllUsers = async()=>{
    const result = await pool.query(`
        SELECT * FROM users
        `)
    return result.rows;
}