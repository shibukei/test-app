import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import { posts } from './data/posts';

function Posts() {
    return (
        <>
            {posts.map((p) => (
                <article key={p.id} className='border border-gray-300 p-4 mb-8 shadow-sm'>
                    <h2 className='text-2xl font-bold mb-2'>{p.title}</h2>
                    <img src={p.thumbnailUrl} alt={p.title} className='w-full h-auto mb-2' />
                    <div className='text-sm text-gray-500 mb-2'>
                        {new Date(p.createdAt).toLocaleString()}
                    </div>
                    <div className='mb-2'>
                        {p.categories.map((c) => (
                            <span key={c} className='text-xs bg-gray-200 rounded px-2 py-2 mr-2'>{c}</span>
                        ))}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: p.content }} />
                </article>
            ))}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const dest = 'https://ja.react.dev';
root.render(
    <>
        <Header />
        <main>
            <div className="container mx-auto px-4">
                <div className='max-w-3xl mx-auto py-8'>
                    <Posts />
                </div>
            </div>
        </main>
    </>
);
