import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";

import { useBlogs } from "../context/BlogContext";

function estimateReadTime(blog) {
  const contentText = String(blog?.content || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = contentText ? contentText.split(" ").length : 0;
  return `${Math.max(3, Math.ceil(wordCount / 180) || 3)} min read`;
}

function formatDate(date) {
  if (!date) return "Recently published";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogDetails() {
  const { slug } = useParams();
  const { blogs = [], getBySlug, loading, getImageUrl } = useBlogs();

  const blog = getBySlug(slug);

  const relatedBlogs = useMemo(() => {
    return blogs
      .filter((item) => item.slug !== slug && item.id !== blog?.id)
      .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
      .slice(0, 3);
  }, [blog?.id, blogs, slug]);

  if (loading) {
    return (
      <div className="px-6 py-20">
        <div className="mx-auto max-w-5xl animate-pulse space-y-6">
          <div className="h-12 w-48 rounded-full bg-slate-200" />
          <div className="h-[420px] rounded-[2rem] bg-slate-200" />
          <div className="h-10 w-2/3 rounded-xl bg-slate-200" />
          <div className="h-5 w-full rounded bg-slate-200" />
          <div className="h-5 w-11/12 rounded bg-slate-200" />
          <div className="h-5 w-10/12 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Blog not found</h1>
          <p className="mt-4 text-slate-500">
            The article you are looking for is unavailable or may have moved.
          </p>
          <Link
            to="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
          >
            <ArrowLeft size={16} />
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  const image = blog.image_url || getImageUrl(blog.image) || "";

  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(255,98,0,0.08),_transparent_24%),linear-gradient(180deg,#fffdf8_0%,#ffffff_42%,#f8fafc_100%)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-200 hover:text-orange-600"
          >
            <ArrowLeft size={16} />
            Back to blogs
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_30px_90px_-50px_rgba(15,23,42,0.38)]">
            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
              <img src={image} alt={blog.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                  Article
                </div>
                <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {blog.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
                  {blog.meta_description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <span>{formatDate(blog.created_at)}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} />
                    {estimateReadTime(blog)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_320px]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.35)] sm:p-8 lg:p-10"
          >
            <div
              className="blog-content text-[15px] leading-8 text-slate-700 [&_a]:text-orange-600 [&_a]:underline-offset-4 hover:[&_a]:underline [&_blockquote]:rounded-r-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:bg-orange-50/60 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:italic [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-slate-900 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_img]:my-8 [&_img]:rounded-[1.5rem] [&_img]:border [&_img]:border-slate-200 [&_img]:shadow-sm [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-2 [&_ol]:space-y-3 [&_p]:mt-5 [&_p]:text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:space-y-3"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.4 }}
            className="h-fit rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.32)] sm:p-6 xl:sticky xl:top-24"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              More to read
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Related articles</h2>
            <div className="mt-6 space-y-4">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  to={`/blogs/${item.slug}`}
                  className="group flex gap-4 rounded-[1.5rem] border border-slate-200 p-3 transition hover:border-orange-200 hover:bg-orange-50/40"
                >
                  <img
                    src={item.image_url || getImageUrl(item.image) || ""}
                    alt={item.title}
                    className="h-22 w-24 rounded-2xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {formatDate(item.created_at)}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-base font-semibold text-slate-900 transition group-hover:text-orange-600">
                      {item.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition group-hover:text-orange-600">
                      Open article
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
