/**

now run the server: npm run dev

and open link in the browser: http://localhost:5001/

//now we will see a long output in the terminal after opening the link.

now find out url in the terminal using ctrl + f and type url

now modify the below code

const server : Server = createServer((req : IncomingMessage, res)=>{
    console.log(req);
});

to

const server : Server = createServer((req : IncomingMessage, res)=>{
    console.log(req.url);
    console.log(req.method);
});


now the output will be 

server is running on port: 5001
/
GET

if we open the link http://localhost:5001/sajib

server is running on port: 5001
/
GET
/sajib
GET

now we want to see the output in browser rather than console. to do this comment previous two lines and take url in a const variable and method also in a const variable

const server : Server = createServer((req : IncomingMessage, res)=>{
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""

    const url = req.url;

    const method = req.method;

        if(url === "/" && method === "GET"){
        console.log("This is root route.");
    }

    
});


we will use response.writeHead(statusCode[, statusMessage][, headers])#
Added in: v0.1.30
statusCode <number>
statusMessage <string>
headers <Object> | <Array>
Returns: <http.ServerResponse>

const server : Server = createServer((req : IncomingMessage, res)=>{
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""

    const url = req.url;

    const method = req.method;


    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        res.writeHead(200, {"content-type": "text/plain"} );
        res.end("This root route");
    }

    
});

let's handle if it is not a root router means http://localhost:5001/sajib   as /sajib is not given, we can handle it using else

const server : Server = createServer((req : IncomingMessage, res)=>{
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        res.writeHead(200, {"content-type": "text/plain"} );
        res.end("This is root route");
    }else{
        res.writeHead(404, {"content-type": "text/plain"} );
        res.end("Not Found!");
    }


});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

})



as we always send json file, to do this let's modify the content-type in res.writeHead()
we need to replace "text/plain" with "application/json"
and inside the res.end() we need  to res.end(JSON.stringify({key: "Message"}))


const server : Server = createServer((req : IncomingMessage, res)=>{
    // console.log(req.url); //"/", "/user", "/products"
    // console.log(req.method); //"GET", "POST", "PATCH", "DELETE", ""
    
    const url = req.url;

    const method = req.method;

     if(url === "/" && method === "GET"){
        // console.log("This is root route.");

        // res.writeHead(200, {"content-type": "text/plain"} );
        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "This is root route"}));
    }else{
        // res.writeHead(404, {"content-type": "text/plain"} );
        res.writeHead(404, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Not Found!"}));
    }


});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

})


now we want to add product route  using else if and url?.startsWith("/product") as it could be any method such as GET, PUT, DELETE etc.

import type { IncomingMessage, Server } from "http";
import { createServer } from "http";

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


});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

})






 */