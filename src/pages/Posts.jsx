import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Posts() {
  return (
    <>
      {posts.map((p) => (
        <Link key={p.id} to={`/posts/${p.id}`} className="block">
          <article className="border border-gray-300 p-4 mb-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
            {p.thumbnailUrl && (
              <img
                src={p.thumbnailUrl}
                alt={p.title}
                className="w-full h-auto mb-2"
              />
            )}
            <div className="text-sm text-gray-500 mb-2">
              {new Date(p.createdAt).toLocaleString()}
            </div>
            <div className="mb-2">
              {Array.isArray(p.categories) &&
                p.categories.map((c) => (
                  <span
                    key={c}
                    className="text-xs border border-[#06c] text-[#06c] rounded px-2 py-1 mr-2"
                  >
                    {c}
                  </span>
                ))}
            </div>
            <div
              className="line-clamp-2 overflow-hidden"
              dangerouslySetInnerHTML={{ __html: p.content }}
            />
          </article>
        </Link>
      ))}
    </>
  );
}
