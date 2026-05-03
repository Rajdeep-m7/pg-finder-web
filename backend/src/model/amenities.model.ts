import { pool } from "../config/db.js";

export interface PG_Amenity {
    id: number;
    pg_id: number;
    amenity_name: string;
    created_at: Date;
}

export interface Amenity {
    id: number;
    name: string;
    created_at: Date;
}

export const createAmenity = async (amenity: Amenity) => {
    const { name } = amenity;
    const query = `INSERT INTO amenities (name) VALUES ($1) RETURNING *;`;
    const values = [name];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const getAmenities = async () => {
    const result = await pool.query(`SELECT * FROM amenities`);
    return result.rows;
};

export const addAmenityToPG = async (pgAmenity: PG_Amenity) => {
    const { pg_id, amenity_name } = pgAmenity;
    const query = `INSERT INTO pg_amenities (pg_id, amenity_name) VALUES ($1, $2) RETURNING *;`;
    const values = [pg_id, amenity_name];
    const result = await pool.query(query, values);
    return result.rows[0];
}

export const getAmenitiesByPGId = async (pg_id: number) => {
    const result = await pool.query(`SELECT amenity_name FROM pg_amenities WHERE pg_id = $1`, [pg_id]);
    return result.rows.map(row => row.amenity_name);
}

export const removeAmenityFromPG = async (pg_id: number, amenity_name: string) => {
    const result = await pool.query(`DELETE FROM pg_amenities WHERE pg_id = $1 AND amenity_name = $2 RETURNING *;`, [pg_id, amenity_name]);
    return result.rows[0];
}   