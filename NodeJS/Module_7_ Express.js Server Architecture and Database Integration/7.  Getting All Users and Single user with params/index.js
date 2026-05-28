/**
 * Getting all users and single user with params
-------------------------------------------------

In Express.js, you handle dynamic routes for multiple and single users by defining route parameters with a colon : in the path and accessing them via req.params, or by extracting optional filtering data using req.query.

1. Getting a Single User by ID (Route Parameters)
    Use path parameters for data that identifies a specific resource, like a userId.
    Route Path: /users/:id
    Accessing Data: req.params.id

2. Getting All Users (Query Parameters)
    Use query parameters to filter or get a list of users without hardcoding IDs in the path.
    Route Path: /users
    Accessing Data: req.query


 */