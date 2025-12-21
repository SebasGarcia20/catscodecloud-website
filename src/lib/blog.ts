import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Blog posts directory
const postsDirectory = path.join(process.cwd(), 'content', 'blog');

// Type definitions
export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
  author?: string;
  readingTime?: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  contentHtml: string;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMeta[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        tags: data.tags || [],
        coverImage: data.coverImage,
        author: data.author || 'CatsCodeCloud',
        readingTime: calculateReadingTime(fileContents),
      } as BlogPostMeta;
    })
    .filter((post) => post.title && post.date) // Filter out invalid posts
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    tags: data.tags || [],
    coverImage: data.coverImage,
    author: data.author || 'CatsCodeCloud',
    readingTime: calculateReadingTime(fileContents),
    content: content,
    contentHtml: contentHtml,
  } as BlogPost;
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

/**
 * Calculate reading time in minutes based on word count
 * Average reading speed: 200 words per minute
 */
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

