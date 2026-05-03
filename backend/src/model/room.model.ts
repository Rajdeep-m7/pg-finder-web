import {pool} from "../config/db.js";

export interface Room{
    id : number;
    pg_id : number;
    room_type : string;
    price : number;
    total_beds : number;
    available_beds : number;
    created_at : Date;
}

export const createRoom = async (room : Room)=>{    
    const {pg_id , room_type , price , total_beds , available_beds} = room;

    const query = `
    INSERT INTO rooms (pg_id , room_type , price , total_beds , available_beds)
    VALUES($1 , $2 , $3 , $4 , $5)
    RETURNING *;`

    const values = [pg_id , room_type , price , total_beds , available_beds];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const getRoomsByPGId = async (pg_id : number)=>{
    const result = await pool.query(`SELECT * FROM rooms WHERE pg_id = $1`, [pg_id]);
    return result.rows;
}

export const updateRoom = async (room: Room)=>{
    const { id , room_type , price , total_beds , available_beds } = room;

    const query = `
    UPDATE rooms
    SET room_type = $2, price = $3, total_beds = $4, available_beds = $5
    WHERE id = $1
    RETURNING *;
    `;

    const values = [id, room_type, price, total_beds, available_beds];
    const result = await pool.query(query, values);

    return result.rows[0];
}

export const deleteRoom = async (id : number)=>{
    const result = await pool.query(`DELETE FROM rooms WHERE id = $1 RETURNING *;`, [id]);

    return result.rows[0];
}