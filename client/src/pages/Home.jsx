import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center'>
        <h6 className='text-3xl font-bold lg:text-4xl'>Welcome to the Campus Voice Query Management System</h6>
        <p className='text-gray-500 text-md sm:text-lg'>
        Easily raise and resolve campus queries with our voice-enabled system. Get quick responses, track queries in real time, and enhance your campus experience effortlessly.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-lg text-teal-500 font-bold hover:underline'
        >
          View all queries
        </Link>
      </div>
      
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Queries</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home