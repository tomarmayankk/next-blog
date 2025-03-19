import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

async function getdata() {
  const items = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    }
  })
  return items;
}

export default function  Home() {
  return (
   <div className="py-6">
    <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
    <Suspense fallback = {<p>Waiting.........</p>}>
      <BlogPosts />
    </Suspense>
   </div>
  );
}

async function BlogPosts() {
  const data = await getdata();

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map ((item) => (
      <BlogPostCard data={item} key={item.id}/>
    ))}
  </div>
  )
}