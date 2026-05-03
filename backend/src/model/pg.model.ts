import { pool } from "../config/db.js";

export interface PG {
    id: number;
    owner_id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    gender_allowed: string;
    created_at: Date;
}

export const createPG = async (pg: PG) => {
    const { name , description , address , city , state , gender_allowed , owner_id } = pg;

    const query = `
    INSERT INTO pgs (name , description , address , city , state , gender_allowed , owner_id)
    VALUES($1 , $2 , $3 , $4 , $5 , $6 , $7)
    RETURNING *;`

    const values = [name , description , address , city , state , gender_allowed , owner_id];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const getPGById = async (id: number) => {
    const result = await pool.query(`SELECT * FROM pgs WHERE id = $1`, [id]);
    return result.rows[0];
}

export const getAllPGs = async ()=>{
    const result = await pool.query(`SELECT * FROM pgs`);
    return result.rows;
}

export const getPGsByCity  = async (city: string) => {
    const result = await pool.query(`SELECT * FROM pgs WHERE city = $1`, [city]);
    return result.rows;
}

export const getPGsByOwnerId = async (owner_id: number) => {
    const result = await pool.query(`SELECT * FROM pgs WHERE owner_id = $1`, [owner_id]);
    return result.rows;
}

export const updatePG = async (id: number, pg: Partial<PG>) => {
    const { name , description , address , city , state , gender_allowed } = pg;

    const query = `
    UPDATE pgs
    SET name = $1, description = $2, address = $3, city = $4, state = $5, gender_allowed = $6
    WHERE id = $7
    RETURNING *;
    `;

    const values = [name , description , address , city , state , gender_allowed , id];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const deletePG = async (id: number) => {
    const result = await pool.query(`DELETE FROM pgs WHERE id = $1 RETURNING *`, [id]);
    return result.rows[0];
}