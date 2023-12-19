import { Product } from "@/payload-types";
import React from "react";
interface ProductListingProps {
  product: Product | null;
  index: number;
}
const ProductListing = ({}: ProductListingProps) => {
  return <div>ProductListing</div>;
};

export default ProductListing;
