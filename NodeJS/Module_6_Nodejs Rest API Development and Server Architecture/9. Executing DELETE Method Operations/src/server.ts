import type { IncomingMessage, Server } from "http";
import { createServer } from "http";
import { routeHandler } from "./route/route";

const server : Server = createServer((req : IncomingMessage, res)=>{
    routeHandler(req, res);

});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

})