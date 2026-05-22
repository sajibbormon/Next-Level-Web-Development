/**
 * Express is the most popular web application framework for Node.js. It is a lightweight, "unopinionated" tool that simplifies the process of building web servers and APIs by providing essential features like routing and middleware without hiding the core power of Node.js.

Key Features

1. Routing: Easily define how your application responds to different client requests (GET, POST, etc.) at specific URLs.

2. Middleware: Functions that can access and modify request/response objects or end the communication cycle.

3. Minimalist Design: Unlike heavier frameworks, Express gives you the freedom to structure your project however you like.

4. Database Integration: It works seamlessly with any database supported by Node.js, such as MongoDB, MySQL, or PostgreSQL.



Express vs. Core Node.js

While Node.js provides the environment to run JavaScript on a server, Express provides the "blueprint" for building the web application.


Feature                             Core Node.js                        Express.js

Routing                         Manual URL inspection               Simple, built-in methods

Setup                           Verbose and complex                 Fast and minimal code

Complexity                      Higher for web apps                 Lower for web apps



Getting Started

To use Express, you must have Node.js installed on your system.

1. Initialize your project: Create a directory and run npm init.

2. Install Express: Run npm install express.

3. Basic "Hello World" App:

example with JavaScript:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



For typescript:

1. Initialize Project: Create a new directory and initialize your package.json:

    mkdir express-ts-server && cd express-ts-server
    npm init -y

2. Install Dependencies: Install the Express framework and essential development tools:

    i) Core: npm install express
    ii) Dev Tools: npm install --save-dev typescript @types/node @types/express ts-node nodemon


3. Configure TypeScript: Generate a basic tsconfig.json file:

    npx tsc --init

4. Create a Simple Server: Create a file at src/server.ts:

    import express, { Application, Request, Response } from 'express';

    const app: Application = express();
    const port = 3000;

    app.get('/', (req: Request, res: Response) => {
    res.send('Hello World with TypeScript!');
    });

    app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });


5. Configure Scripts: Update the scripts section in your package.json to enable easy development and building:
    "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
    }



Core Components

1.  @types/express: Provides type definitions so TypeScript understands Express-specific objects like Request and Response.

2. ts-node: Allows you to run TypeScript files directly in a Node environment without pre-compiling to JavaScript.

3. tsc: The TypeScript compiler used to transpile your code into plain JavaScript for production deployment.

4. nodemon: Watches for file changes and automatically restarts your server during development.





 */



/**
 * Let's start creating our server using Express and TypeScript

1. first of all initialize the project: npm init -y

2. as we will use typescript, so we will install it: npm i -D typescript

    for development we are using typescript but in production, it will be converted to javascript, that's why we are using -D 

3. we need to configure the typescript, to do this initialize the configuration: npx tsc --init

4. customize the tsconfig.json, first of all uncomment rootDir and outDir. then change the module: "esnext", edit the types: ["node"], comment out the jsx: "react-jsx"

5. now customize the package.json file. change the type: "commonjs" to type: "module"

6. now create a src directory in the root of the project. And inside that directory create a file naming server.ts






now read the express documentation. and implement it

1. to use exrpess.js we need to install it: npm install express --save

2. now copy the basic hello world code from the website and paste it on the server.ts file.

3. we have to import as we are using module. so 

4. we will see some error arises, as it doesn't support typescript by default,  to solve this we need to install package and configure the tsconfig file: npm i --save-dev @types/express

Could not find a declaration file for module 'express'. 'e:/zNext Level Software/Code and Concepts/NodeJS/Module_7_ Express.js Server Architecture and Database Integration/1. Create Server with Express and TypeScript/node_modules/express/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/express` if it exists or add a new declaration (.d.ts) file containing `declare module 'express';


4. now we need to write a script to run from dev, to do this we need a package  to install: npm i -D tsx

5. now edit package.json file: scritps: { "dev": "tsx watch ./src/server.ts",  }

6. now let's run the server: npm run dev


7. now change the route: "/user"


9. now in localhost:8080/    -> it will say Can not get as there are no route "/" means express easily handle these error.




 */ 