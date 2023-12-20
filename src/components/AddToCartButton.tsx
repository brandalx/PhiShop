"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AddToCartButton = () => {
  const [isSuccess, setisSuccess] = useState<boolean>(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setisSuccess(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        setisSuccess(true);
      }}
      size="lg"
      className="w-full"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
