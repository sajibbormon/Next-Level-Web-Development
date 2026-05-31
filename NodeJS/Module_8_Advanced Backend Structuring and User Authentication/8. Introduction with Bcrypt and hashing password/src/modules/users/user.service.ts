import { pool } from "../../db";
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";



const createUserIntoDB = async (payload: IUser) => {
    const { name, email, password, is_active, age } = payload;

    // hashing the password before storing into the database.
    
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, hashPassword, is_active, age]);
    
    delete result.rows[0].password; // delete from object

    return result;

}

const getAllUsersFromDB =  async  () => {
    const result = await pool.query(`
      SELECT * FROM users
    `);
    return result;
}

const getSingleUserFromDB = async (id: number) => {
    const result = await pool.query(`
    SELECT * FROM users WHERE id = $1
  `, [id]);

  return result;

}


const updateUserIntoDB = async (payload: IUser, id: number) => {
    const {name, password, age, is_active} = payload;
    const result = await pool.query(`
              UPDATE users SET name=COALESCE($1, name),
              password=COALESCE($2, password),
              age=COALESCE($3, age),
              is_active=COALESCE($4, is_active),
              updated_at=NOW()
              WHERE id=$5
              RETURNING *
          `, [name, password, age, is_active, id]);

    return result;
}

const deleteUserFromDB = async (id: number) => {
    const result = await pool.query(`
          DELETE FROM users WHERE id=$1
        `, [id]);
    return result;

}

export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserIntoDB,
    deleteUserFromDB
}