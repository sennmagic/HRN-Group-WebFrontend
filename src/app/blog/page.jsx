"use client";

import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import BlogSection from '@/components/molecules/blog';

const BlogPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} alignmentClass='justify-start'  className='mt-6'/>
      <main>
        <BlogSection />
      </main>
    </>
  );
};

export default BlogPage;


