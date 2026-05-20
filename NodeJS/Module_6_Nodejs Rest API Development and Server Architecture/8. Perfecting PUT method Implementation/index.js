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


else if(method === "PUT" && productId !== null){
        const body = await parseBody(req);


        //as we have stored data using array of objects, so we wil find the index of the product from all products, first of read products. and we will find the index using find function.

        const products = readProduct();
                
        // const productIndex = products.find((product: Iproduct) => {
        //     // if(productId.toString() === body.id.toString()){
        //     //     console.log("found it");
        //     //     // console.log(body.id);

        //     // }else{
        //     //     console.log("not found");
        //     // }


        //     // let's find out the index 
            
        // })


        const productIndex = products.findIndex((product : Iproduct) => product.id === productId.toString() );
        // console.log(productIndex);



        we are first of all taking all products, as it all products is an array of objects, so are searching the index of the object base on id. to do this we are using products.findIndex() . after fiding the product, we have to see if the product exists or not. if index is -1 then doesn't exist, then we will show 404, product not found. Otherwise we have to update the information of the array's particular object based on id then we have to insert the products means insert the array into the database. and lastly we can print the message for the browser, product updated successfully. 

        the full code of else if condition:


        else if(method === "PUT" && productId !== null){
        const body = await parseBody(req);


        //as we have stored data using array of objects, so we wil find the index of the product from all products, first of read products. and we will find the index using find function.

        const products = readProduct();

        const productIndex = products.findIndex((product : Iproduct) => product.id === productId.toString() );
        console.log(productIndex);

        if(productIndex < 0){
            res.writeHead(404, {"content-type": "application/json"} );
            res.end(JSON.stringify({
                message: "Product not found!."

            }));
        }else{
            products[productIndex] = {
                "id": products[productIndex].id,
                ...body
            }

            insertProduct(products);
            res.writeHead(404, {"content-type": "application/json"} );
            res.end(JSON.stringify({
                message: "Product updated successfully!.", data: products[productIndex]

            }));
        }


    }

 */