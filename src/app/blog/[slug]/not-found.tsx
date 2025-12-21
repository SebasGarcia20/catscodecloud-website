import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-teal-400 mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/blog">
          <Button className="bg-teal-400 text-black hover:bg-teal-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}

