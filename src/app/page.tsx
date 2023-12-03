import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, LeafIcon } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Immediate Delivery",
    Icon: ArrowDownToLine,
    description:
      "Receive your items delivered to your email within moments and access them instantly.",
  },
  {
    name: "Environmentally Friendly",
    Icon: LeafIcon,
    description:
      "We've committed 1% of our earnings to the preservation and regeneration of the natural world.",
  },

  {
    name: "Quality Assurance",
    Icon: CheckCircle,
    description:
      "Our team meticulously verifies the quality of every product on our platform to meet our highest standards. Not satisfied? We provide a 30-day money-back guarantee.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold trackging-tiht  text-gray-900 sm:text-6xl">
            PhiShop is an online marketplace for high-quality
            <span className="text-blue-600"> digital assets</span>
          </h1>
          <p className="mt-6 text0lg max-w-prose text-muted-foreground">
            Welcome to PhiShop. Every product on our platform is verified by our
            team and totally safe to buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link href="/prodiucts" className={buttonVariants()}>
              Browse trending products
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* todo: product list */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
