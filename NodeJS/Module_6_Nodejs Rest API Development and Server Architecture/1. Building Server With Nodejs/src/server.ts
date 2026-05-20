import type { IncomingMessage, Server } from "http";
import { createServer } from "http";

const server : Server = createServer((req : IncomingMessage, res)=>{
    console.log(req);
});

server.listen( 5001, ()=>{
    console.log("server is running on port: 5001");

})