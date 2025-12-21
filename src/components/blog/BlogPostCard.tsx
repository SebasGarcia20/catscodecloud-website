import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { BlogPostMeta } from '@/lib/blog';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full bg-gray-900/50 backdrop-blur-sm border-teal-500/20 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300 group">
        <CardContent className="p-0">
          {post.coverImage && (
            <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-teal-500/20 text-teal-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>
            <div className="pt-2">
              <span className="text-teal-400 text-sm font-medium group-hover:underline">
                Read more →
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

