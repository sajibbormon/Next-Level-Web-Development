/**
 * In Node.js, the get method is typically used with the Express.js framework to create HTTP GET endpoints. It tells the server to listen for and respond to client requests that ask for specific data at a given URL path (e.g., retrieving a list of users or loading a webpage).

Key Concepts

1. Path: The URL endpoint the server listens to (e.g., '/' or '/users').

2. Request (req): An object containing information about the incoming client request (like query parameters or headers).

3. Response (res): An object used to send back data or status codes to the client.


How it Works

When a client (like a web browser) visits a specific URL, it sends a GET request. In Node.js, you define a route matching that URL pattern. The server then executes a callback function to retrieve the requested data and sends it back to the client.


How the GET Method Works
When a client (like your browser) sends a GET request, it asks the server for a specific resource, like an HTML file or an image. The server then processes this request and returns the data.

1. URL Parameters: Data is sent as part of the URL query string, separated by a ? symbol. For example: https://example.com.

2. Visibility: Because parameters are in the URL, they are visible in the browser's address bar and can be stored in browser history.

3. Empty Body: Unlike methods like POST, a GET request generally does not contain a "body" or payload; the server gets all instructions from the URL and headers.



Key Characteristics

The GET method has several technical properties defined by the MDN Web Docs:

1. Safe: It is a "read-only" operation that should not modify any data on the server.

2. Idempotent: Making the same GET request multiple times should yield the same result without changing the server's state.

3. Cacheable: Browsers and search engines can cache GET requests to speed up future access.

4. Bookmarkable: Users can bookmark URLs that contain GET parameters, allowing them to return to the exact same filtered or searched content later.



Common Use Cases

1. Web Browsing: Loading a standard webpage.

2. Search Engines: Submitting a search query.

3. API Requests: Fetching a list of items (e.g., /products) or a specific item by ID (e.g., /products/123)



 */


//

/**
 * Now come to our example

As of now we get all products information, what if we need a specific product information. 

for this we need the id of the product, as we give id for each  product.

**Now we are handling requests using route.ts file . And controlling which data is needed using product.controller.ts and providing data or retriving data using product.service.ts 


As the id can be anything for any request, we  need to handle the request url dynamically.

Let's get the id of each product through url by splitting the id from the request url.

extract the product id and use ternary operator if it exists or not, exists then give the id if not then assign null.

    const urlArray = url?.split('/');
    console.log(urlArray);

    const productId = urlArray && urlArray[1] === "products" ? Number(urlArray[2]) : null;


now create a new else condition to print if it is working.

else if( method === "GET" && productId !== null){
        console.log("Your product id is", productId);
    }



the full code:

import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
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
       res.end(JSON.stringify({message: "Product retrive successful.", DATA:{products}}));

    }else if( method === "GET" && productId !== null){
        console.log("Your product id is", productId);
    }

}



now to  show that specific id's product we need to find out or filter the specific product using id from all product in the else if condition.

now to find out the that specific product we will use find() function and inside the function we will run an arrow function to find out the product. as the product is an object,  so we need to  declare the type of the product. 

to declare the type of the product we will create a folder inside the src folder, types, and create a file product.type.ts and declare the product.

export type Iproduct = {
    id: string; 
    name: string; 
    description: string; 
    price: number
};



and the code for product.controller.ts is given below. and print the result to see if the arrow function is working or not.





import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { Iproduct } from "../types/product.type";



export const productController = (req: IncomingMessage, res: ServerResponse) => {
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
       res.end(JSON.stringify({message: "Product retrive successful.", DATA:{products}}));

    }else if( method === "GET" && productId !== null){
        // console.log("Your product id is", productId);

    // now we have to find the specific product of the given id

    const products = readProduct();

    // find the product.
    const product = products.find((p : Iproduct ) => p.id === productId.toString());
        console.log(product);
    }

}





now we want to send the data to the client or browser of that specific product(means we want to show the data in the brower of that specific product.)


import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { Iproduct } from "../types/product.type";



export const productController = (req: IncomingMessage, res: ServerResponse) => {
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

    }

}








 */