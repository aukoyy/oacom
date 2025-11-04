import { getAllPosts } from '@/lib/mdx';
import HomeClient from './components/HomeClient';

export default function Home() {
  const posts = getAllPosts();
  console.log('All posts:', posts);
  const publishedPosts = posts.filter(post => post.publish);

  return <HomeClient publishedPosts={publishedPosts} />;
}
