import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import remarkGfm from 'remark-gfm';
import { ExternalLink } from '@/app/components/ExternalLink';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full max-w-4xl px-4 mx-auto mt-6 overflow-x-hidden">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      {post.date && <p className="mb-8 text-gray-500">{formatDate(post.date)}</p>}
      <article className="prose prose-lg max-w-none [&_a]:text-sky-500 [&_a]:hover:text-sky-700 [&_pre]:overflow-x-scroll [&_pre]:max-w-[calc(100vw-2rem)] [&_pre]:p-4 [&_pre]:rounded-md [&_code]:text-sm">
        <MDXRemote
          source={post.content}
          components={{
            ExternalLink,
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [],
            },
          }}
        />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false