/**
 * Authentication VS Authorizations
--------------------------------------

Authentication: Who are you? 



Authorization: What can you do? 


Authentication verifies who a user is, while authorization determines what that verified user can do. In a Node.js web application, these two security pillars are typically implemented sequentially using custom or library-driven middleware. 


Core Structural Differences

Metric                      Authentication (AuthN)                           Authorization (AuthZ)

Core Question               "Who are you?"                                  "What permissions do you have?"

Sequence                    Always happens first.                           Always happens after authentication.

Node.js Tools               Passport.js, bcrypt, jsonwebtoken               Casl, Cerbos, custom middleware

Data Handled                Usernames, passwords, OTPs, biometrics          Roles (Admin, Editor), scopes, permissions

HTTP Fail Code              401 Unauthorized (Unauthenticated)              403 Forbidden (Unauthorized)




Phase 1: Authentication in Node.js

Authentication acts as the digital checkpoint. It verifies incoming credentials against data stored in your database. 

·	The Process: The user sends login credentials via a POST request. Your Node.js app validates the password using a hashing library like bcrypt. 

·	The Token: If valid, the server signs a JSON Web Token (JWT) using jsonwebtoken. This token is sent back and stored by the client (usually in an HttpOnly cookie or storage). 

·	The Middleware: For subsequent protected requests, an authentication middleware intercepts the request, verifies the JWT signature, and attaches the decoded user identity to the request object (req.user).




Phase 2: Authorization in Node.js

Once req.user is populated via authentication, authorization checks if that specific identity possesses the access rights to execute the target controller action. 

·	Role-Based Access Control (RBAC): Restricting access based on static definitions like admin, manager, or customer.

·	Attribute-Based Access Control (ABAC): Finer logic checking context, such as verifying if req.user.id === resource.ownerId.

·	The Middleware: Reusable authorization factories block or pass requests based on payload parameters. 





-----------------------------------------------------------------------------------------------------------

Authentication has 2 core types

1. Session-based authentication (statefull)

2. JWT-based authentication (stateless)





Session-based Authentication(Stateful): 

1. The server stores user data(session) on its side.

2. The client (browser) gets a session ID in a cookie.

3. On every request -> the cookie is sent -> servers checks it and identifies the user.

=> It is stateful (server remembers everything)

It has a drawback:

=> Needs server storage and is harder to scale for a large systems.



JWT-based Authentication(Stateless)

1. After login, the servers give a JWT token. (server send it as response)

2. The token is stored on the client side (browser/app) (token can be store on local storage, session storage or cookie)

3. On every token -> the toke is sent -> server verifies it and identifies the user.


=> It is stateless (as server doesn't store token, it is stored by the client browser or app)

=> Faster, more scalable, better for modern apps.


------------------------------------------------------------------------------------------------------------------

Authorization core types:

1. Role-based Access Control (RBAC)

2. Permission-based (Fine-Grained Access)

3. Attribute-based Access Control (ABAC)

4. Policy-based Access Control (PBAC)





Role-based Access Control (RBAC):

1. Admin-> Can do everything 

2. User-> Limited access

3. Agent-> Some special permissions




Permission-based (Fine-Grained Access):

1. User1 -> Can read + write

2. User2 -> Can only read





Attribute-based Access Control (ABAC):

Only allow access if:

1. User role = admin

2. AND location = Bangladesh

3. AND time = Office hours





Policy-based Access Control (PBAC):

1. Only premium users can access this route.

2. Only verified users can withdraw money.





 */