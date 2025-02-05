import Link from "next/link";

export default function ProductList(){
    const productId = 1;
    return(
        <>
        <div>
            <h1>Product List</h1>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
        </>
    );
};