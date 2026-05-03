import { pool } from "../config/db.js";

export interface Favorite {
    id: number;
    user_id: number;
    pg_id: number;
}

export const createFavorite = async (favorite: Favorite) => {
    const { user_id, pg_id } = favorite;

    const query = `
    INSERT INTO favorites (user_id, pg_id)
    VALUES ($1, $2)
    RETURNING *;
    `;

    const values = [user_id, pg_id];
    const result = await pool.query(query, values);

    return result.rows[0];
};

export const getFavoritesByUserId = async (user_id: number) => {
    const result = await pool.query(`SELECT * FROM favorites WHERE user_id = $1`, [user_id]);
    return result.rows;
};

export const deleteFavorite = async (id: number) => {
    const query = `
    DELETE FROM favorites
    WHERE id = $1
    RETURNING *;
    `;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
};
