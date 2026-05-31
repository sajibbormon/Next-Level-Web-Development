import express, { response, type Application, type Request, type Response } from "express"
import { Pool } from "pg"


const app: Application = express()
const port = 8080

app.use(express.json()); // middleware
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


const pool = new Pool({
  // connectionString: "postgresql://neondb_owner:npg_kDpo5NCRgb9j@ep-little-star-aqmb7ybj-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

});


const initDB = async () => {
  try {
    await pool.query(`
          CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(40) UNIQUE NOT NULL,
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
    success: true,
    message: "Express Server",
    "author": "Sajib Bormon"

  })
});

// get all users

app.get('/api/users', async (req: Request, res: Response) => {

  try {
    const result = await pool.query(`
      SELECT * FROM users
    `);

    res.status(200).json({
      success: true,
      message: "Users retrived successfully!",
      data: result.rows
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No user created!",
      data: {}
    })
  }


});


// get single user

app.get('/api/users/:id', async (req: Request, res: Response) => {

  const { id } = req.params;

  const result = await pool.query(`
    SELECT * FROM users WHERE id = $1
  `, [id]);

  // console.log(result);

  //handle error if no user is created



  if (result.rows.length === 0) {
    res.status(404).json({
      success: false,
      message: "Not found!",
      data: {}
    });
  }

  res.status(200).json({
    success: true,
    message: "Users retrived successfully!",
    data: result.rows[0]
  })

});


app.post('/', async (req, res) => {

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


// update using PUT

app.put('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active, updated_at } = req.body;

  console.log(id);
  console.log({ name, password });
  try {
    const result = await pool.query(`
              UPDATE users SET name=COALESCE($1, name),
              password=COALESCE($2, password),
              age=COALESCE($3, age),
              is_active=COALESCE($4, is_active),
              updated_at=NOW()
              WHERE id=$5
              RETURNING *
          `, [name, password, age, is_active, id]);


    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Not found!",
        data: {}
      });
    }
    res.status(201).json({
      success: true,
      message: "User updated successfully!!!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: {}
    })
  }
});


app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`
          DELETE FROM users WHERE id=$1
        `, [id])

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Not found!",
        data: {}
      });
    }


    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: {}
    })
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,

    })
  }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 