/**
 * The package.json file is the heart of any Node.js/npm project, defining metadata, dependencies, and automation scripts. Key components include name/version (unique identifiers), scripts (command shortcuts), dependencies (runtime libraries), and type (module system definition). It dictates how to build, run, and manage the project.


Essential Package.json Components
1. name & version: Required fields for publishing, defining the package identity. Name is the string, version is SemVer.

2. scripts: An object containing key-value pairs of command-line shortcuts (e.g., "start": "node app.js"). These automate tasks like npm start, npm test, or custom build processes.

3. type: Defines the module system. Set to "module" to use ES Modules (import/export) or "commonjs" (default) for CommonJS (require).

4. dependencies: Packages required for the app to run in production, installed via npm install <package>.

5. devDependencies: Packages needed only for local development and testing, installed via npm install <package> --save-dev.

6. main: The primary entry point file (e.g., "index.js").description: A string detailing the project, helping others understand its purpose.

7. author / license: Metadata identifying the creator and legal usage terms.



***development vs production dev dependency in nodejs


In Node.js, the primary difference between dependencies and devDependencies is whether a package is required for the application to run in a production environment or only needed during the development and testing phases.

Key Differences

Feature                            Dependencies (dependencies)                                             Dev Dependencies (devDependencies)

Purpose               Required for the application to function at runtime in production.           Required only for development tasks like testing, linting, or building.

Examples              Express, React, Axios, Lodash.                                               Jest, ESLint, Webpack, Nodemon.

Install Command       npm install <name> (or --save).                                              npm install <name> --save-dev (or -D).

Production Build      Included in the final production environment.                                Excluded when installing with --production.



Why the Distinction Matters

1. Reduced Bundle Size: Keeping dev tools out of production makes your application lighter and faster to deploy.

2. Security: It minimizes the attack surface by ensuring that testing or building tools—which might have vulnerabilities—aren't present on your production server.

3. Clarity: It helps other developers understand which packages are core to the application and which are just for the local workflow.

4. Installation BehaviorsLocal Development: Running the standard npm install command downloads both types of dependencies so you have everything needed to build and test the project.

5. Production Server: To install only what's necessary for the app to run, use:npm install --production.




 */



// first of all initialize the package.json: npm init -y

// secondly install typescript as Dev dependencies: npm i -D typescript

//now to make the machine understand how and when we use the typescript, we need to initialize using the command: npx tsc --init



//tsconfig.json configuration
    
//now need some modification in tsconfig.json file where we will uncomment two lines : "rootDir": "./src", ()    and "outDir": "./dist", (build output will store in ./dist folder). src folder keeps TypeScript (.ts) files in a tidy src/ directory and sends the generated JavaScript (.js) files to a dist/ (distribution) directory.

// now change the module to "esnext"

//next handle the type types : ["node"]

// lastly comment out the "jsx": "react-jsx", line as we are not using react right now.


// now we need to install node types libraries as we are using types  as node: npm install -D @types/node

// configuration of tsconfig.json is finished. 



//now create src and inside this folder create server.ts file. now create a server inside the server.ts file

/**
 
import type { IncomingMessage, Server } from "http";
import { createServer } from "https";

const server : Server = createServer((req : IncomingMessage, res)=>{
    console.log(req.statusMessage);
});

1. first of all type:

const server = createServer          then select http or https, it will automatically create the server. the will line will

import {createServer} from "https";

const server = createServer


2. now in the line const server = createServer((req, res)=>{}) create a function and take two parameter req and res.


3. and print the req. then select server type as Server. and the req type will be IncomingMessage. whenever declare the IncomingMessage it will autmatically import the IncomingMessage type and Server too. It is doing it by using from @types folder inside the node_modules

import type { IncomingMessage, Server } from "http"; // automatically created line
import { createServer } from "https";

const server: Server = createServer((req: IncomingMessage, res)=>{
    console.log(req)
})




now move to @types folder and search for https.d.ts and find IncommingMessage using ctrl + f 


//now listen the server.

server.listen(5000, ()=>{
    console.log("server is running on port 5000");

})



//now to run it we need a typescript cli tool to run it. to instal it, the command is: npm i tsx


now we need to modify the package.json file where we will modify the scripts
by adding "dev": "tsx watch ./src/server.ts", this line as our server will run from ./src/server.ts file 


  "scripts": {
    "dev": "tsx watch ./src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

now run the server using command:  npm run dev


 */

