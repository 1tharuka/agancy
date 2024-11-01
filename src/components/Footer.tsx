import { ArrowRight, Facebook, Instagram, X } from 'lucide-react';
import React from 'react';
import { LiaLinkedin } from 'react-icons/lia';
import { FaBehance } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 sm:mr-10 mr-5">
        <Link href="/">
          <Facebook className="bg-button rounded-full text-black w-8 h-8 p-1" />
        </Link>
        <Link href="/">
          <X className="bg-button rounded-full text-black w-8 h-8 p-1" />
        </Link>
        <Link href="/">
          <LiaLinkedin className="bg-button rounded-full text-black w-8 h-8 p-1" />
        </Link>
        <Link href="/">
          <Instagram className="bg-button rounded-full text-black w-8 h-8 p-1" />
        </Link>
        <Link href="/">
          <FaBehance className="bg-button rounded-full text-black w-8 h-8 p-1" />
        </Link>
      </div>

      <div className="bg-[#1F1C1C] w-full p-10 rounded-2xl">
        <div className="flex sm:flex-row flex-col gap-10">
          <div className="flex-1">
            <h1 className="flex-1 sm:text-4xl text-3xl">
              Do you like <br /> Starting Project ?
            </h1>
            <Button
              size="lg"
              variant="destructive"
              className="bg-button hover:bg-button text-black rounded-full max-w-48 mt-3"
            >
              <Link href="/" className="flex flex-row items-center gap-3">
                Start a Project
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex-1 flex  flex-col gap-10 text-white text-[20xp]">
            <Link href="/Servis" className="">
              Servis
            </Link>
            <Link href="/work" className="">
              Work
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/" className="">
              Blog
            </Link>
            <Link href="/" className="">
              Contact
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <p>+94 71 887 3678</p>
            <p>jane.doe@xyzcompany.com</p>
            <p>kalutara</p>
          </div>
        </div>

        <div className="mt-20 text-center flex flex-col gap-5">
          <hr />
          <h1 className="sm:text-5xl text-xl">
            Crafting Digital Experiences Since 2020
          </h1>
          <div>
            <Link href="/" className="text-white text-3xl font-bold">
              ZOY.
            </Link>
            <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
