/**
 * Creating our first user with post method
---------------------------------------------

Now let's create an user and save it to our database. First of all just send an user request to see is everything is working or not as given key's in the user table.


app.post('/', async (req, res) => {

  const {name, email, password, is_active, age } = req.body;
  
  res.status(200).json({
    message: "Created Successfully!",
    data: {
      name,
      email,
      password,
      is_active,
      age,

    }
  });

});


sending request (json):

{
    "name": "Sajib",
    "email": "sajib@gmail.com",
    "pass": "1234",
    "is_active": true,
    "age": 27
}

output:

{
    "message": "Created Successfully!",
    "data": {
        "name": "Sajib",
        "email": "sajib@gmail.com",
        "is_active": true,
        "age": 27
    }
}



now let's save the posted data to the neon postgresql database.

1. create an arrow function result .

    const result = await pool.query(`
    INSERT INTO users (name, email, password, is_active, age)
    VALUES($1, $2, $3, $4, $5) RETURNING *  
  `, [name, email, password, is_active, age]);

  we are also returning to check the response if the data is inserted into the table or not. and using $1, $2 ... for inserting each field data and using array for those $variable.

2. now print the result to see all the result in the console.

    from there we can send the given posted information in our console or in the client side.

    also there is a problem as same email can be used for creating multiple accounts, which is wrong, so we need to use UNIQUE contrains while createing table for email

    email VARCHAR(40) UNIQUE NOT NULL

    

3. Now if someone try to create an account with the same mail, then it will throw an error. But we can handle it easily using try catch block.






 */