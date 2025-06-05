import React from "react";
import { Calendar, MessageSquare } from "lucide-react";

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/id/1018/400/250",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1011/400/250",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1015/400/250",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

const Blog = () => {
  return (
    <section className="py-10 px-5 max-w-screen-xl mx-auto">
      <p className="text-blue-500 text-center font-medium">Practice Advice</p>
      <h2 className="text-3xl font-bold text-center pb-16">Featured Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover" 
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-5">
              <div className="text-sm text-gray-500 mb-2 flex flex-wrap gap-2">
                
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4 className="font-semibold text-sm mb-2 pb-2">{post.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <MessageSquare className="w-4 h-4 mr-1" />
                <span>{post.comments} comments</span>
              </div>
              <a href="#" className="text-blue-500 font-semibold text-sm">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

