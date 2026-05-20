/**
 * For better file organizations, we follow a structure

The Route, Controller, and Service pattern is a standard architecture used to separate concerns in backend web development.  (like Node.js, Laravel, or Spring Boot).

1. Routes: Listen for incoming HTTP requests and forward them.

2. Controllers: Handle the request lifecycle (inputs/outputs).

3. Services: Execute the actual business logic.


1. Routes Folder (/routes)

What goes here: Route definitions and URL mappings. This folder maps an incoming HTTP request (e.g., GET /users) to the correct Controller function.

i) File Naming: user.routes.js, product.routes.js

ii) What you put in it:
    
    1. Router imports (like Express, or Spring @RequestMapping).
    
    2. Controller imports.
    
    3. Endpoint mappings to specific controller methods (e.g., router.post('/login', authController.login)).
    
    4. Route-specific middlewares (e.g., checking if a user is logged in).




2. Controllers Folder (/controllers)

What goes here: The "Traffic Controllers" of your app. They receive the parsed request from the route, interact with the Service layer, and format the final HTTP response (JSON, HTML, etc.).

i) File Naming: user.controller.js, product.controller.js

ii) What you put in it:

    1. Functions that accept req and res (request and response objects).
    
    2. Code to extract data from the request body or URL parameters.
    
    3. Calls to your Service layer.
    
    4. Error handling logic (try/catch blocks) and sending success or error responses to the client.


3. Services Folder (/services)

What goes here: The "Brains" or business logic of your application. All heavy lifting, math, and database interactions happen here.

i) File Naming: user.service.js, product.service.js

ii) What you put in it:

    1. Database queries (e.g., finding a user, saving a new record).
    
    2. Business rules (e.g., calculating a discount, checking if a password matches).
    
    3. Interactions with third-party APIs (e.g., Stripe, AWS, sending emails).



How the Flow Works

1. Request: A user visits POST /api/users/register.

2. Route: The routes/user.js file catches this URL and passes it to the register function inside controllers/user.js.

3. Controller: The controller extracts the user's name and password from the request and calls userService.createUser(name, password).

3. Service: The service takes over, hashes the password, creates a database record, and returns the newly created user data.

4. Response: The controller receives the data from the service and sends an HTTP 201 Created status code with the user details back to the client.

By structuring your app this way, you make your code highly modular. If you decide to change your database or add a GraphQL API instead of REST, you only update the Service or Route layers, without needing to rewrite the Controller logic.




Explanation of the Structure

This layered approach is like a restaurant:

1. Route (The Menu): Customer chooses an item (URL). The route directs them to the right handler.

2. Controller (The Waiter): Takes the order (data), passes it to the kitchen, and brings back the food (response). It doesn't cook the food.

3. Service (The Chef): Does the heavy lifting (business logic). It prepares the food, following recipes (models) to get ingredients from the pantry (database).


Benefits:

1. Maintainability: If the database changes, only the service changes. If the URL changes, only the route changes.

2. Reusability: The service layer (userService) can be used by an HTTP controller, a CLI script, or a background worker without code duplication.

3. Testability: Because services don't depend on HTTP request/response objects, they are easy to unit test.



Example of E-commerece web app

src/
├── routes/
│   ├── product.routes.js
│   └── order.routes.js
├── controllers/
│   ├── product.controller.js
│   └── order.controller.js
├── services/
│   ├── product.service.js
│   └── order.service.js
│   └── payment.service.js     # Third-party integration (e.g., Stripe)
└── models/
    ├── Product.js
    └── Order.js


Why this shines for E-Commerce:

1. Decoupled Payments: The payment processing logic is hidden inside paymentService. If you switch from Stripe to PayPal, you only change that one file. The order controller and route remain untouched.

2. Data Integrity: Because order.service.js coordinates both stock deduction and payments, you can wrap them in a database transaction to prevent charging a customer for an item that just went out of stock.

3. Easy Feature Adds: Want to send a confirmation email after step 4? Just add await emailService.sendReceipt(userId, newOrder) right inside the service file.



 */

//

/**
First of all create a folder inside the src folder naming route. Inside this folder, create route.ts file.

import type { IncomingMessage, ServerResponse } from "http";   // auto imported

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {

}

//write that upper code, it will automatically import IncomingMessage and ServerResponse from "node:http";


now cut the bolow code from previous server.ts file that is inside function: 

const server : Server = createServer((req : IncomingMessage, res)=>{
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        // res.writeHead(200, {"content-type": "text/plain"} );
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is root route."}));
    }else if(url?.startsWith("/product")){
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is product route."}));
    }
    else{
        // res.writeHead(404, {"content-type": "text/plain"} );
        res.writeHead(404, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Not Found!"}));
    }

});:

 
cut the inside code: 


// console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        // res.writeHead(200, {"content-type": "text/plain"} );
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is root route."}));
    }else if(url?.startsWith("/product")){
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is product route."}));
    }
    else{
        // res.writeHead(404, {"content-type": "text/plain"} );
        res.writeHead(404, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Not Found!"}));
    }

and paste it inside the routeHandler function.


the full code will like be :

import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        // res.writeHead(200, {"content-type": "text/plain"} );
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is root route."}));
    }else if(url?.startsWith("/product")){
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is product route."}));
    }
    else{
        // res.writeHead(404, {"content-type": "text/plain"} );
        res.writeHead(404, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Not Found!"}));
    }
}


now call the routeHandler() from server.ts

const server : Server = createServer((req : IncomingMessage, res)=>{
    routeHandler(req, res);

});



// as product can have multiple methods (get, put, delete etc.), so we need to handle it using controller

to do this, create a folder controller inside the src folder. then create a file product.controller.ts

and write:

import type { IncomingMessage, ServerResponse } from "http"; // auto generated

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    
}

now cut the product response from route.ts file 

res.writeHead(200, {"content-type": "application/json"} );
res.end(JSON.stringify({message: "This is product route."}));


the new code will look like 

import type { IncomingMessage, ServerResponse } from "http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    
    res.writeHead(200, {"content-type": "application/json"} );
    res.end(JSON.stringify({message: "This is product route."}));

}




and inside the route.ts call the productController(req, res) function.





import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";


export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        // res.writeHead(200, {"content-type": "text/plain"} );
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is root route."}));
    }else if(url?.startsWith("/product")){
        productController(req, res);
    }
    else{
        // res.writeHead(404, {"content-type": "text/plain"} );
        res.writeHead(404, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Not Found!"}));
    }
}


we need one more modification inside the productController() function.

we need again take url and method

    const url = req.url;

    const method = req.method;


the new code will look like:

import type { IncomingMessage, ServerResponse } from "http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === "/product" && method==="GET"){
        res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "This is product route."}));

    }
}


let's also send a data in JSON format


import type { IncomingMessage, ServerResponse } from "http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === "/product" && method==="GET"){

        const products = {
            id: "1",
            name: "Product 1"
        }

       res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "Product retrive successful.", DATA:{products}}));

    }

}


let's create a JSON database. For this create a folder inside the src folder naming database. And create a file db.json

json file:

[
    {
        "id" : "1",
        "name" : "Product - 1",
        "price": 500

    },
    {
        "id" : "2",
        "name" : "Product - 2",
        "price": 1500

    }
]
    




 */