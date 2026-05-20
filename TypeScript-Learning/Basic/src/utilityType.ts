/**
 * Utilites Type: 
 */


type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};


// now if I want product summary where id, naem and price is needed.

type ProductSummary = {
    id: number;
    name: string;
    price: string;
}

// but we can do it from the Product .

type ProductSummaryPick = Pick<Product, 'id'| 'name' | 'price'>;

// another way is omit where it works reversely

type ProductSummaryOmit = Omit<Product, "stock" | "color">; // we don't need color and stock.

type ProductWithColor = Required<Product>; // now all properties are required

const product1 : ProductWithColor = {
    id: 222,
    name: "Mouse", 
    price: "20", 
    stock: 100,
    color: "White",
}

// what about optional

type OptionalProduct = Partial<Product>; // not all required now

// can not changed in future;

type ProductReadonly = Readonly<Product>;


const product2 = {
    id: 222,
    name: "Mouse", 
    price: "20", 
    stock: 100,
}

// we know all the keys are must be string.
// to create empty object we can use Record, here the key must be string that is given and the type is not known as of now so it is unknown.

const emptyObj : Record<string, unknown> = {}