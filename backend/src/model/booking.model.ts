import { pool } from "../config/db.js";

export interface Booking {
    id : number;
    user_id : number;
    room_id : number;
    check_in: Date;
    check_out: Date;
    status: string;
    created_at : Date;
}

export const createBooking = async (booking: Booking) => {
    const { user_id, room_id, check_in, check_out, status } = booking; 

    const query = `
    INSERT INTO bookings (user_id, room_id, check_in, check_out, status)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;  

    const values = [user_id, room_id, check_in, check_out, status];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const getBookingsByUserId = async (user_id: number) => {
    const result = await pool.query(`SELECT * FROM bookings WHERE user_id = $1`, [user_id]);
    return result.rows;
}

export const getBookingsByRoomId = async (room_id: number) => {
    const result = await pool.query(`SELECT * FROM bookings WHERE room_id = $1`, [room_id]);
    return result.rows;
}   

export const updateBookingStatus = async (id: number, status: string) => {
    const query = `
    UPDATE bookings
    SET status = $2
    WHERE id = $1
    RETURNING *;
    `;
    const values = [id, status];
    const result = await pool.query(query, values);
    return result.rows[0];
}