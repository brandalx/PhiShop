import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
interface PageProps {
  productId: string;
}

const BREADCRUMPS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];
const Page = ({ params }: PageProps) => {
  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* product details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2 ">
              {BREADCRUMPS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm ">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMPS.length - 1 ? (
                      <ChevronRight className="text-neutral-300" />
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
