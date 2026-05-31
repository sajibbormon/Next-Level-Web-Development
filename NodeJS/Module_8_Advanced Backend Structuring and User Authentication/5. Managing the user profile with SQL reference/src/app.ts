import express, { response, type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRouter } from "./modules/users/user.route";
import { profileRouter } from "./modules/profile/profile.route";


const app: Application = express()


app.use(express.json()); // middleware
app.use(express.text());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response) => {



res.status(200).json({
    success: true,
    message: "Express Server",
    "author": "Sajib Bormon"

  })
});


//connect with the userRouter module and get all users, single users, create users, update users, delete users 
app.use("/api/users", userRouter);


// connect with userProfile 

app.use("/api/profiles", profileRouter)






export default app