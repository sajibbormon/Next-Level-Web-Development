import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"


const app: Application = express()
const port = 8080

app.use(express.json()); // middleware
app.use(express.text());
app.use(express.urlencoded({extended: true}));


const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_kDpo5NCRgb9j@ep-little-star-aqmb7ybj-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});


const initDB = async() => {
    try {
      await pool.query(`
          CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(40) NOT NULL,
            password VARCHAR(30) NOT NULL,
            is_active BOOLEAN DEFAULT true,
            age INT,

            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()

          )
        `)
        console.log("Database connected successfully!");
    } catch (error) { 
      console.log(error);
    }
}


initDB();

app.get('/', (req: Request, res: Response) => {

  res.status(200).json({
    message: "Express Server",
    "author": "Sajib Bormon"  

  })
});

app.post('/', async (req, res) => {

  const {fname, lname, pass } = req.body;

  
  res.status(200).json({
    message: "Created Successfully!",
    data: {
      fname,
      lname
    }
  });


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 