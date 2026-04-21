import React from "react";
import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function Blogs() {
  const { blogs, loading, error, IMAGE_BASE, getImageUrl } = useBlogs();

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8">Error loading blogs</div>;

  const imgFor = (b) => b.image_url || getImageUrl(b.image) || "";

  return (
    <div className="w-full mx-auto px-6 py-12 bg-[var(--color-bg)]">
      <div className="w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main large highlight */}
        <div className="lg:col-span-2">
          {blogs[0] && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <img src={imgFor(blogs[0])}
                alt={blogs[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">Category</span>
                <h2 className="mt-3 text-2xl font-semibold">{blogs[0].title}</h2>
                <p className="mt-2 text-sm text-gray-600">{blogs[0].meta_description}</p>
                <Link to={`/blogs/${blogs[0].slug}`} className="mt-4 inline-block text-[13px] font-semibold text-[var(--color-primary)]">Read more →</Link>
              </div>
            </div>
          )}

          {/* Founders corner carousel - simple row */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {blogs.slice(1, 4).map((b) => (
              <Link key={b.id} to={`/blogs/${b.slug}`} className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <img src={imgFor(b)} alt={b.title} className="w-full h-36 object-cover rounded-md" />
                <span className="inline-block mt-3 bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">Category</span>
                <h3 className="mt-2 font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.meta_description}</p>
              </Link>
            ))}
          </div>

        </div>

        {/* Sidebar latest posts */}
        <aside>
          <h4 className="text-lg font-semibold mb-4">Latest post</h4>
          <div className="space-y-4">
            {blogs.slice(0, 4).map((b) => (
              <Link key={b.id} to={`/blogs/${b.slug}`} className="flex gap-3 items-start">
                <img src={imgFor(b)} alt={b.title} className="w-20 h-16 object-cover rounded-md" />
                <div>
                  <h5 className="font-semibold">{b.title}</h5>
                  <p className="text-sm text-gray-500">Aug 10 · 10 min read</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Pagination removed as requested */}
    </div>
  );
}
