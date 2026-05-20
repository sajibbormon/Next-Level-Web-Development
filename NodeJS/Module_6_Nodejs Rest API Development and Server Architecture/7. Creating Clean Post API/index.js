/**
 * Parsing a request body involves extracting data sent from a client (like a browser or mobile app) so your server can use it. This is typically done during POST, PUT, or PATCH requests where information is sent in the body rather than the URL.

Parsing using POST method:



1. Using Express Built-in Middleware (Recommended)

Modern versions of Express (4.16.0+) have built-in parsing capabilities, removing the need for the external body-parser package in most cases.

  i) express.json(): Parses incoming requests with JSON payloads.
  ii) express.urlencoded(): Parses incoming requests with URL-encoded payloads (common for HTML forms).


example: 

import express, { Request, Response } from 'express';

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define an interface for the expected body structure
interface UserBody {
  name: string;
  email: string;
}

app.post('/submit', (req: Request<{}, {}, UserBody>, res: Response) => {
  // TypeScript now knows the shape of req.body
  const { name, email } = req.body;
  
  res.status(200).json({ message: `Received data for ${name}` });
});

app.listen(3000);



2. Implementation Steps

  i) Install Types: Ensure you have types for Express installed: npm install @types/express @types/node --save-dev.
  
  ii) Initialize Middleware: Use app.use(express.json()) at the top level of your application before defining routes.
  
  iii) Define Interfaces: In TypeScript, explicitly define an interface for your request body to ensure type safety when accessing req.body. 
  
  iv) Handle Data: Access the parsed data directly via req.body in your POST route handler.




3. Native Node.js (Without Express)If you are not using a framework, you must manually collect data "chunks" and concat them.

example without express:

import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    // Listen for data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Process once all chunks are received
    req.on('end', () => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      res.end('Data received');
    });
  }
});




Comparison of Methods   
-----------------------

Feature               Express Middleware                    Manual Parsing (Native)

Ease of Use           High (automatic)                      Low (manual events)

Type Safety           Strong (with Interfaces)              Weak (requires manual casting)

Data Types            JSON, URL-encoded, Text, Raw          Manual conversion required

Best For              Production REST APIs                  Lightweight, dependency-free scripts







In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that is not yet known but will be available in the future.

Key States of a Promise

A promise is always in one of three states:

    1. Pending: The initial state; the operation is still in progress.

    2. Fulfilled: The operation completed successfully, resulting in a value.

    3. Rejected: The operation failed, resulting in an error or reason for failure.


Once a promise is either fulfilled or rejected, it is considered settled. 


Promises were introduced in ECMAScript 2015 (ES6) to solve common issues with asynchronous code:

    1. Avoid "Callback Hell": They replace deeply nested callbacks with a cleaner, flatter structure.
    
    2. Better Error Handling: You can catch errors for an entire chain of operations in one place using the .catch() method.
    
    3. Chaining: They allow you to perform multiple asynchronous tasks in a specific sequence using .then()


 */


//

