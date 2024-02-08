import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import BlogCard from './BlogCard';
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className=' font-raleway pt-8'>
        <div ><HeadTitle title={'BLOG'} ></HeadTitle></div>
            
            <section className='group grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[110px] w-[100%] md:w-[90%] md:mx-auto'>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
            </section>
        </div>
    );
}

export default Blog;
