/**
 * Understanding the Express Request and Response

In Express, the Request (req) and Response (res) objects are the primary tools for handling communication between a client and your server.

Core Concepts

1. Request Object (req): Represents the incoming HTTP request. It carries data such as query parameters, request body, and headers.

2. Response Object (res): Used to send data back to the client. Common methods include .send() for general data, .json() for JSON payloads, and .status() to set HTTP status codes.

3. TypeScript Advantage: Using TypeScript with Express provides type safety for your route handlers, catching errors like accessing non-existent properties during development.



Basic TypeScript ExampleTo use TypeScript with Express, you typically import the Request and Response types from the express package.


Essential Methods


Request
----------

Method/Property                             Description

req.params                          Captured route parameters (e.g., /user/:id).

req.query                           Key-value pairs of the URL query string.

req.body                            Data sent in the request body (requires middleware like express.json()).




Response    
----------

Method/Property                             Description

res.status(code)                    Sets the HTTP status code (e.g., 200, 404, 500).

res.json(data)                      Sends a JSON response and automatically sets the correct content-type.

res.send(data)                      Sends various types of data (string, object, buffer).

res.redirect(url)                   Redirects the client to a different URL.






 */


/**
 * Let's start with our server. As typescript define the types, in our server we only used the default code collected from expressjs website. 

1. now we want to use type for the application  as we are using typescript. 

    select the app type as Application: const app: Application = express()

2. In our nodejs req type was IncommingMessage but in express it is Reqeust type and so we need to give the type of both req and res

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World!')
    })

3. to see installed packages for types fine the file:  node_modules-> @types -> express -> index.d.ts  . now open it and inside the file search Request word using ctrl + f

4. by default express send response using res.send: res.send('Hello World!')
    
    but in nodejs we need use res.writeHead() and we send status code, message and data.

    now using expressjs we can send status using res.status(200).json({}) like that where we can send data by creating function chaining. here I send the data as JSON format that's why I used .json({}) 

      // res.send('Hello World!');
    res.status(200).json({
        message: "Express Server",
        "author": "Sajib Bormon"  

    })

    to see the status code right click in the browser tab -> inspect -> network -> reload -> see the local host below and click the localhost 






post 
----------

let's now see how express post method work,

1. first of create the app.post
        app.post('/', async (req: Request, res: Response) => {
            console.log(req)
        })


2. then go to postman application, crete a collection and name it 'Learning Express' then add a folder naming "Testing" and inside that folder create a request. and send a post request to http://localhost:8080/ , it will print the req, a long list of methods.  In Express.js, logging the req (request) object to the console reveals a massive JavaScript object containing all the details of the incoming HTTP request. 

    The most critical properties you'll see in a console log include:
    ·	req.method: The HTTP verb used (e.g., GET, POST, PUT, DELETE).
    ·	req.url / req.path: The specific path or full URL the client is trying to reach.
    ·	req.headers: An object containing all HTTP headers sent by the client, such as user-agent, content-type, and custom headers.
    ·	req.query: An object containing query string parameters (e.g., ?id=123 becomes { id: '123' }).
    ·	req.params: Key-value pairs for dynamic route segments (e.g., if the route is /user/:name, req.params.name holds the value).
    ·	req.body: The data sent in the request body. Note: This will be undefined unless you use Express Body-Parsing Middleware like express.json().
    ·	req.ip: The remote IP address of the client making the request.
    ·	req.cookies: An object containing cookies sent with the request (requires the cookie-parser middleware).


3. now let's print the req.body in the console.log(req.body)

    In Express, req.body is a property on the Request object that contains key-value pairs of data submitted in the request body. By default, it is undefined and must be populated using middleware that parses the incoming request based on its Content-Type.

    Key Behaviors
    ·	Purpose: It is primarily used with POST and PUT requests to handle sensitive or large amounts of data, such as login credentials or form submissions.
    ·	Middleware Requirement: If you forget to use app.use(express.json()), req.body will remain undefined.
    ·	Security: Since req.body is user-controlled, you should always validate its content using libraries like Joi or Zod before using it in your application logic.
    ·	Express 5.x Change: In Express 5, req.body is undefined if no body is sent, whereas in Express 4, it defaulted to an empty object {}.



    it will print undefined, because the data it send to client that could be buffer data. So we need to use middleware to handle this.


4. now let's include the middleware: app.use(express.json()); // middleware   

    now it is printing the response: { fname: 'Sajib', lname: 'Bormon' }

    the middleware generally the get the data from the client and set the data from buffer to json format. now we don't need to use extra function for receiving data chunk by chunk and combine them. now this things are being handled by the express easily.

    


 */