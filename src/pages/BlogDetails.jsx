import React from "react";
import { useParams } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function BlogDetails() {
  const { slug } = useParams();
  const { getBySlug, loading, getImageUrl } = useBlogs();

  if (loading) return <div className="p-8">Loading...</div>;

  const blog = getBySlug(slug);
  if (!blog) return <div className="p-8">Blog not found</div>;

  const img = blog.image_url || getImageUrl(blog.image) || "";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <img src={img} alt={blog.title} className="w-full h-72 object-cover rounded-lg" />
      <h1 className="mt-6 text-3xl font-bold">{blog.title}</h1>
      <p className="mt-2 text-gray-600">{blog.meta_description}</p>

      <div className="mt-6 prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
