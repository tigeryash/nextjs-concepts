import { Metadata } from "next";

type ProductDetailsParams = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({
  params,
}: ProductDetailsParams): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }: ProductDetailsParams) => {
  return <div>ProductDetails{params.productId}</div>;
};

export default ProductDetails;
