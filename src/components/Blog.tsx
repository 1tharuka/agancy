import * as React from 'react';
import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/client';
import { Card, CardContent } from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Link from 'next/link';
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...5]{_id, title, slug, publishedAt,'image':image.asset -> url,}`;

const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full max-w-fit"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post._id} className="sm:basis-1/3 basis-1/2">
            <div className="p-1 flex flex-row gap-1">
              <Card className="w-56 h-56 bg-black border-none text-white">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-3">
                  <div className="rounded-lg">
                    <Image
                      src={post.image}
                      alt={post._id}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-5" flex-col gap-5>
                    <p className="text-gray-400 text-[10px]">
                      {new Date(post.publishedAt).toLocaleString()}
                    </p>
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
