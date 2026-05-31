/**
 * Introduction to BCRYPT and Hashing Password
-------------------------------------------------

we are storing user password directly in the database that can be vulnerable as any admin can see the password, also if the server is compromised(hacked), then hacker can easily get all the passwords. To solve this we can store passwords in hash form.

const createUserIntoDB = async (payload: IUser) => {
    const { name, email, password, is_active, age } = payload;
    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, password, is_active, age]);

    return result;

}



We can use Bcryptjs for hashing the password before inserting into the table.

First of all install the Bcryptjs: npm i bcryptjs

now import the bcryptjs and use it, 

import bcrypt from "bcryptjs";



use: 

const createUserIntoDB = async (payload: IUser) => {
    const { name, email, password, is_active, age } = payload;

    // hashing the password before storing into the database.
    
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, hashPassword, is_active, age]);

    return result;

}

as our password was varchar(30), and hashing password could be more then 30 characters, so we need to make the password as text type in the query while creating the user table. And we also need to drop the entire table as we have changed the type of a field.

after doing all these there are another problem as we don't want to send password in the response. now, we need to delete it from the result .

we can use:

delete result.rows[0].password;

now we can return the result.

return result;

complete code:


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



 */