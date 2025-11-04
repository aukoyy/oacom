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

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      {post.date && <p className="mb-8 text-gray-500">{post.date}</p>}
      <div className="prose prose-lg max-w-none [&_a]:text-sky-500 [&_a]:hover:text-sky-700">
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
      </div>
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