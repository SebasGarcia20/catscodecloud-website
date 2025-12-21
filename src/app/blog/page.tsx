import { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/blog';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogSearchAndFilters from '@/components/blog/BlogSearchAndFilters';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

export const metadata: Metadata = {
  title: 'Blog | CatsCodeCloud - Web Development Insights',
  description: 'Learn about web development, SEO, and how to grow your business online. Expert insights from CatsCodeCloud.',
  openGraph: {
    title: 'Blog | CatsCodeCloud',
    description: 'Learn about web development, SEO, and how to grow your business online.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | CatsCodeCloud',
    description: 'Learn about web development, SEO, and how to grow your business online.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="text-white min-h-screen font-sans relative">
      <InteractiveBackground />
      <TopNavBar />
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights on web development, SEO, and growing your business online
          </p>
        </div>

        <BlogSearchAndFilters tags={tags} initialPosts={posts} />
      </section>
      <Footer />
    </main>
  );
}

