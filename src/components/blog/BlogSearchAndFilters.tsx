'use client';

import { useState, useMemo } from 'react';
import { BlogPostMeta } from '@/lib/blog';
import BlogPostCard from './BlogPostCard';
import SearchInput from './SearchInput';
import TagPill from './TagPill';

interface BlogSearchAndFiltersProps {
  tags: string[];
  initialPosts: BlogPostMeta[];
}

export default function BlogSearchAndFilters({ tags, initialPosts }: BlogSearchAndFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = initialPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    return filtered;
  }, [searchQuery, selectedTag, initialPosts]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <TagPill
              tag="All"
              isActive={selectedTag === null}
              onClick={() => setSelectedTag(null)}
            />
            {tags.map((tag) => (
              <TagPill
                key={tag}
                tag={tag}
                isActive={selectedTag === tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Results count */}
      {filteredPosts.length > 0 && (
        <p className="text-gray-400 text-sm">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>
      )}

      {/* Featured Post (if multiple posts exist) */}
      {featuredPost && filteredPosts.length > 1 && (
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <BlogPostCard post={featuredPost} />
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts Grid - Show all posts when only 1 exists, or remaining posts when multiple */}
      {filteredPosts.length > 0 && (
        <div>
          {filteredPosts.length > 1 && regularPosts.length > 0 && (
            <h2 className="text-2xl font-bold text-teal-400 mb-4">More Posts</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length === 1 ? (
              // Show the single post
              <BlogPostCard post={filteredPosts[0]} />
            ) : (
              // Show remaining posts when multiple exist
              regularPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))
            )}
          </div>
        </div>
      )}

      {/* No results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg mb-2">No posts found</p>
          <p className="text-gray-500 text-sm">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}

