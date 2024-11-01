import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/client';
import { CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt,'image':image.asset -> url}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-col sm:flex-row items-start justify-between mt-10 gap-5">
        <p className="text-sm text-gray-400">Blog</p>
        <div className="text-3xl grid grid-cols-1 sm:grid-cols-4 gap-2">
          <h1>Fashion</h1>
          <h1>Education</h1>
          <h1>technology</h1>
          <h1>branding & marketing</h1>
          <h1>Event Organizer</h1>
          <h1>Design trends</h1>
          <h1>Blog</h1>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((project) => (
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
    </main>
  );
}
