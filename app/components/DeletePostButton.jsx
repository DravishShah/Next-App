"use client"; //

import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const router = useRouter();
  //   console.log(postId);
  async function handleDelete() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }

  return <button onClick={handleDelete}> Delete Post </button>;
}
