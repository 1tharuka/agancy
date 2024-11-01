import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="mt-20 flex flex-col sm:flex-row gap-1">
      <div className="flex-1">
        <Image
          src="/zoy.jpg"
          alt="zoy_imag"
          width={400}
          height={900}
          className="rounded-s-sm"
        />
      </div>
      <div className="flex-1 sm:-ml-40 flex flex-col gap-5">
        <h1 className="text-6xl">
          Empowering Brands Through Innovative Digital Solutions.
        </h1>
        <h1 className="text-3xl">
          An independent web design, branding and development agency in Sri
          Lanka, established in 2020. Were passionate about building strong
          relationships and delivering exceptional digital solutions that drive
          results.
        </h1>
        <p className="text-sm text-gray-400">
          Founded in 2020, we are an independent web design, branding, and
          development agency based in Sri Lanka, driven by a passion for
          building meaningful connections with clients. We specialize in
          delivering tailored digital solutions that not only enhance brand
          visibility but also drive impactful results. From creative design to
          robust development, our team is committed to elevating your brand{"'"}
          s digital presence with excellence and innovation.
        </p>
        <div>
          <Button className="bg-button hover:bg-button text-black rounded-full">
            <Link href="/contact" className="flex flex-row items-center gap-3">
              Contact ZOY.
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
