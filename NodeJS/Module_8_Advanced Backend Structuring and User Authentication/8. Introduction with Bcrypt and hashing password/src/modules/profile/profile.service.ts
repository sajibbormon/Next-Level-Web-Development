import { pool } from "../../db"
import type { IProfile } from "./profile.interface";

const getAllProfilesFromDB = async ()=> {
    const result = await pool.query(`
        SELECT * FROM profiles
        `);
    return result;
}

const getSingleProfileFromDB = async(id: number)=>{
    const result = await pool.query(`
        SELECT * FROM profiles WHERE id=$1
        `,[id]);
    return result;
}


const createProfileIntoDB = async(payload: IProfile)=>{
    const {user_id, bio, address, phone, gender } = payload;

    // check if user_id exits in the db then we can create profile for that person.
    const user = await pool.query(`
        SELECT * FROM users WHERE id=$1
        `, [user_id]);

    if(user.rows.length === 0){
        throw new Error("User doesn't exist!");
        
    }
    const result = await pool.query(`
        INSERT INTO profiles(user_id, bio, address, phone, gender)
        VALUES($1, $2, $3, $4, $5) RETURNING *      
        `, [user_id, bio, address, phone, gender])
        
        return result;
}

const updateProfileIntoDB = async(payload: IProfile, id: number)=>{
    const { bio, address, phone, gender } = payload;
    const result = await pool.query(`
        UPDATE profiles SET 
        bio=COALESCE($1, bio),
        address=COALESCE($2, address),
        phone=COALESCE($3, phone),
        gender=COALESCE($4, gender),
        updated_at=NOW()

        WHERE id=$5

        RETURNING *

        `, [bio, address, phone, gender, id])

        return result;
}

const deleteProfileFromDB = async (id: number)=>{
    const result = await pool.query(`
        DELETE FROM profiles WHERE id=$1
        `, [id])
    return result;
}



export const profileService = {
    getAllProfilesFromDB,
    getSingleProfileFromDB,
    createProfileIntoDB,
    updateProfileIntoDB,
    deleteProfileFromDB
}