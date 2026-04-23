import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";

import { useBlogs } from "../../context/BlogContext";
import Button from "../ui/Button";

const WHATSAPP_URL =
  "https://wa.me/923160479437?text=" +
  encodeURIComponent("Hi, I’m interested in Get Me Tutor tutoring. Can you share more details?");

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
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogsPreviewSection() {
  const { blogs = [], loading, getImageUrl } = useBlogs();

  const latestBlogs = useMemo(() => {
    const published = blogs.filter((blog) => String(blog.status) === "1");
    const source = published.length ? published : blogs;

    return [...source]
      .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
      .slice(0, 4);
  }, [blogs]);

  if (loading) {
    return (
      <section className="bg-[var(--color-bg)] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-80 animate-pulse rounded-[1.75rem] border border-slate-200 bg-white"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!latestBlogs.length) {
    return null;
  }

  return (
    <section className="bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_40%,#f8fafc_100%)] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              <Sparkles size={16} />
              From the blog
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helpful reads for parents and students.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A quick preview of the latest guidance, study insights, and academic support
              articles from GetMeTutor.
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
          >
            Show more
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" text="Contact Us" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {latestBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_55px_-42px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:border-orange-200"
            >
              <Link to={`/blogs/${blog.slug}`} className="flex h-full flex-col">
                <img
                  src={blog.image_url || getImageUrl(blog.image) || ""}
                  alt={blog.title}
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>{formatDate(blog.created_at)}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {estimateReadTime(blog)}
                    </span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 text-xl font-semibold leading-tight text-slate-900 transition group-hover:text-orange-600">
                    {blog.title}
                  </h3>
                  <p className="mt-3 flex-1 line-clamp-3 text-sm leading-7 text-slate-600">
                    {blog.meta_description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-orange-600">
                    Read article
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
