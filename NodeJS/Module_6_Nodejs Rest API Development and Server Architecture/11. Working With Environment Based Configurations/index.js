/**
 * The code and important variables, ports, passwords, ip, keys,  or others important information and data and code that we don't want use in code base,  and lastly we don't want that the browser and client has the access of it, we can hide them using .env 

*** A .env file is a simple text file used in Node.js projects to store environment variables—configuration settings that stay separate from your application’s core code. Its primary purpose is to keep sensitive information and environment-specific settings secure and manageable.


Key Uses

1. Security: It keeps sensitive data like API keys, database passwords, and secret tokens out of your source code.

2. Configuration: It allows you to define settings that change depending on where the app is running (e.g., using a local database during development and a cloud database in production).

3. Version Control: By convention, you add .env to your .gitignore file so it is never uploaded to public repositories like GitHub, preventing accidental leaks of private credentials.




 */


/**
 * We want to keep our port number in .env . now it is declared in the server.ts file. 

First of all create .env in the root directory of the project. 

and delcare the port
code:

PORT = 8080




*** Now we need to install a package naming dotevn for this: npm i dotenv


we want to keep our file optimize. Now let's create a directory naming config inside the src directory. And create a file inside that folder naming index.ts


now import the dotenv inside the index.ts file.


now     call config() function using dotenv : dotenv.config()



inside this function, create a an object. and inside this we need path of the .env, to do this, path: path.env(resolve)


and pass the current path process.cwd(), ".env" 


code:

import type { IncomingMessage, Server } from "http";
import { createServer } from "http";
import { routeHandler } from "./route/route";

const server : Server = createServer((req : IncomingMessage, res)=>{
    routeHandler(req, res);

});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

}) 



now create a config object. inside this object, take key as port and get the process.env.PORT from that .env file

and export the config.  

full code:

import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(process.cwd(), ".env")});

const config = {
    port: process.env.PORT,
}

export default config;


now make changes in server.ts file

server.listen( config.port, ()=>{
    console.log(`server is running on port ${config.port}`);

}) 






 */