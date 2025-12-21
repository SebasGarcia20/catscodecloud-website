import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts, getPostsByTag } from '@/lib/blog';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | CatsCodeCloud Blog',
    };
  }

  return {
    title: `${post.title} | CatsCodeCloud Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'CatsCodeCloud'],
      tags: post.tags,
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get related posts (same tags, excluding current post)
  const relatedPosts = getPostsByTag(post.tags[0] || '')
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="text-white min-h-screen font-sans relative">
      <InteractiveBackground />
      <TopNavBar />
      <article className="px-6 py-20 max-w-4xl mx-auto relative z-10">
        {/* Back to blog */}
        <Link href="/blog">
          <Button
            variant="ghost"
            className="mb-8 text-teal-400 hover:text-teal-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-teal-500/20 text-teal-300 rounded-full flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
            {post.author && (
              <div>
                <span>By {post.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="blog-content mb-12 max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            Ready to Grow Your Online Presence?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            At CatsCodeCloud, we don't just build websites—we build online presence that converts. 
            Get in touch for a free consultation.
          </p>
          <Link href="/#contact">
            <Button className="bg-teal-400 text-black hover:bg-teal-300">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-teal-400 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </main>
  );
}

