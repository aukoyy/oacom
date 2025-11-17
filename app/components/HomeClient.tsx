'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PostData } from '@/lib/mdx';

interface HomeClientProps {
  publishedPosts: PostData[];
}

export default function HomeClient({ publishedPosts }: HomeClientProps) {
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleImageClick = () => {
    clickCountRef.current += 1;

    if (clickCountRef.current === 3) {
      // Triple click detected!
      window.location.href = 'https://saraaukner.com';
      clickCountRef.current = 0; // Reset counter
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    } else {
      // Reset counter after 500ms if no more clicks
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      clickTimeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 500);
    }
  };

  return (
    <div className="">
      <main className="mt-18">
        <div className="flex space-x-[-35px] md:space-x-2 justify-center items-center">
          <Image
            src="/notion-avatar.svg"
            alt="Avatar of Øyvind"
            width={230}
            height={138}
            priority
            onClick={handleImageClick}
          />
          <div>
            <h1 className='text-4xl'>Hello!</h1>
            <p className="text-lg">I am <Link href="/about" className="link">Øyvind</Link>, <br />a Cloud Engineer<br />based in Oslo.</p>
          </div>
        </div>
        <h2 className="mt-24 text-3xl text-gray-500">Posts</h2>
        <div className="mt-6 space-y-6">
          {publishedPosts.map((post) => (
            <article key={post.slug} className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-bold">
                <Link href={`/posts/${post.slug}`} className="transition-colors hover:text-sky-700">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">Published: {post.date}</p>
              {post.excerpt && (
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}