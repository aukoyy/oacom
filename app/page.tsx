import Image from "next/image";
import { getAllPosts } from '@/lib/mdx';
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  console.log('All posts:', posts);
  const publishedPosts = posts.filter(post => post.publish);

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
          />
          <div>
            <h1 className='text-4xl'>Hello!</h1>
            <p className="text-lg">I am <Link href="/about" className="link">Øyvind</Link>, <br />a Cloud Engineer<br />soon to be based<br />in Australia.</p>
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
