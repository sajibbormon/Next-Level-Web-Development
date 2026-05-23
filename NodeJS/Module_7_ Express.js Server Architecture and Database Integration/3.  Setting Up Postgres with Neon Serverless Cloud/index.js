/**
 * Setting up postgres with neon serverless cloud

In the last lecture, we used middleware to accept data and converted it to json format.

But we can send the data in others format too, such as urlencoded, text, JavaScript, HTML, raw, binary, graphql ect.

If we send data any text format then we also need to add middlware for that.


1. suppose for text format, we need to use app.use(express.text());


2. now let's send data as urlconcoded. for this we need key value,  now use middleware to convert the encoded data to human understandable data.

    we have to use app.use(express.urlencoded()),

    there  is a catch if we send nested data, urlencoded can not fetch the data, so need to use extended: true

    app.use(express.urlendoced({extended: true}));

3. let's see the request in details as response.
   
    app.post('/', async (req, res) => {
    // console.log(req);\
    // console.log(req.body);

    const body = req.body

    res.status(200).json({
            message : "Created Successfully!",
            data: body,
    })   


    })


4. now what we want to send password in post req, then we cann't directly show the body as it contains sensitive data, then we need to destructure while getting the response.

    app.post('/', async (req, res) => {

    const {fname, lname, pass } = req.body;

    res.status(200).json({
        message: "Created Successfully!",
        data: {
        fname,
        lname
        }
    })

    })


5. Now if we want to save the data in our db, we can use a database. Now let's install neon serverless db.

    //to do this, first of all, we need to install the package: npx neonctl@latest init

    to connect project with neon database we will use pg (means postgres), to do thi, install the pg first: npm i pg

    now we will create a pool

    first of all need to import the Pool from the pg.

    import {Pool} from "pg"

    now we need another package, as typescript doesn't support this. : npm i --save-dev @types/pg

    after that create a pool object and paste the connection string from the neon db.

        const pool = new Pool({
            connectionString: "postgresql://neondb_owner:npg_kDpo5NCRgb9j@ep-little-star-aqmb7ybj-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
        });


 */