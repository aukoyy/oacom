import Image from "next/image";
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  console.log('All posts:', posts);
  const publishedPosts = posts.filter(post => post.publish);

  return (
    <div className="">
      <main className="">
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
            <p className="text-lg">I am <a href="/about" className="link">Øyvind</a>, <br />a Solutions Architect<br />soon to be based<br />in Australia.</p>
          </div>
        </div>
        <h2 className="text-3xl mt-24 text-gray-500">Posts</h2>
        <div className="space-y-6 mt-6">
          {publishedPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold">
                <a href={`/posts/${post.slug}`} className="hover:text-sky-700 transition-colors">
                  {post.title}
                </a>
              </h3>
              <p className="text-sm text-gray-500">Published: {post.date}</p>
              {post.excerpt && (
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
