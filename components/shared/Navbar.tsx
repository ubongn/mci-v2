"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Galleries", href: "/galleries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex flex-col items-center space-x-4">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/assets/icons/new.png"
                alt="MCI Logo"
                width={120}
                height={80}
                className="w-auto h-16"
                priority
              />
            </Link>
            <div className="flex gap-4 mt-1">
              <span className="text-xs font-medium text-gray-500">
                EST. 2014
              </span>
              <span className="text-xs font-medium text-gray-500">
                CAC Reg. No. 67767
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium text-base ${
                    pathname === link.href
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Join Us Button - Right Side */}
          <div className="hidden md:flex">
            <Link href="/join-us">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 cursor-pointer">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile Sheet Trigger */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-200 text-gray-700"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-50 text-gray-700 border-l w-[300px]"
              >
                <SheetHeader>
                  <div className="flex flex-col pt-4 items-center">
                    <Image
                      src="/assets/icons/new.png"
                      alt="MCI Logo"
                      width={120}
                      height={80}
                      className="w-auto h-16 mb-2"
                    />
                    <div className="flex gap-4 mt-1">
                      <span className="text-xs font-medium text-gray-500">
                        EST. 2014
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        CAC Reg. No. 67767
                      </span>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-center py-2 font-medium transition-colors ${
                        pathname === link.href
                          ? "text-black font-semibold"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t flex justify-center">
                    <Link href="/join-us" className="w-full">
                      <Button className="bg-black text-white hover:bg-gray-800 w-full">
                        Join Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;