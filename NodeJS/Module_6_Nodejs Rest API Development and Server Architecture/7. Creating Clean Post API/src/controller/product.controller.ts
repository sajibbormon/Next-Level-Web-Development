import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { Iproduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";



export const productController  =  async (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req);
    const url = req.url;
    const method = req.method;

    const urlArray = url?.split('/');
    // console.log(urlArray);

    const productId = urlArray && urlArray[1] === "products" ? Number(urlArray[2]) : null;

    // getting all products information
    if(url === "/products" && method==="GET"){

        //Get all products using GET method.



        // const products = {
        //     id: "1",
        //     name: "Product 1"
        // }

       const products = readProduct();
       
       res.writeHead(200, {"content-type": "application/json"} );
       res.end(JSON.stringify({message: "Products retrive successful.", DATA:{products}}));

    }else if( method === "GET" && productId !== null){  // GET single product

        //find a single product using GET method




        // console.log("Your product id is", productId);

        // now we have to find the specific product of the given id

        const products = readProduct();

        // find the product.
        const product = products.find((p : Iproduct ) => p.id === productId.toString());
            // console.log(product);

        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({message: "Product retrive successful.", DATA:{product}}));

    }else if(method === "POST" && url === "/product"){
        //creating a new product using POST method



        const body = await parseBody(req); // sending data to the server 
        // console.log(body);
    
        //let's create id for the new product

        const newProduct = {
            id: Date.now().toString(), 
            ...body, //spreading everything inside body.
        } 

        // console.log(newProduct);

        const products = readProduct();
        products.push(newProduct);
        insertProduct(products);


        res.writeHead(200, {"content-type": "application/json"} );
        res.end(JSON.stringify({
            message: "Product created successful.", data: newProduct

        }));
    }
}