import express, { type Application, type Request, type Response } from "express"
const app: Application = express()
const port = 8080

app.use(express.json()); // middleware

app.get('/', (req: Request, res: Response) => {
  // res.send('Hello World!');
  res.status(200).json({
    message: "Express Server",
    "author": "Sajib Bormon + Payel Bormon"  

  })
});

app.post('/', async (req, res) => {
  // console.log(req);\
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})