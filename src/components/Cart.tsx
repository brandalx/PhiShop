"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-all"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-blue-800">
          0
        </span>
      </SheetTrigger>
    </Sheet>
  );
};

export default Cart;
