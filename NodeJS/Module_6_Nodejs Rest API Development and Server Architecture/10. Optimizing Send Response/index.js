/**
 * Optimizing Send Response
-------------------------------

We writing code that is not optimized as we repeating same code again and again for get reposone, send response ect.

now we want to optimize it. To do this we will create a file sendRespone.ts in the utility directory.


import type { ServerResponse } from "node:http";

export const sendResponse = (res: ServerResponse,  statusCode: number, success: boolean, message: string, data: any) => {
    const response  = {
        success,
        message,
        data,
    }

     res.writeHead(statusCode, {"content-type": "application/json"} );
        res.end(JSON.stringify(response));
}


now we can use single line in product.controller.ts  sendResponse(res, statusCode, true/false, message)


and for each sendResponse() function we will return  the function. And we will use try catch block to handle the server error .

we will use return bcz generally server keeps loading, to return from that we will return the response.





 */