import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProudctReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  LayoutIcon,
  LeafIcon,
} from "lucide-react";
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
  {
    name: "Wide Asset Selection",
    Icon: LayoutIcon,
    description:
      "Explore a vast collection of digital assets including graphics, audio, and more, all available for immediate download.",
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
            <Link href="/products" className={buttonVariants()}>
              Browse trending products
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProudctReel
          query={{ sort: "desc", limit: 4 }}
          title="Brand New"
          subtitle="Brand new subtitle"
          href="/products"
        />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
