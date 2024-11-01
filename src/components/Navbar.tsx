import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ArrowRight, MenuIcon } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Link href="/" className="text-white text-3xl font-bold">
        ZOY.
      </Link>

      <div className="sm:flex hidden  flex-row gap-10 text-white text-[12px]">
        <Link href="/Servis" className="">
          Servis
        </Link>
        <Link href="/" className="">
          Work
        </Link>
        <Link href="/" className="">
          About
        </Link>
        <Link href="/" className="">
          Blog
        </Link>
        <Link href="/" className="">
          Contact
        </Link>
      </div>

      <div className="sm:flex hidden">
        <Button className="bg-button hover:bg-button text-black rounded-full">
          <Link href="/" className="flex flex-row items-center gap-3">
            Start a Project <ArrowRight />
          </Link>
        </Button>
      </div>
      <Sheet>
        <SheetTrigger className="sm:hidden flex">
          <MenuIcon className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-white text-3xl">
              SOY.
              <br />
              <p className="text-sm">Hiya, we{"'"}re Soe 👋</p>
            </SheetTitle>
            <SheetDescription className="flex flex-col">
              <div className="flex  flex-col gap-5 text-white text-[12px] mt-5">
                <Link href="/Servis" className="text-lg">
                  Servis
                </Link>
                <Link href="/" className="text-lg">
                  Work
                </Link>
                <Link href="/" className="text-lg">
                  About
                </Link>
                <Link href="/" className="text-lg">
                  Blog
                </Link>
                <Link href="/" className="text-lg">
                  Contact
                </Link>
              </div>
              <div>
                <Button className="bg-button hover:bg-button text-black rounded-full mt-10">
                  <Link href="/" className="flex flex-row items-center gap-3">
                    Start a Project <ArrowRight />
                  </Link>
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
