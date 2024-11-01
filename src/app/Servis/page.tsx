import Blog from '@/components/Blog';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className="  md:mt-10">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm text-gray-400">Services</p>
            <h1 className=" text-2xl sm:text-4xl font-medium leading-tight">
              We{"'"}re a digital <br /> marketing agency <br />
              with expertise
            </h1>
          </div>
          <h2 className="text-3xl sm:mt-32">Your Online Growth Partner</h2>
        </div>
        <div className="w-full h-[1px] bg-gray-500 mt-5" />
      </div>
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl">Design</h1>
            <p className="text-sm text-gray-400">
              In-house brand designers and web <br /> designers craft visuals
              that match your brand values.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-4xl">01 Brand Identity</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">02 Web Design</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">03 eCommerce</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">04 Shopify</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">05 Graphic Design</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-5 mt-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl">Develop</h1>
            <p className="text-sm text-gray-400">
              Web development to the highest standards, <br />
              aligning with the latest industry requirements..
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-4xl">01 Web Development</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">02 Craft CMS</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">03 Shopify</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">04 eCommerce</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">05 Technical SEO</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-5 mt-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl">Support</h1>
            <p className="text-sm text-gray-400">
              Rely on our in house team for all your <br />
              design, development, and SEO needs.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-4xl">01 SEO</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">02 Web Design</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">03 Shape Support</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">04 Content Writing</h1>
                <hr />
              </div>
              <div>
                <h1 className="text-4xl">05 Craft CMS</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 mt-5" />
      {/* blog */}
      <div className="flex flex-col sm:flex-row gap-5 mt-10 mb-20 justify-between items-start h-fit">
        <div className="flex flex-col gap-5 flex-4 flex-2 ">
          <p className="flex-1 text-sm gap-3 flex flex-row ">
            <Dot /> Blog
          </p>
          <h1 className="flex-1 sm:text-4xl text-3xl ">
            Fresh Ideas from Our Synergy Studio
          </h1>
          <Button
            size="lg"
            variant="destructive"
            className="bg-button hover:bg-button text-black rounded-full max-w-48"
          >
            <Link href="/" className="flex flex-row items-center gap-3">
              View the blog
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="flex flex-row gap-5 overflow-hidden w-full ">
          <Blog />
        </div>
      </div>
    </section>
  );
};

export default page;
