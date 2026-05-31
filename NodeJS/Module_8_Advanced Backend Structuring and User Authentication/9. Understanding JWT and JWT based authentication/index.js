/**
 * Understanding the JWT and JWT based authentication
------------------------------------------------------

JSON Web Token (JWT) authentication is a stateless mechanism where user identity and permissions are encapsulated within a compact, digitally signed JSON object sent between a client and a server. Unlike traditional systems that track user sessions in server memory or databases, a JWT is completely self-contained. This setup allows the server to verify incoming client requests instantly by validating the token's cryptographic signature alone.



The 3 Core Components of a JWT
A typical JWT appears as a single string split into three distinct parts separated by periods (.). Each segment is Base64URL-encoded: 

1.	Header: Outlines metadata, including the token type and the hashing algorithm used (e.g., HS256 or RS256). 

2.	Payload: Stores the "claims," which are statements containing user details (like userId or role) alongside token properties like expiration time (exp). 

3.	Signature: Validates that the token has not been altered. The server builds this by combining the encoded header, encoded payload, and a secret key through the designated algorithm. 




[ Client ]                                     [ Server ]

    |                                              |
    | --- 1. POST /login (user/pass) ------------> |
    |                                              | (Validates credentials,
    |                                              |  generates & signs JWT)
    | <-- 2. Returns JWT Token ------------------- |
    |                                              |
    | (Stores token securely)                      |
    |                                              |
    | --- 3. GET /profile (Header: Bearer JWT) --> |
    |                                              | (Verifies signature;
    |                                              |  reads payload claims)
    | <-- 4. Sends Protected Resource Data ------- |




·	User Authentication: The client transmits login credentials (e.g., username and password) to the server. 

·	Token Generation: Upon successful validation, the server builds a JWT carrying user data and returns it to the client. 

·	Token Storage: The client caches this string locally, ideally inside a secure environment like an HttpOnly cookie. 

·	Subsequent Requests: For subsequent access to guarded API endpoints, the client attaches the token inside the HTTP Authorization header prefixed as a Bearer token. 

·	Server Verification: The server verifies the signature using its secret key; if valid, it services the request without needing to query a session database. 




Key Trade-Offs: JWT vs. Session-Based Auth      

Feature                              JWT Authentication                                           Traditional Session Authentication

Storage Location               Entirely on the client side.                                 Stored on server memory or a database (e.g., Redis).

Scalability           High; easy to scale horizontally across microservices.                Complex; requires shared session states across servers.

Data Visibility       Publicly readable; payload data is only encoded, not hidden.          Hidden; clients only receive an opaque session ID.

Revocation            Difficult; valid until its expiration time unless blacklisted.        Simple; the server immediately deletes the session row.




Security Best Practices

·	Never store sensitive keys: Payload contents can be decoded effortlessly by anyone via online tools like the JWT.io Token Debugger. Avoid adding items like passwords or personal financial records.

·	Mitigate XSS vulnerabilities: Avoid keeping tokens inside localStorage where malicious client scripts might extract them. Use HttpOnly and Secure cookie flags instead.

·	Enforce brief expiration windows: Keep the token life short (e.g., 15 minutes). Use a secure pairing strategy alongside long-lived rotation Refresh Tokens to securely generate new access tokens without forcing manual logins. 



-------------------------------------------------------------------------------------------------------------------------------------------------------


JWT (JSON Web Token) is a small digital token used to verify a user's identity and safely share information between a server and a client.



it looks like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


as it has 3 segments, first segment is header that contains meta data, hashing algorithm etc.


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

decoded: 

{
  "alg": "HS256",
  "typ": "JWT"
}




the second segment is payload, that contains all data such as name, age, email, password etc.

eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ

decoded:

{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "role": "admin"
}



and the third segment is signature, that contains server header+payload combination with secret keys


SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

decoded: 

// How the server creates and validates this piece behind the scenes:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  YOUR_SECRET_SERVER_KEY
)








How It Looks in an HTTP Request
---------------------------------

When a client application requests data from a protected API, it passes the encoded string inside the network headers like this:


GET /api/v1/dashboard HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
Accept: application/json







client --------------------> Authenticate -----------------------> Generate JWT  
   ↑                                                                   |
   |                                                                   |
   |                                                                   ↓
   -------------------------<------------------------------Response with JWT                                                                





Generate Token:


const jwtPayload = {
                      id: user._id,
                      user_email: user.email,
                      role: user.role
                   }


const token = {
                jwt.sign(
                  jwtPayload,
                  secret, 
                  {expiresIn: '1d'}
                );
              }

 


------------------------------------------------------------------------------------

Our project:

Authentication is log in our project, so let's create auth folder inside modules directory.


now connect with the authRouter in app.ts using app.use

app.use("/api/auth", authRouter);




auth.route.ts:

import { Router } from "express";
import { authController } from "./auth.controller";


const router = Router()

router.post("/login", authController.userLogin );


export const authRouter = router


now create controller for auth, 

auth.controller.ts:

import type { Request, Response } from "express"
import { authService } from "./auth.service"

const userLogin = async (req: Request, res: Response) => {
    try {
        
        const result = await authService.loginUserIntoDB(req.body);

        res.status(200).json({
            success: true,
            message: "Login successful!",
            data: result
        })

    } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message,
                data: {}
        })
    }
}

export const authController = {
    userLogin,
}





now create auth.service.ts:



import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";
import config from "../../config";




const loginUserIntoDB = async (payload: {email: string, password: string}) => {
    const { email, password } = payload;

    //1. check if the user exists
    //2. compare the password
    //3. generate token
    
    // step 1
    const userData = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `, [email])

    if(userData.rows.length === 0){
        throw new Error("Invalid Credentials! The email you've provided doesn't exists!");
    }
    const user = userData.rows[0];
    // step 2
    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword){
        throw new Error("Invalid Credentials! Wrong password!");
    }

    // step 3

    //now we need package to install : npm i jsonwebtoken

    //now import it, and we need another package type to run it: npm i --save-dev @types/jsonwebtoken

    //need jwtPayload

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        is_active: user.is_active,
    }

    //generate token

    // the secret key is written on .env and accessed through config for security. and it will be a string

    const accessToken = jwt.sign(jwtPayload,  config.secret as string ,{expiresIn: "1d" })

    return { accessToken };
    
}

export const authService = {
    loginUserIntoDB,
}

 */