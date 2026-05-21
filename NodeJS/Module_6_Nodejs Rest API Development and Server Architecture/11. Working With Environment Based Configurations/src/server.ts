import type { IncomingMessage, Server } from "http";
import { createServer } from "http";
import { routeHandler } from "./route/route";
import config from "./config";
import { copyFile } from "fs";

const server : Server = createServer((req : IncomingMessage, res)=>{
    routeHandler(req, res);

});

server.listen( config.port, ()=>{
    console.log(`server is running on port ${config.port}`);

}) 