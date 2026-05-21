/**
 * DELETE Method
-----------------------------

In Node.js, the "delete method" typically refers to handling HTTP DELETE requests in a web server (like Express) or removing files from the system. It is the "D" in CRUD (Create, Read, Update, Delete) operations.


Key Concepts

1. Purpose: Requests the server to permanently remove a specified resource.

2. Idempotency: The DELETE method is idempotent, meaning making the same request multiple times should have the same effect as making it once (the resource remains gone).

3. URL Parameters: Most DELETE requests use route parameters (e.g., :id) to specify which record to remove.

4. Payloads: While not strictly forbidden, DELETE requests typically do not contain a body; the target is identified by the URI.





Common Related Methods

1. fs.unlink(): Used within Node.js to delete physical files from the local filesystem.

2. deleteOne() / deleteMany(): Used in MongoDB (via Mongoose) to remove documents from a database.

3. delete Operator: A JavaScript/TypeScript keyword used to remove a property from an object, not for HTTP or file deletion.


 */

/**
 * DELETE Method
-----------------------------------

as we are using json data which is array of objects, we will use slice to delete the give id object.


else if(method === "DELETE" && productId != null){
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
            
            //DELETE

            const deltedProduct = products.splice(productIndex);

            insertProduct(products);

            res.writeHead(404, {"content-type": "application/json"} );
            res.end(JSON.stringify({
                message: "Product Deleted successfully!.", data: deltedProduct

            }));
        }

    }







 */