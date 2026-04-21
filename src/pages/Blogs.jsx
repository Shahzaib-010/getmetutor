import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock3,
  MoveRight,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { useBlogs } from "../context/BlogContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

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

export default function Blogs() {
  const { blogs = [], loading, error, IMAGE_BASE, getImageUrl } = useBlogs();
  const [query, setQuery] = useState("");

  const displayBlogs = useMemo(() => {
    const published = blogs.filter((blog) => String(blog.status) === "1");
    return published.length ? published : blogs;
  }, [blogs]);

  const sortedBlogs = useMemo(() => {
    return [...displayBlogs].sort(
      (a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0)
    );
  }, [displayBlogs]);

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return sortedBlogs;

    return sortedBlogs.filter((blog) =>
      `${blog.title} ${blog.meta_description} ${blog.content}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query, sortedBlogs]);

  const featured = filteredBlogs[0] || null;
  const spotlightPosts = filteredBlogs.slice(1, 4);
  const remainingPosts = filteredBlogs.slice(4);
  const popularPosts = sortedBlogs.slice(0, 5);

  const imgFor = (blog) => {
    if (!blog) return "";
    if (blog.image_url) return blog.image_url;
    if (getImageUrl) return getImageUrl(blog.image);
    if (blog.image) {
      return `${IMAGE_BASE.replace(/\/$/, "")}/${String(blog.image).replace(/^\/*/, "")}`;
    }
    return "";
  };

  if (loading) {
    return (
      <div className="bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_45%,#f8fafc_100%)] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-80 animate-pulse rounded-[1.75rem] border border-slate-200 bg-white/80"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-100 bg-red-50 p-8 text-center text-red-700">
          Unable to load blogs right now. Please try again shortly.
        </div>
      </div>
    );
  }

  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,98,0,0.08),_transparent_26%),linear-gradient(180deg,#fffdf8_0%,#ffffff_40%,#f8fafc_100%)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <motion.div
          className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.4)] backdrop-blur sm:p-10 lg:p-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-amber-100/70 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                <Sparkles size={16} />
                Blog Library
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                Insights designed to be easy to explore.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Discover practical academic guidance, tutoring insights, and student-focused
                articles in a cleaner, more navigable reading experience.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <TrendingUp size={18} className="text-orange-500" />
              Modern layout, clearer hierarchy, faster scanning.
            </div>
            <label className="relative block w-full max-w-xl">
              <span className="sr-only">Search blogs</span>
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or topic"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </label>
          </div>
        </motion.div>

        {featured ? (
          <div className="mt-10 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="group overflow-hidden rounded-[1rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] lg:h-[27vw]"
            >
              <Link to={`/blogs/${featured.slug}`} className="h-[20vw]">
                <div className="relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
                  <img
                    src={imgFor(featured)}
                    alt={featured.title}
                    className="absolute inset-0 block h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <div className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                      Featured article
                    </div>
                    <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                      {featured.meta_description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                      <span>{formatDate(featured.created_at)}</span>
                      <span className="h-1 w-1 rounded-full bg-white/50" />
                      <span>{estimateReadTime(featured)}</span>
                    </div>
                    <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition group-hover:bg-orange-500 group-hover:text-white">
                      Read article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>

            <motion.aside
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Latest picks
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    Easy to jump into
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {popularPosts.map((blog, index) => (
                  <Link
                    key={blog.id}
                    to={`/blogs/${blog.slug}`}
                    className="group flex gap-4 rounded-[1.5rem] border border-slate-200 p-3 transition hover:border-orange-200 hover:bg-orange-50/40"
                  >
                    <img
                      src={imgFor(blog)}
                      alt={blog.title}
                      className="h-22 w-24 rounded-2xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        0{index + 1}
                      </div>
                      <h4 className="mt-2 line-clamp-2 text-base font-semibold text-slate-900 transition group-hover:text-orange-600">
                        {blog.title}
                      </h4>
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <Clock3 size={14} />
                        <span>{estimateReadTime(blog)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          </div>
        ) : null}

        {spotlightPosts.length > 0 ? (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                  Spotlight
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Editor-style highlights
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {spotlightPosts.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:border-orange-200"
                >
                  <Link to={`/blogs/${blog.slug}`} className="block">
                    <div className="overflow-hidden">
                      <img
                        src={imgFor(blog)}
                        alt={blog.title}
                        className="block h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <span>{formatDate(blog.created_at)}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{estimateReadTime(blog)}</span>
                      </div>
                      <h4 className="mt-4 text-xl font-semibold leading-tight text-slate-900 transition group-hover:text-orange-600">
                        {blog.title}
                      </h4>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                        {blog.meta_description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-orange-600">
                        Continue reading
                        <MoveRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                Archive
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Browse all articles
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              {filteredBlogs.length} article{filteredBlogs.length === 1 ? "" : "s"} found
            </p>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <h4 className="text-xl font-semibold text-slate-900">No posts match your search</h4>
              <p className="mt-3 text-slate-500">Try a different title, keyword, or broader topic.</p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {[featured, ...spotlightPosts, ...remainingPosts]
                .filter(Boolean)
                .map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_55px_-42px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:border-orange-200"
                  >
                    <Link to={`/blogs/${blog.slug}`} className="block">
                      <img
                        src={imgFor(blog)}
                        alt={blog.title}
                        className="block h-56 w-full object-cover"
                      />
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                          <span>{formatDate(blog.created_at)}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span>{estimateReadTime(blog)}</span>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold leading-tight text-slate-900 transition group-hover:text-orange-600">
                          {blog.title}
                        </h4>
                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                          {blog.meta_description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-orange-600">
                          Open article
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
