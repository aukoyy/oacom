import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  [key: string]: any; // Allow additional frontmatter fields
}

export function getAllPosts(): PostData[] {
  const contentDirectory = path.join(process.cwd(), 'content');

  // Get all MDX files
  const fileNames = fs.readdirSync(contentDirectory)
    .filter(fileName => fileName.endsWith('.mdx'));

  const posts: PostData[] = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const rawContent = fs.readFileSync(fullPath, 'utf8');

    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(rawContent);

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || '',
      content,
      ...frontmatter // Spread any additional frontmatter fields
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): PostData | null {
  try {
    const fullPath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const rawContent = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(rawContent);

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || '',
      content,
      ...frontmatter
    };
  } catch (error) {
    return null;
  }
}