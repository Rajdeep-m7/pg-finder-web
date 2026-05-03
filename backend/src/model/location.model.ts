import {pool} from "../config/db.js";

export interface Location {
    id: number;
    pg_id: number;
    latitude: number;
    longitude: number;
    created_at: Date;
}

export const createLocation = async (location: Location) => {
    const { pg_id, latitude, longitude } = location;

    const query = `
    INSERT INTO locations (pg_id, latitude, longitude)
    VALUES($1, $2, $3)
    RETURNING *;
    `;

    const values = [pg_id, latitude, longitude];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const getLocationByPGId = async (pg_id: number) => {
    const result = await pool.query(`SELECT * FROM locations WHERE pg_id = $1`, [pg_id]);
    return result.rows[0];
}

export const getNearByPGs = async (latitude: number, longitude: number, radius: number) => {
    const query = `
    SELECT pgs.*, locations.latitude, locations.longitude,
    ST_Distance(
        ST_MakePoint(locations.longitude, locations.latitude),
        ST_MakePoint($2, $1)
    ) AS distance
    FROM pgs
    JOIN locations ON pgs.id = locations.pg_id
    WHERE ST_Distance(
        ST_MakePoint(locations.longitude, locations.latitude),
        ST_MakePoint($2, $1)
    ) <= $3
    `;

    const values = [latitude, longitude, radius];
    const result = await pool.query(query, values);

    return result.rows;
}