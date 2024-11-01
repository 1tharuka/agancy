import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/client';
import Image from 'next/image';
import { CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const POSTS_QUERY = `*[
  _type == "Progectname"
  && defined(slug.current)
]|order(publishedAt desc)[0...20]{_id, title, slug, publishedAt,'image':image.asset -> url}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const work = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-col sm:flex-row items-start justify-between mt-10">
        <p className="text-sm text-gray-400">Our Work</p>
        <div className="text-3xl grid grid-cols-2 sm:grid-cols-4 gap-4">
          <h1>Fashion</h1>
          <h1>Fitness & Sport</h1>
          <h1>Health</h1>
          <h1>Education</h1>
          <h1>Property</h1>
          <h1>Corporate</h1>
          <h1>Food & Drink</h1>
          <h1>eCommerce</h1>
          <h1>Blog</h1>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {work.map((project) => (
            <Link href={`/work/${project.slug?.current}`} key={project.id}>
              <Card className="bg-black text-white border-none overflow-hidden group transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-3xl">Like what{"'"}you see?</h1>
        <Button className="bg-button hover:bg-button text-black rounded-full max-w-40">
          <Link
            href="/StartaProject"
            className="flex flex-row items-center gap-3"
          >
            Start a Project <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}
