"use client";

import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';

const MOCK_POSTS = {
  1: {
    title: 'Technical intern training program (TITP)',
    date: 'JUNE 7, 2022',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center',
    content: `The technical intern training program (TITP) offers young individuals from Nepal a chance to gain real-world work experience in Japan's industries. This program helps develop skills, cultural understanding, and long-term career opportunities.`
  },
  2: {
    title: 'Technical intern training program (TITP)',
    date: 'JUNE 7, 2022',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop&crop=center',
    content: `Learn how the TITP prepares candidates with hands-on training across multiple sectors while providing a pathway to skilled roles in Japan.`
  },
  3: {
    title: 'Technical intern training program (TITP)',
    date: 'JUNE 7, 2022',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center',
    content: `Discover key benefits, eligibility criteria, and the impact of TITP on Nepal's workforce development.`
  }
};

const BlogSinglePage = ({ params }) => {
  const { slug } = params;
  const post = MOCK_POSTS[slug];

  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post ? post.title : 'Post', href: `/blog/${slug}` }]}  alignmentClass='justify-start' className='mt-6'/>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {post ? (
                <article className="prose max-w-none">
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#041926] mb-4">{post.title}</h1>
                  <div className="text-sm text-gray-500 mb-6">{post.date}</div>
                  <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl shadow mb-8" />
                  <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
                </article>
              ) : (
                <div className="text-gray-700">Post not found.</div>
              )}
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <Newspaper className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-gray-900">Other Blogs</h2>
                </div>
                <ul className="space-y-3">
                  {Object.entries(MOCK_POSTS)
                    .filter(([id]) => String(id) !== String(slug))
                    .map(([id, item]) => (
                      <li key={id} className="border-b border-gray-200 last:border-b-0 pb-3">
                        <Link href={`/blog/${id}`} className="text-sm text-gray-800 hover:text-primary transition-colors">
                          {item.title}
                        </Link>
                        <div className="text-xs text-gray-500 mt-1">{item.date}</div>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogSinglePage;