/**
 * Let's move to our example:

now use else if() condition to check if the request method is POST or not.

now we need a req.body to create a req. 

we know nodejs can not directly send a req.body, he breaks into chunck by chunck. and the server collects them combine them together. then server do the processing and send the data again chunk by chunk to the client/browser.

now we need to create a body parse. to do this we will create a directory naming utility inside the src directory. 

now we will create a file parseBody.ts, and we will create an arrow function parseBody() that will take req type is IncomingMessage and return type will be promise. As nodejs receive or send data chunk by chunk, we will use promise.

while returning the promise we will create an arrow function that will take 3 parameters, pending, resolve, reject . As we are not showing any loader, so will use resolve and reject only.



we will use req.on()

inside the req.on() function there will be two parameter, one trigger action-> what will do, and an arrow function. we will get the data chunk by chunk so we will use 'data' for trigger. and the arrow function will have a parameter calling chunk. 

now we will take another req.on() where we will triger the 'end' to stop it. here we need to handle error, as there is possibility of having error(network failure, or others error to retrive the data), so we will use try catch block to handle it. If the request is successful then we will return resolve(body) otherwise return the error reject(error)

full code:

import type { IncomingMessage } from "http";

export const parseBody = ((req: IncomingMessage): Promise<any> =>{
    return new Promise((resolve, reject)=>{
        let body = ""; // using let as it will combine chunck by chunk

        req.on('data', (chunk)=>{
            body += chunk;
        });
        req.on('end', ()=>{
            try{
                resolve(body)
            }
            catch(error)
            {
                reject(error);
            }
        })
    })
})



now inside the product.controller.ts we will use await as it is doing task one by one and it needs time. as using await we need to make the function as async

import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { Iproduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";



export const productController  =  async (req: IncomingMessage, res: ServerResponse) => {
    console.log(req);
    const url = req.url;
    const method = req.method;

    const urlArray = url?.split('/');
    console.log(urlArray);

    const productId = urlArray && urlArray[1] === "products" ? Number(urlArray[2]) : null;

    // getting all products information
    if(url === "/products" && method==="GET"){

        // const products = {
        //     id: "1",
        //     name: "Product 1"
        // }

       const products = readProduct();
       
       res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "Products retrive successful.", DATA:{products}}));

    }else if( method === "GET" && productId !== null){  // GET single product
        // console.log("Your product id is", productId);

        // now we have to find the specific product of the given id

        const products = readProduct();

        // find the product.
        const product = products.find((p : Iproduct ) => p.id === productId.toString());
            // console.log(product);

        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Product retrive successful.", DATA:{product}}));

    }else if(method === "POST" && url === "/product"){
        const body = await parseBody(req);
        console.log(body);
    
        

        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({
            message: "Product retrive successful.",

        }));
    }

}



now we need to send the body to the server.

using hoppscotch for this. now we wnat to make it object, to do this we can parse it. JSON.parse(body);


import type { IncomingMessage } from "http";

export const parseBody = ((req: IncomingMessage): Promise<any> =>{
    return new Promise((resolve, reject)=>{
        let body = ""; // using let as it will combine chunck by chunk

        req.on('data', (chunk)=>{
            body += chunk;
        });
        req.on('end', ()=>{
            try{
                resolve(JSON.parse(body));
            }
            catch(error)
            {
                reject(error);
            }
        })
    })
})





 */


/*
Now let's make it clean (Creating Clean Post API)
-----------------------------------------------------------



we get the data in the previous lecture, now we want to insert the data into the database now, means we want to write the data inside the database. 

inside the else if let's create product id by using Date.now(), and spread the body that we get from the client. now print it to see changes.


const body = await parseBody(req); // sending data to the server 
        // console.log(body);
    
        //let's create id for the new product

        const newProduct = {
            id: Date.now(), 
            ...body, //spreading everything inside body.
        } 

        console.log(newProduct);



output in the console:

server is running on port: 5001
{
  id: 1779258028507,
  name: 'Apple MacBook Pro M5',
  description: 'Thin and light laptop powered by the M2 chip, featuring a 13.6-inch Liquid Retina display and up to 18 hours of battery life.',
  price: 1199
}


now, as we want to read/write in the service directory, inside the product.service.ts file. We will use fs.writeFileSync() function to write.

fs.writeFileSync(file, data[, options]), it takes 2 parameters and an optional parameter.

inside the product.service.ts

export const insertProduct = (payload: any)=>{
    fs.writeFileSync(filePath, JSON.stringify(payload), "utf-8");
}



inside else condition, we need to read all products, which is an array, then push the newProduct and after that call the insertProduct fucntion to pass the array for writing to database:

const body = await parseBody(req); // sending data to the server 
        // console.log(body);
    
        //let's create id for the new product

        const newProduct = {
            id: Date.now().toString(), 
            ...body, //spreading everything inside body.
        } 

        // console.log(newProduct);

        const products = readProduct();
        products.push(newProduct);
        insertProduct(products);


        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({
            message: "Product created successful.", data: newProduct

        }));





*/