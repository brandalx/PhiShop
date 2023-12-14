import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <div className=" mt-10 mb-20">
        <div className="grid md:gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="my-2">
              <div className="flex items-end">
                <Link className="me-2" href="/">
                  <Icons.logo className="h-10 w-10 text-blue-600" />
                </Link>
                <h5 className="text-md font-bold text-xl">PhiShop</h5>
              </div>

              <p className="text-sm text-muted-foreground">
                Shop of digital products
              </p>
            </div>
            <div className="flex  cursor-pointer ">
              <Linkedin className="w-5 h-5 text-blue-500 me-1" />
              <Facebook className="w-5 h-5 text-blue-500 mx-2" />
              <Instagram className="w-5 h-5 text-blue-500 mx-2" />
              <Twitter className="w-5 h-5 text-blue-500 mx-2" />
            </div>
          </div>
          <div>
            <div className="my-2 flex flex-col">
              <h4 className="font-bold text-md"> Documentation</h4>
              <a href="#" className=" text-muted-foreground">
                Getting started
              </a>
              <a href="#" className=" text-muted-foreground">
                API Reference
              </a>
              <a href="#" className=" text-muted-foreground">
                Integrations
              </a>
              <a href="#" className=" text-muted-foreground">
                Examples
              </a>
              <a href="#" className=" text-muted-foreground">
                SDKs
              </a>
            </div>

            <div className="my-2 flex flex-col">
              <h4 className="font-bold text-md">Company</h4>
              <a href="#" className=" text-muted-foreground">
                Blog
              </a>
              <a href="#" className=" text-muted-foreground">
                Contact
              </a>
              <a href="#" className=" text-muted-foreground">
                Customers
              </a>
              <a href="#" className=" text-muted-foreground">
                Brand
              </a>
              <a href="#" className=" text-muted-foreground">
                SDKs
              </a>
            </div>
          </div>
          <div>
            <div className="my-2 flex flex-col">
              <h4 className="font-bold text-md">Resources</h4>
              <a href="#" className=" text-muted-foreground">
                Changelog
              </a>
              <a href="#" className=" text-muted-foreground">
                Pricing
              </a>
              <a href="#" className=" text-muted-foreground">
                Status
              </a>
              <a href="#" className=" text-muted-foreground">
                Webhooks
              </a>
            </div>

            <div className="my-2 flex flex-col">
              <h4 className="font-bold text-md">Legal</h4>
              <a href="#" className=" text-muted-foreground">
                Acceptable Use
              </a>
              <a href="#" className=" text-muted-foreground">
                Privacy Policy
              </a>
              <a href="#" className=" text-muted-foreground">
                Terms Of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
