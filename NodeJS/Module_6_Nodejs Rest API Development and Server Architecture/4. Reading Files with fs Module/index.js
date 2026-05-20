/**
 * Let's see how can we read files 

we have a json database inside database folder.

as we know, our structure will read, write and retrive data from database using service folder's file, where we will write logic this.

let's create service folder inside the src folder naming service and create a file naming product.service.ts


now create an arrow function inside the product.service.ts file:

export const readProduct = () => {
    
}

now first of find out present/current working directory and print it using process.cwd()

new code:

export const readProduct = () => {
    console.log(process.cwd());   
}

now call the readProduct() function inside product.controller.ts file that is stored in controller folder

import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === "/product" && method==="GET"){

        const products = {
            id: "1",
            name: "Product 1"
        }

       readProduct();
       res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "Product retrive successful.", DATA:{products}}));

    }

}


now run the code see the current working directory path: E:\zNext Level Software\Code and Concepts\NodeJS\Module_6_Nodejs Rest API Development and Server Architecture\4. Reading Files with fs Module

now we will use path module to find out database from the application as it is stored in a different folder.

now we will join main directory and database . to do this we will path.join()

example: 
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'


our code:

import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    console.log(process.cwd());   
}


let's the print the new file path:

import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    // console.log(process.cwd());  
    console.log(filePath); 
}

now it is printing: E:\zNext Level Software\Code and Concepts\NodeJS\Module_6_Nodejs Rest API Development and Server Architecture\4. Reading Files with fs Module\src\database\db.json

now we have the file path of the database, we will read the database now using nodejs inbuilt file system module in short it is fs means file system


now import it using : import fs from "fs";

to read the file we are using fs.readFileSync(path[, options]) 

in this function we need to provide the path. 

now read the db using fs.readFileSync() function and print the products in console. the code:


import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    // console.log(process.cwd());  
    // console.log(filePath); 

    const products = fs.readFileSync(filePath);

    console.log(products);
}

//now it will print buffer values in the console, as it is a machine. to make human readable we need to convert it to string.

import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    // console.log(process.cwd());  
    // console.log(filePath); 

    const products = fs.readFileSync(filePath);

    console.log(products.toString());
}

now to make it human readable while reading the data, we can use parameter utf-8 

fs.readFileSync(path, "utf-8"); // this uft-8 will make the buffer into human readable text.

new code:

import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    // console.log(process.cwd());  
    // console.log(filePath); 

    const products = fs.readFileSync(filePath, "utf-8");

    console.log(products);
}


now we will return the products, and inside product.controller.ts we will receive it.


inside product.service.ts:




import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
    // console.log(process.cwd());  
    // console.log(filePath); 

    const products = fs.readFileSync(filePath, "utf-8");

    // console.log(products);

    return products;
}





inside product.controller.ts:




import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === "/product" && method==="GET"){

        // const products = {
        //     id: "1",
        //     name: "Product 1"
        // }

       const products = readProduct();
       
       res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "Product retrive successful.", DATA:{products}}));

    }

}


// now in brower, we will see that everything is in string format. to overcome this problem we parse the data using JSON.parse(products) inside the product.service.ts file






 */