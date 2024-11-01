import { Button } from '@/components/ui/button';
import { ArrowRight, Dot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Heroimage from '@/components/Heroimage';
import AutoSlider from '@/components/Slider';
import Textsid from '@/components/Textsid';
import Blog from '@/components/Blog';
import Work from '@/components/Work';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 my-5 py-2">
      {/* hero section */}
      <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
        <div className="flex flex-col flex-1">
          <p className="text-sm font-light">
            Hiya, we’re Soe <span className="animate-pulse">👋</span>{' '}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mt-5">
            Sri Lanka-based web design and branding agency.
          </h1>
          <div className="flex flex-row gap-5 mt-5">
            <Button
              variant="destructive"
              className="bg-gray-500 hover:bg-gray-400 rounded-full"
            >
              <Link href="/" className="flex flex-row items-center gap-3">
                View Our Work{' '}
              </Link>
            </Button>
            <Button className="bg-button hover:bg-button text-black rounded-full">
              <Link href="/" className="flex flex-row items-center gap-3">
                Start a Project <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        {/* image */}
        <Heroimage />
      </div>

      {/* who are we? */}
      <div className="flex sm:flex-row flex-col justify-between gap-x-10 mt-10">
        <div className="flex-10 text-sm gap-3 flex flex-row">
          <Dot /> Who are we?
        </div>
        <div className="flex-1 sm:text-4xl text-3xl ">
          <span className="ml-20">An independent web design, branding</span> and
          development agency in Sri Lanka, established in 2020. Were passionate
          about building strong relationships and delivering exceptional digital
          solutions that drive results.
        </div>
      </div>

      {/* our work */}
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex-10 text-sm gap-2 flex flex-row">
            <Dot /> Our Work
          </div>
          <div className="flex-1 sm:text-4xl text-3xl ">
            Explore Our <br /> Work
          </div>
        </div>
        <div>
          <Work />
        </div>
        <div className="ml-20">
          <div className="flex-1 sm:text-4xl text-3xl mb-5">
            Like what <br />
            you see?
          </div>
          <Button className="bg-button hover:bg-button text-black rounded-full">
            <Link href="/" className="flex flex-row items-center gap-3">
              Contact Us <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {/* our exprions */}
      <div className="mt-10 rounded-xl flex flex-col items-center bg-[#1F1C1C] p-10">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex-1 text-sm gap-3 flex flex-row ">
            <Dot /> Our Expertise
          </div>
          <h1 className=" sm:text-4xl text-3xl flex-1">
            Boosting Your Business to Greater Success{' '}
          </h1>
          <div className=" text-[12px] flex-1 text-gray-400">
            Were a forward-thinking digital marketing agency that stays ahead of
            the curve. Our innovative approach, combined with our commitment to
            delivering value, sets us apart.
          </div>
        </div>
        <div className="flex flex-col items-start justify-center mt-20 gap-10">
          <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="sm:text-5xl text-3xl">Brand Identity</h1>
            <div className="max-w-60 h-[1px] bg-white" />
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="sm:text-5xl text-3xl">Web design </h1>
            <div className="max-w-60 h-[1px] bg-white" />
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="sm:text-5xl text-3xl">SEO</h1>
            <div className="max-w-60 h-[1px] bg-white" />
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="sm:text-5xl text-3xl">Graphic Design</h1>
            <div className="max-w-60 h-[1px] bg-white" />
          </div>
        </div>
      </div>

      {/* Our technolagey */}
      <div className="mt-10 ">
        <div className="flex flex-row gap-20">
          <AutoSlider />
        </div>
      </div>

      {/* CEO */}
      <div className="flex sm:flex-row flex-col gap-10 justify-between mt-10">
        <div className="mt-20 ml-10 flex flex-col max-w-[500px] font-bold ">
          <h1 className="sm:text-5xl mb-2 text-4xl ">
            “At SOY, we{"'"}ve built something beyond anything I could have ever
            imagined”
          </h1>
          <p className="text-xl ">Tharuka Dilshara</p>
          <p className="text-sm text-gray-200">co-founder, Soe </p>
        </div>
        <Image
          src="/CEO.png"
          alt="seo"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      {/* sharing the love */}
      <div className="flex flex-col sm:flex-row justify-between mt-10 gap-5">
        <div className="flex flex-col gap-5 flex-4">
          <p className="flex-1 text-sm gap-3 flex flex-row ">
            <Dot /> Sharing the love
          </p>
          <h1 className="flex-1 sm:text-4xl text-3xl ">
            A web design agency in Sri Lanka that cares about you and your
            brand, no matter the size or industry of your business.
          </h1>
        </div>
        <div className="flex flex-col flex-2 gap-5">
          <p className=" text-[12px] flex-1 text-gray-400 mt-10">
            At Soe, were a team of passionate web designers, brand strategists,
            and digital marketers based in Sri Lanka. We believe in building
            long-lasting relationships with our clients and delivering
            exceptional digital solutions that drive results. Our expertise in
            web design, branding, eCommerce, digital marketing, and SEO ensures
            that your business stands out online.
          </p>
          <Button
            size="lg"
            variant="destructive"
            className="bg-button hover:bg-button text-black rounded-full max-w-48"
          >
            <Link href="/" className="flex flex-row items-center gap-3">
              About Us
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {/* text sider */}
      <div className="flex flex-col gap-10 my-10">
        <Textsid />
        <Textsid />
      </div>

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
    </div>
  );
}
