import prisma from "@/lib/prisma";
import Posts from "./components/Posts";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log("Post: ", posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/add-posts"}> Add Post </Link>
      <h1>Feed</h1>
      {posts.map((post) => {
        return (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}
