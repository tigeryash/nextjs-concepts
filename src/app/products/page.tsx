import Link from "next/link";
import React from "react";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      {/*make three product h2 headings with links in them and then one that uses striong interpolation to use productId const  */}

      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product 3
        </Link>{" "}
        {/*replace will replace the current history entry with the new one */}
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
};

export default Products;
