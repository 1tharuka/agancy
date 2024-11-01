import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/client';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

const POSTS_QUERY = `*[
  _type == "Progectname"
  && defined(slug.current)
]|order(publishedAt desc)[0...5]{ _id, title, slug,'image':image.asset -> url}`;

const options = { next: { revalidate: 30 } };

export default async function Work() {
  const work = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section className="w-full text-white py-12 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
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
    </section>
  );
}
