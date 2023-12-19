"use client";
import { Product } from "@/payload-types";
import React, { useState } from "react";
interface ProductListingProps {
  product: Product | null;
  index: number;
}
const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ProductPlaceHolder = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl"></div>
      </div>
    );
  };
  if (!product || isVisible) return <ProductPlaceHolder />;

  return <div>ProductListing</div>;
};

export default ProductListing;
