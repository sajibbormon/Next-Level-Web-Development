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