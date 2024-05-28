"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order placed");
    router.push("/");
    //router.back() goes to the previous page
    //router.forward() goes to the next page
    //router.replace() replaces the current page
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;
