/**
 * Cleaning up the server and creating app.ts
---------------------------------------------------------


                                                   req                    req          
        req                 req                  ------>                ------->
cleint ------>   route.ts  ----->  controller.ts            services.ts             DB
    |                                    |       <------                <--------                 
    |                                    |          res                    res     
    |               res                  |   
    --------------------------------------
           {success, message, data}         





database is saved in the db folder.

app related code is inside the the app.ts

server related code and initializing the database are inside the server.ts file. Means when server is working then it connects to the database.


Each feature is called module in Modular Pattern.


as we are creating users in inside the app.ts (previously in the server.ts), so the user is a module in our Modular Pattern.

now let's create a folder inside the src folder naming modules. Inside this create another folder naming users.

Now inside this users module/folder we will handle everything related to users such as interface, routing, controller, service etc. 

for routing we will name the file as : user.route.ts


write code:

import { Router } from "express";

const router = Router()


think of the router as a mini app or server.

and export the router from user.route.ts, then connect with userRouter from app.ts

export const userRouter = router


and we will use the app.use() as like middleware to connect with the userRoute.


app.use("/api/users", userRouter);


now cut the code of app.post("/api/users/")....

and paste it into the user.route.ts 

and replace app with router.post("/")

and don't provide the path "/api/users/" instead of use "/" as it was already given in the app.ts

code:

router.post('/', async (req: Request, res: Response) => {

  const { name, email, password, is_active, age } = req.body;

  try {
    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, password, is_active, age]);


    res.status(201).json({
      success: true,
      message: "Created Successfully!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error
    });
  }
});

but in modular pattern only route will be handle in the user.route.ts file. so we need more cleaning here.


In modular pattern we handle request and response in controller.ts, so we will handle request and response in user.controller.ts file, let's create the file now.

so, cut the async function that is inside the route.post("/", async .....)

code:

import type {  Request,  Response  } from "express";
import { pool } from "../../db";


const createUser = async (req: Request, res: Response) => {

  const { name, email, password, is_active, age } = req.body;

  try {
    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, password, is_active, age]);


    res.status(201).json({
      success: true,
      message: "Created Successfully!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error
    });
  }
}

export const userController = {
    createUser,
}

as we will export multiple async function from here , so we are exporting it as an object.

now as we said earlier that we will handle only req and response inside the user.controller.ts and database queries will be handled in the user.service.ts file, so we will create another file for this, user.service.ts

and move our queries from controller to service file.

inside controller:

const createUser = async (req: Request, res: Response) => {

//   const { name, email, password, is_active, age } = req.body;

  try {
    
    const result = await userService.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Created Successfully!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error
    });
  }
}


inside the user.service.ts 

import { pool } from "../../db";


const createUserIntoDB = async (payload: any) => {
    const { name, email, password, is_active, age } = payload;
    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, password, is_active, age]);

    return result;

}

export const userService = {
    createUserIntoDB,

}   


now, as we have taken payload as any type which can be problematic in future, also we know the type of name, email, password, is_active, age, so we can create an interface.ts for these. Create a file user.interface.ts


export interface IUser  {
    name: string;
    email: string;
    password: string;
    age: number;
    is_active?: boolean;

}

and new code inside the user.service.ts

import { pool } from "../../db";
import type { IUser } from "./user.interface";


const createUserIntoDB = async (payload: IUser) => {
    const { name, email, password, is_active, age } = payload;
    const result = await pool.query(`
      INSERT INTO users (name, email, password, is_active, age)
      VALUES($1, $2, $3, $4, $5) RETURNING *  
    `, [name, email, password, is_active, age]);

    return result;

}

export const userService = {
    createUserIntoDB,

}





 */