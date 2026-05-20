/**
 * PUT method:
----------------

In Node.js, the PUT method is primarily used to update or replace an existing resource on a server. Unlike partial updates, a standard PUT request typically sends a full replacement of the target resource.


Core Concepts
1. Replacement Logic: If you use PUT to update a user profile, you must include all fields (name, email, age, etc.) in the request body. Missing fields might be deleted or set to null in your database.

2. Idempotency: PUT is idempotent, meaning making the same request multiple times will have the same effect as making it once. This is a key difference from POST, which might create duplicate entries.

3. Resource Creation: While mostly used for updates, PUT can also create a new resource if it doesn't already exist at the specified URL.



Comparison: 
PUT vs. PATCH


Feature                 PUT                         PATCH

Purpose             Complete replacement        Partial update

Payload             Requires all fields         Only the fields changing

Idempotency         Yes                         Generally no




Common Status Codes
1. 200 OK: The update was successful and a response body is returned.

2. 201 Created: A new resource was created (if it didn't exist).

3. 204 No Content: The update was successful, but no response body is returned.

4. 404 Not Found: The resource to be updated does not exist.

 

*/

/**
 * PUT Method Implementation
---------------------------------


create a else if condition for put method in product.controller.ts




 */