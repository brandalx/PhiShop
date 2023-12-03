import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
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
    </MaxWidthWrapper>
  );
}
