/**
 * Cleaning up the server and creating app.ts
---------------------------------------------------------


                                                   req                    req          
        req                 req                  ------>                ------->
cleint ------>   route.ts  ----->  controller.ts            services.ts             DB
    |                                    |       <------                <--------                 
    |                                    |          res                    res     
    |               res                  |   
    --------------------------------------
           {success, message, data}         





database is saved in the db folder.

app related code is inside the the app.ts

server related code and initializing the database are inside the server.ts file. Means when server is working then it connects to the database.






 */