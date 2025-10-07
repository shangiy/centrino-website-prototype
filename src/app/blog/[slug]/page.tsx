import { notFound } from 'next/navigation';
import Image from 'next/image';

import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-6 mt-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </header>

      {postImage && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-lg">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={postImage.imageHint}
            priority
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <p className="lead text-xl text-muted-foreground mb-8">
          {post.excerpt}
        </p>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

// Add a simple prose style to globals.css if not present
// For this implementation, we will rely on Tailwind's default styles
// and some manual styling.
