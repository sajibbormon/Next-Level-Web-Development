import express, { response, type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRouter } from "./modules/users/user.route";


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



// all realted to users module


//connect with the userRouter module
app.use("/api/users", userRouter);

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



export default app