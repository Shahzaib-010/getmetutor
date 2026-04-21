import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const API_BASE = "https://api-v2-admin.getmetutor.online/api";
const IMAGE_BASE = "https://api-v2-admin.getmetutor.online"; // use HTTPS to avoid mixed-content on an HTTPS site

const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImageUrl = (img) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${IMAGE_BASE.replace(/\/$/, "")}/${String(img).replace(/^\/*/, "")}`;
  };

  useEffect(() => {
    let mounted = true;
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/blogs`);
        if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
        const data = await res.json();
        // API sometimes returns { blog: [...] } or an array
        const list = Array.isArray(data) ? data : data.blog || data.data || [];
        // normalize image URLs
        const withImages = list.map((b) => ({ ...b, image_url: getImageUrl(b.image) }));
        if (mounted) setBlogs(withImages);
      } catch (e) {
        if (mounted) setError(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  const getBySlug = useCallback(
    (slug) =>
      blogs.find((b) => b.slug === slug) || blogs.find((b) => String(b.id) === String(slug)),
    [blogs]
  );

  const value = useMemo(
    () => ({ blogs, loading, error, getBySlug, IMAGE_BASE, getImageUrl }),
    [blogs, loading, error, getBySlug]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function useBlogs() {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlogs must be used within BlogProvider");
  return ctx;
}

export default BlogContext;
