import React, { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBlogs } from "../context/BlogContext";

export default function Blogs() {
  const { blogs = [], loading, error, IMAGE_BASE, getImageUrl } = useBlogs();

  // Choose published items if API supplies status; otherwise show all
  const displayBlogs = useMemo(() => {
    const published = (blogs || []).filter((b) => String(b.status) === "1");
    return published.length ? published : blogs || [];
  }, [blogs]);

  const latest = useMemo(() => {
    return [...(blogs || [])].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }, [blogs]);

  const featured = displayBlogs[0] || null;
  const cards = displayBlogs.slice(1);

  const scrollerRef = useRef(null);

  const imgFor = (b) => {
    if (!b) return "";
    if (b.image_url) return b.image_url;
    if (getImageUrl) return getImageUrl(b.image);
    if (b.image) return `${IMAGE_BASE.replace(/\/$/, "")}/${String(b.image).replace(/^\/*/, "")}`;
    return "";
  };

  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8">Error loading blogs</div>;

  return (
    <div className="w-full mx-auto px-6 py-12 bg-[var(--color-bg)]">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured */}
        <div className="lg:col-span-2">
          {featured && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <div
                className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[490px] bg-center bg-cover"
                style={{ backgroundImage: `url(${imgFor(featured)})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute left-6 right-6 bottom-6">
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">Category</span>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">{featured.title}</h2>
                  <p className="mt-2 text-sm text-white/90 max-w-2xl">{featured.meta_description}</p>
                  <Link to={`/blogs/${featured.slug}`} className="mt-4 inline-block text-sm font-semibold text-white/90 bg-white/10 px-3 py-2 rounded-lg">Read more →</Link>
                </div>
              </div>
            </div>
          )}

          {/* Cards header + nav */}
          {/* <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div> */}

          {/* Cards row - horizontally scrollable on mobile, shows multiple on desktop */}
          {/* <motion.div
            ref={scrollerRef}
            className="mt-4 flex gap-4 overflow-x-auto py-2 px-1 scroll-smooth touch-pan-x"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {cards.map((b) => (
              <motion.article key={b.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[300px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md flex-shrink-0" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 210 }}>
                <Link to={`/blogs/${b.slug}`} className="block">
                  <img src={imgFor(b)} alt={b.title} className="w-full h-36 object-cover rounded-md" />
                  <span className="inline-block mt-3 bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">Category</span>
                  <h4 className="mt-2 font-semibold text-gray-900">{b.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{b.meta_description}</p>
                </Link>
              </motion.article>
            ))}
          </motion.div> */}
        </div>

        {/* Sidebar latest posts */}
        <aside>
          <h4 className="text-lg font-semibold mb-4">Latest posts</h4>
          <div className="space-y-4 max-h-[60vh] overflow-auto">
            {latest.map((b) => (
              <Link key={b.id} to={`/blogs/${b.slug}`} className="flex gap-3 items-start">
                <img src={imgFor(b)} alt={b.title} className="w-20 h-16 object-cover rounded-md" />
                <div>
                  <h5 className="font-semibold">{b.title}</h5>
                  <p className="text-sm text-gray-500">{new Date(b.created_at).toLocaleDateString()} · 10 min read</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* All latest blogs grid */}
      <div className="max-w-6xl mx-auto mt-12 px-2">
        <h3 className="text-xl font-semibold mb-4">All latest blogs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((b) => (
            <Link key={b.id} to={`/blogs/${b.slug}`} className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <img src={imgFor(b)} alt={b.title} className="w-full h-44 object-cover rounded-md" />
              <span className="inline-block mt-3 bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">Category</span>
              <h3 className="mt-2 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{b.meta_description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
