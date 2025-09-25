import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetcher = async () => {
      try {
        const res = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // API の構造に応じて data.post か data を使う
        const p = data.post ?? data;
        if (mounted) setPost(p);
      } catch (e) {
        if (mounted) setError(e.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetcher();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <div className="p-4">読み込み中...</div>;
  if (error) return <div className="p-4 text-red-600">エラー: {error}</div>;
  if (!post) return <div className="p-4">記事が見つかりません。</div>;

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.thumbnailUrl && (
        <img src={post.thumbnailUrl} alt={post.title} className="w-full mb-4" />
      )}
      <div className="text-sm text-gray-500 mb-4">
        {post.createdAt ? new Date(post.createdAt).toLocaleString() : ""}
      </div>
      <div className="mb-4">
        {Array.isArray(post.categories) &&
          post.categories.map((c) => (
            <span
              key={c}
              className="text-xs border border-[#06c] text-[#06c] rounded px-2 py-1 mr-2"
            >
              {c}
            </span>
          ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
