import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";

type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, category, isOpen, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center ">
        <Button className="gap-1.5"></Button>
      </div>
    </div>
  );
};

export default NavItem;
