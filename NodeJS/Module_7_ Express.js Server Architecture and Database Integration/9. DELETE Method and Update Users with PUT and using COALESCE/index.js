/**
 * Getting all users and single user with params
-------------------------------------------------

In Express.js, you can handle these requests by defining two distinct routes. Use req.params to capture dynamic URL segments like specific IDs, and a standard GET route to fetch all users.

Key Concepts:

·	parseInt() an Data Type: URL parameters are strings by default, so it's good practice to convert them if your database uses numeric IDs. Parameters are always captured as 
    strings, so you usually need to convert them to numbers (using parseInt) if you are comparing them to numeric IDs.

·	Order of Routes: Always declare broader routes (like /api/users) before paths with parameter placeholders (like /api/users/:id) to prevent Express from misinterpreting 
    a path segment as a parameter. 

·	Route Parameters (:id): Defined with a colon in the URL path, these act as placeholders.

·	req.params: An object where keys are the parameter names defined in the route. In the example above, req.params.id holds the value (e.g., 3000/users/2 makes req.params.id   
    equal to '2'). Extracts parameters specified in the URL path (prefixed by a colon, :).




//now update using PUT method.

problem: as using put method can create a problem, suppose if I need to update only name, and others should remain same, but using PUT method and only updating a sinlge parameter/field of a tuple/record will cause problem to others field/parameter, it will automatically assign with null. PUT method update all field at a time and only given will be updated and others will be null.

solution: To solve this problem we can use coalesce(). It will keep the previous value if not given. 




 */