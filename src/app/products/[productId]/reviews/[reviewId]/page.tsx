"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

type ReviewDetailParams = {
  params: {
    productId: string;
    reviewId: string;
  };
};
const ReviewDetail = ({ params }: ReviewDetailParams) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for produt {params.productId}
    </div>
  );
};

export default ReviewDetail;
