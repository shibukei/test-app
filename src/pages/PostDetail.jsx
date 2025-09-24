import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div>
        <p>記事が見つかりません。</p>
      </div>
    )
  }

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.thumbnailUrl && <img src={post.thumbnailUrl} alt={post.title} className="w-full mb-4" />}
      <div className="text-sm text-gray-500 mb-4">{post.createdAt ? new Date(post.createdAt).toLocaleString() : ''}</div>
      <div className="mb-4">
        {Array.isArray(post.categories) && post.categories.map((c) => (
          <span key={c} className="text-xs border border-[#06c] text-[#06c] rounded px-2 py-1 mr-2">{c}</span>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}