import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function BlogPostPage({ post, onBack, setView }: { post: BlogPost; onBack: () => void; setView: (v: string) => void }) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Scroll to top
    const container = document.querySelector('main');
    if (container) container.scrollTo(0, 0);

    // Fetch and parse content
    fetch(post.path)
      .then(res => res.text())
      .then(text => {
        // Remove YAML frontmatter and trim
        const cleanContent = text.replace(/^---\s*[\s\S]*?\s*---/, '').trim();
        setContent(cleanContent);
      })
      .catch(() => setContent("Failed to load post content."));

    // Inject Schema
    let scriptElement: HTMLScriptElement | null = null;
    if (post.schema) {
      fetch(post.schema)
        .then(res => res.json())
        .then(schemaData => {
          scriptElement = document.createElement('script');
          scriptElement.id = `schema-${post.id}`;
          scriptElement.type = 'application/ld+json';
          scriptElement.text = JSON.stringify(schemaData);
          document.head.appendChild(scriptElement);
        })
        .catch(err => console.error("Schema injection failed:", err));
    }

    return () => {
      // Cleanup Schema on unmount
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
      // Also check by ID just in case the ref lost track
      const oldScript = document.getElementById(`schema-${post.id}`);
      if (oldScript) oldScript.remove();
    };
  }, [post]);

  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <Helmet>
        <title>{post.title} | QDAV Insights</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.excerpt} />
        {post.image && <meta property="twitter:image" content={post.image} />}
      </Helmet>
      
      <header className="px-6 md:px-12 py-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </header>

      <article className="px-6 md:px-12 py-12 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4">{post.date} • BY {post.author}</div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 text-gray-900">
            {post.title}
          </h1>
          {post.image && (
            <div className="rounded-[40px] overflow-hidden aspect-video shadow-2xl border border-gray-100">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div className="blog-content max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center">
            <TrendingUp className="text-accent-blue w-8 h-8" />
          </div>
          <p className="text-center text-gray-400 max-w-md">
            Qualified Digital Asset Valuations provides IRS-compliant reports for Bitcoin, Ethereum, and digital positions.
          </p>
          <button 
            onClick={() => setView("quote")}
            className="px-8 py-4 bg-accent-blue text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-sm"
          >
            Start Your Appraisal
          </button>
        </div>
      </article>

      <footer className="mt-auto px-6 md:px-12 py-12 border-t border-gray-50 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">&copy; {new Date().getFullYear()} QDAV Insights</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">
          Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.
        </p>
      </footer>
    </main>
  );
}