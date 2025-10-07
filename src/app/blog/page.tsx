import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
          From the Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Insights, ideas, and updates from the team at Centrino Technologies.
        </p>
      </section>

      <section className="mt-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {blogPosts.map((post) => {
            const postImage = PlaceHolderImages.find(
              (p) => p.id === post.imageId
            );
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                  <div className="relative aspect-video">
                    {postImage && (
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={postImage.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                   <CardFooter>
                    <span className="flex items-center font-semibold text-primary">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
