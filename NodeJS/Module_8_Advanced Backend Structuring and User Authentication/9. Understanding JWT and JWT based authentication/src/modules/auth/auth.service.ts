import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";
import config from "../../config";



const loginUserIntoDB = async (payload: {email: string, password: string}) => {
    const { email, password } = payload;

    //1. check if the user exists
    //2. compare the password
    //3. generate token
    
    // step 1
    const userData = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `, [email])

    if(userData.rows.length === 0){
        throw new Error("Invalid Credentials! The email you've provided doesn't exists!");
    }
    const user = userData.rows[0];
    // step 2
    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword){
        throw new Error("Invalid Credentials! Wrong password!");
    }

    // step 3

    //now we need package to install : npm i jsonwebtoken

    //now import it, and we need another package type to run it: npm i --save-dev @types/jsonwebtoken

    //need jwtPayload

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        is_active: user.is_active,
    }

    //generate token

    const accessToken = jwt.sign(jwtPayload,  config.secret as string ,{expiresIn: "1d" })

    return { accessToken };
    
}

export const authService = {
    loginUserIntoDB,
}