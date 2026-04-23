/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "./data/blog-posts.json";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string | null;
  path: string;
  schema: string | null;
}

const blogPosts = blogPostsRaw as BlogPost[];

export default function App() {
  const [viewState, setViewState] = useState<"home" | "compliance" | "about" | "quote" | "scope" | "blog" | "blog-post" | "compliance-links" | "privacy" | "terms">("home");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const [viewName, postId] = hash.split('/');
      
      const validViews = ["home", "compliance", "about", "quote", "scope", "blog", "blog-post", "compliance-links", "privacy", "terms"];
      
      if (validViews.includes(viewName)) {
        setViewState(viewName as any);
        if (viewName === "blog-post" && postId) {
          setSelectedPostId(postId);
        }
      } else if (hash === "legal") {
        // Redirect old legal link to blog
        window.location.hash = "blog";
      } else {
        setViewState("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setView = (v: string) => { window.location.hash = v; };
  const view = viewState;

  if (typeof window !== "undefined") {
    (window as any).setView = setView;
  }

  if (view === "privacy") {
    return (
      <PrivacyPolicyPage onBack={() => setView("home")} setView={setView} />
    );
  }

  if (view === "terms") {
    return (
      <TermsOfServicePage onBack={() => setView("home")} setView={setView} />
    );
  }

  if (view === "blog") {
    return (
      <BlogPage 
        onBack={() => setView("home")} 
        onSelectPost={(id) => setView(`blog-post/${id}`)}
        setView={setView}
      />
    );
  }

  if (view === "blog-post") {
    const post = blogPosts.find(p => p.id === selectedPostId);
    return (
      <BlogPostPage 
        post={post || blogPosts[0]} 
        onBack={() => setView("blog")} 
        setView={setView}
      />
    );
  }

  if (view === "compliance-links") {
    return (
      <ComplianceLinksPage onBack={() => setView("home")} setView={setView} />
    );
  }

  if (view === "compliance") {
    return (
      <ComplianceHub onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />
    );
  }

  if (view === "about") {
    return (
      <AboutPage onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />
    );
  }

  if (view === "quote") {
    return (
      <QuoteWorkflow onBack={() => setView("home")} setView={setView} />
    );
  }

  if (view === "scope") {
    return (
      <ScopeServicesPage onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />
    );
  }

  return (
    <main className="relative h-screen w-screen bg-accent-blue overflow-hidden flex items-center justify-center">
      {/* Background Arc */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-[-20%] md:left-[-10%] top-[-10%] w-[140%] md:w-[70%] h-[120%] bg-accent-yellow rounded-full z-0"
      />

      <nav className="absolute top-6 md:top-8 left-6 md:left-12 z-20">
        <button 
          onClick={() => setView("about")}
          className="text-white font-medium hover:opacity-80 transition-opacity"
        >
          About
        </button>
      </nav>
      <nav className="absolute top-6 md:top-8 right-6 md:right-12 z-20">
        <button 
          onClick={() => setView("blog")}
          className="text-white font-medium hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Stay Current
        </button>
      </nav>

      <footer className="absolute bottom-6 md:bottom-8 left-6 md:left-12 z-20 flex flex-col items-start gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
              <TrendingUp className="text-accent-blue w-5 h-5" />
            </div>
            <span className="text-white font-black tracking-tight text-sm md:text-base">
              Qualified Digital Asset Valuations
            </span>
          </div>
        </div>
      </footer>
      <footer className="absolute bottom-6 md:bottom-8 right-6 md:right-12 z-20">
        <button 
          onClick={() => setView("scope")}
          className="text-white font-medium hover:opacity-80 transition-opacity cursor-pointer text-sm md:text-base text-right leading-tight"
        >
          Scope & <br /> Services
        </button>
      </footer>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between pt-[20vh] pb-24 md:py-0 gap-12 md:gap-0 h-full md:h-auto overflow-y-auto md:overflow-visible">
        
        {/* Left Text */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 text-center md:text-left mt-16 md:mt-0 relative top-12 md:top-0"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            IRS <br />
            <span className="relative inline">Qualified Valuations<motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-8px] left-0 h-1.5 bg-white"
              /></span>
          </h1>
        </motion.div>

        {/* Center Cards */}
        <div className="relative flex items-center justify-center w-[300px] sm:w-[500px] h-[400px] md:h-[600px] perspective-1000 scale-75 sm:scale-[0.85] md:scale-100 shrink-0">
          {/* Card 1 */}
          <motion.div
            animate={{
              rotateY: [-5, 5, -5],
              y: [-10, 10, -10],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-64 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 z-10 -rotate-6 transform translate-x-[-20%]"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-red" />
              <div className="w-3 h-3 rounded-full bg-accent-yellow" />
              <div className="w-3 h-3 rounded-full bg-accent-green" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
              <Coins className="w-20 h-20 text-accent-blue" />
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                Digital Assets <br />
                <span className="text-accent-blue">Appraisal</span>
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Bitcoin, Self-Directed IRA's & Digital Assets
              </p>
            </div>
            <div className="h-12 bg-gray-50 rounded-xl flex items-center px-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "80%", "80%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-accent-blue"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Compliance Hub Link */}
          <motion.button
            onClick={() => setView("compliance")}
            animate={{
              rotateY: [5, -5, 5],
              y: [10, -10, 10],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-0 w-64 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 z-20 rotate-6 transform translate-x-[20%] text-left hover:scale-105 transition-transform cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="px-3 py-1 bg-accent-yellow/20 rounded-full">
                <span className="text-[10px] font-bold text-accent-yellow uppercase tracking-wider">IRS Form 8283</span>
              </div>
              <FileText className="w-5 h-5 text-gray-400 group-hover:text-accent-blue transition-colors" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-black text-gray-900 leading-[0.9]">
                IRS <br />
                Compliant <br />
                Reports
              </h3>
              <p className="text-[10px] text-accent-blue font-bold uppercase tracking-widest animate-pulse">
                Click to Enter Hub →
              </p>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded" />
                <div className="h-2 w-3/4 bg-gray-100 rounded" />
                <div className="h-2 w-1/2 bg-gray-100 rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-accent-green/10 rounded-xl flex items-center justify-center">
                <Shield className="text-accent-green w-6 h-6" />
              </div>
              <div className="h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-accent-blue w-6 h-6" />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Right Text */}
        <motion.button 
          onClick={() => setView("quote")}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 text-center md:text-right group cursor-pointer mb-24 md:mb-0 relative bottom-12 md:bottom-0"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-white transition-colors">
            Start <br />
            <span className="relative inline">Appraisal<motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-8px] right-0 h-1.5 bg-gray-900 group-hover:bg-white transition-colors"
              /></span>
          </h1>
        </motion.button>

      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-12 h-12 bg-accent-red rounded-lg rotate-12 opacity-20"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-accent-green rounded-full opacity-20"
      />

      {/* Global Compliance Footer */}
      <div className="absolute bottom-2 left-0 right-0 z-30 flex flex-col items-center gap-2 pointer-events-none">
        <p className="text-[9px] text-white font-bold uppercase tracking-[0.2em] drop-shadow-sm">
          Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC
        </p>
        <div className="flex gap-4 pointer-events-auto">
          <button onClick={() => setView("privacy")} className="text-[9px] text-white hover:text-accent-yellow transition-colors uppercase tracking-[0.1em] font-black underline decoration-white/40">Privacy Policy</button>
          <button onClick={() => setView("terms")} className="text-[9px] text-white hover:text-accent-yellow transition-colors uppercase tracking-[0.1em] font-black underline decoration-white/40">Terms of Service</button>
        </div>
      </div>
    </main>
  );
}

function BlogPage({ onBack, onSelectPost, setView }: { onBack: () => void; onSelectPost: (id: string) => void; setView: (v: string) => void }) {
  // Show 12 newest posts
  const displayPosts = useMemo(() => blogPosts.slice(0, 12), []);

  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <header className="px-6 md:px-12 py-8 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <div className="flex items-center gap-2">
          <TrendingUp className="text-accent-blue w-6 h-6" />
          <span className="font-black text-xl tracking-tighter">Stay Current</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-16 bg-accent-blue text-white relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[120%] bg-accent-yellow rounded-full opacity-10" />
        <div className="relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tighter mb-8"
          >
            Insights <br />
            For The Digital <br />
            Asset Age.
          </motion.h2>
          <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
            Market analysis, regulatory updates, and the evolving methodology of Bitcoin and digital asset appraisal.
          </p>
        </div>
      </section>

      {/* 4x3 Grid (up to 12 posts) */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayPosts.map((post, i) => (
            <motion.button 
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelectPost(post.id)}
              className="flex flex-col text-left group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 bg-gray-100 border border-gray-100">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="text-gray-300 w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-accent-blue shadow-sm">
                  {post.date}
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 group-hover:text-accent-blue transition-colors mb-2 leading-tight tracking-tight">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.button>
          ))}
        </div>

        {displayPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em]">More analysis coming soon...</p>
          </div>
        )}
      </section>

      {/* Global Regulatory Footer (Moved from Legal) */}
      <section className="mt-auto bg-gray-900 px-6 md:px-12 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-black text-white tracking-tight">Regulatory Compliance</h4>
            <p className="text-gray-400 font-medium mb-4">View our official resources and qualified appraisal guidelines.</p>
            <button 
              onClick={() => setView("compliance-links")}
              className="px-6 py-3 bg-accent-yellow text-gray-900 font-black rounded-xl hover:scale-105 transition-transform text-sm uppercase tracking-widest"
            >
              Compliance Resources
            </button>
          </div>
          <div className="flex flex-col items-end text-right">
             <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Digital assets are highly volatile. <br />
              All valuations are professional opinions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogPostPage({ post, onBack, setView }: { post: BlogPost; onBack: () => void; setView: (v: string) => void }) {
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
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} QDAV Insights</p>
      </footer>
    </main>
  );
}

function ComplianceLinksPage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  const resources = [
    { name: "IRS Publication 561", url: "https://www.irs.gov/publications/p561", desc: "Determining the Value of Donated Property" },
    { name: "IRS Notice 2014-21", url: "https://www.irs.gov/pub/irs-drop/n-14-21.pdf", desc: "IRS Guidance on Virtual Currency" },
    { name: "USPAP Standards", url: "https://www.appraisalfoundation.org/", desc: "Uniform Standards of Professional Appraisal Practice" },
    { name: "Digital Asset Glossary", url: "#", desc: "Common terms used in valuation reports" }
  ];

  return (
    <main className="relative h-screen w-screen bg-gray-50 overflow-y-auto flex flex-col">
      <header className="px-6 md:px-12 py-8 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <div className="flex items-center gap-2">
          <Scale className="text-accent-blue w-6 h-6" />
          <span className="font-black text-xl tracking-tighter uppercase">Compliance Resources</span>
        </div>
      </header>

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
         <div className="mb-16">
          <div className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4">Official Documentation</div>
          <h2 className="text-5xl font-black tracking-tighter text-gray-900">Regulatory Clarity</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, i) => (
            <a 
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-accent-blue hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <FileText className="w-8 h-8 text-accent-blue" />
                <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">{resource.name}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{resource.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-auto px-6 md:px-12 py-12 text-center text-gray-400 font-bold uppercase tracking-widest text-[10px]">
        Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC
      </footer>
    </main>
  );
}

function AboutPage({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-12 py-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-blue font-bold hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        <div className="flex items-center gap-3">
          <Lock className="text-accent-blue w-6 h-6" />
          <h1 className="text-xl font-black text-gray-900 tracking-tight uppercase">
            The "Security & Privacy" Promise
          </h1>
        </div>
        <div className="w-24" /> {/* Spacer */}
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-6 pb-5 bg-accent-blue text-white relative">
        <div className="absolute right-[-5%] top-[-10%] w-[40%] h-[120%] bg-accent-yellow rounded-full opacity-20 z-0" />
        <div className="relative z-10 max-w-6xl">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            Your Financial <br />
            Data, Secured <br />
            By Design.
          </motion.h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            I understand the sensitivity of your financial records. 
            My process is built on a foundation of trust, confidentiality, and technical security.
          </p>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center">
            <Shield className="text-accent-blue w-8 h-8" />
          </div>
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter">Data Handling Policy</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-900">I do not require private keys.</span> Ever. 
              My appraisal process relies solely on public keys, transaction histories, and account statements.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Secure Data & Delivery</h4>
              <p className="text-gray-600">
                Sensitive documents are handled with the highest security standards. 
                Appraisals are typically delivered via secure email, with encrypted, SOC 2 compliant portal delivery available upon request. 
                Your data is never stored on unencrypted local drives.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center">
            <UserCheck className="text-accent-green w-8 h-8" />
          </div>
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter">Confidentiality</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              The <span className="font-bold text-gray-900">Appraiser-Client relationship</span> is a professional bond 
              protected by strict ethical standards. I treat your financial data with the same level of 
              confidentiality as a legal or medical professional.
            </p>
            <ul className="space-y-4">
              {[
                "Strict non-disclosure agreements (NDAs) available",
                "No third-party data sharing or marketing",
                "Encrypted data storage and secure deletion protocols"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <Check className="text-accent-green w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Pedigree Section */}
      <section className="px-6 md:px-12 py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-2 bg-accent-yellow text-gray-900 font-black text-sm uppercase tracking-widest rounded-lg">
                Professional Pedigree
              </div>
              <h3 className="text-5xl font-black tracking-tighter leading-none">
                Credentials <br />
                Are My Product.
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                In a field often viewed with skepticism, I provide the institutional 
                credibility required for federal compliance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4">
                  <GraduationCap className="text-accent-yellow w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">MBA</h4>
                    <p className="text-gray-400 text-sm">University of Michigan</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-accent-yellow w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">USPAP Qualified</h4>
                    <p className="text-gray-400 text-sm">IRS Standard Compliant</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-accent-yellow w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">CAMS Certified</h4>
                    <p className="text-gray-400 text-sm">Anti-Money Laundering Specialist</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <History className="text-accent-yellow w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">13+ Years</h4>
                    <p className="text-gray-400 text-sm">Digital Asset Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center mb-8">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black mb-6">Bridging the Gap</h4>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  With <span className="text-white font-bold">10 years in banking and financial operations</span>, 
                  I understand TradFi, compliance, reporting, and regulatory expectations.
                </p>
                <p>
                  With <span className="text-white font-bold">13 years in digital assets</span> I deeply 
                  understand the web3 ecosystem. I translate complex blockchain data into the 
                  standardized financial reports that federal institutions demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto">
            <Phone className="text-accent-blue w-10 h-10" />
          </div>
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter">Contact & Support</h3>
          <div className="space-y-4">
            <p className="text-2xl font-black text-accent-blue">(248) 955-1491</p>
            <p className="text-gray-500 font-medium max-w-lg mx-auto">
              By providing your phone number, you are consenting to receive text messages from Qualified Digital Asset Valuations. You can opt-out at any time by texting <span className="font-bold">STOP</span>. For help, text <span className="font-bold">HELP</span>. Message and data rates may apply. Message frequency varies. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </div>
          <button 
            onClick={onStart}
            className="px-6 md:px-12 py-6 bg-accent-blue text-white font-black rounded-3xl shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Start Appraisal
          </button>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gray-50 px-6 md:px-12 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-3xl font-black text-gray-900 tracking-tight">Expertise You Can Trust.</h4>
            <p className="text-gray-500 font-medium">Qualified appraisals for a complex digital world.</p>
            <p className="text-black text-sm font-black">Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.</p>
            <p className="text-black text-[10px] font-black uppercase tracking-widest mt-1">2711 Williamsburg Cir, Auburn Hills, Michigan 48326</p>
            <div className="flex gap-4 mt-4">
              <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
              <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
            </div>
          </div>
          <button 
            onClick={onStart}
            className="bg-accent-blue text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
          >
            Start Your Valuation
          </button>
        </div>
      </footer>
    </main>
  );
}

function ScopeServicesPage({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-12 py-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-blue font-bold hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        <div className="flex items-center gap-3">
          <LayoutGrid className="text-accent-blue w-6 h-6" />
          <h1 className="text-xl font-black text-gray-900 tracking-tight uppercase">
            Professional Scope & Services
          </h1>
        </div>
        <div className="w-24" /> {/* Spacer */}
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-5 bg-accent-blue text-white relative">
        <div className="relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter mb-8"
          >
            Specialized <br />
            Valuation <br />
            Expertise.
          </motion.h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            From institutional-grade protocols to complex DeFi positions, I provide 
            the specialized expertise required to value the most sophisticated digital assets.
          </p>
        </div>
        <div className="absolute right-[-5%] top-[-10%] w-[40%] h-[120%] bg-accent-yellow rounded-full opacity-20" />
      </section>

      {/* Digital Asset Scope Section */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">1. Digital Asset Scope</h3>
          <p className="text-lg text-gray-500 font-medium">My technical expertise spans the entire digital asset ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Layer 1 & 2 Protocols",
              desc: "Institutional-grade valuations for primary networks including Bitcoin, Ethereum, Solana, and their scaling solutions.",
              icon: <Layers className="text-accent-blue w-6 h-6" />,
              bg: "bg-accent-blue/5"
            },
            {
              title: "DeFi Positions",
              desc: "Complex analysis of Liquidity Provider (LP) tokens, staked assets, and yield-bearing instruments across major DEXs.",
              icon: <Zap className="text-accent-yellow w-6 h-6" />,
              bg: "bg-accent-yellow/5"
            },
            {
              title: "NFTs & Collectibles",
              desc: "Sophisticated valuations based on floor price aggregation, rarity metrics, and verified historical sales data.",
              icon: <Image className="text-accent-red w-6 h-6" />,
              bg: "bg-accent-red/5"
            },
            {
              title: "Restricted Assets",
              desc: "Specialized handling of SAFTs, vesting tokens, and assets subject to contractual or regulatory lock-up periods.",
              icon: <Lock className="text-accent-green w-6 h-6" />,
              bg: "bg-accent-green/5"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[32px] ${item.bg} border border-transparent hover:border-gray-100 transition-all`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialized Service Tiers Section */}
      <section className="px-6 md:px-12 py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">2. Specialized Service Tiers</h3>
            <p className="text-lg text-gray-500 font-medium">Tailored solutions for specific regulatory and legal requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Self-Directed IRAs (SDIRA)",
                desc: "Meeting the mandatory annual valuation requirements for alternative digital assets held within retirement accounts. I provide the necessary documentation for custodians and IRS reporting.",
                icon: <History className="text-accent-blue w-6 h-6" />,
                tag: "Annual Compliance"
              },
              {
                title: "Estate & Date-of-Death Valuations",
                desc: "Providing precise historical pricing for tax and inheritance purposes. I reconstruct market conditions for any specific historical timestamp to ensure accurate step-up in basis reporting.",
                icon: <Calendar className="text-accent-yellow w-6 h-6" />,
                tag: "Tax & Inheritance"
              },
              {
                title: "Charitable Donations",
                desc: "Delivering the required 'Qualified Appraisal' documentation for non-cash charitable contributions of digital assets exceeding $5,000 in value, as mandated by IRS Section 170.",
                icon: <Heart className="text-accent-red w-6 h-6" />,
                tag: "IRS Section 170"
              },
              {
                title: "Divorce & Litigation Support",
                desc: "Forensic-level valuation and expert witness testimony for asset division. I provide defensible reports that withstand cross-examination in legal proceedings.",
                icon: <Gavel className="text-accent-green w-6 h-6" />,
                tag: "Legal Support"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">
                    {item.tag}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-accent-blue p-16 rounded-[48px] text-white shadow-2xl relative">
          <div className="relative z-10">
            <h4 className="text-4xl font-black tracking-tight mb-2">Ready to Proceed?</h4>
            <p className="text-white/70 font-medium text-lg">Select your service tier and start your qualified appraisal today.</p>
            <p className="text-white/70 text-sm font-bold mt-4">Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.</p>
            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-1">2711 Williamsburg Cir, Auburn Hills, Michigan 48326</p>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setView("privacy")} className="text-[10px] text-white/50 hover:text-white transition-colors uppercase font-black underline">Privacy Policy</button>
              <button onClick={() => setView("terms")} className="text-[10px] text-white/50 hover:text-white transition-colors uppercase font-black underline">Terms of Service</button>
            </div>
          </div>
          <button 
            onClick={onStart}
            className="relative z-10 bg-white text-accent-blue px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl text-lg"
          >
            Start Your Valuation
          </button>
          <div className="absolute right-[-10%] bottom-[-20%] w-[40%] h-[150%] bg-accent-yellow rounded-full opacity-20" />
        </div>
      </footer>
    </main>
  );
}

function ComplianceHub({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-12 py-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-blue font-bold hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        <div className="flex items-center gap-3">
          <Shield className="text-accent-green w-6 h-6" />
          <h1 className="text-xl font-black text-gray-900 tracking-tight uppercase text-center">
            The "Qualified Appraiser" <br className="md:hidden" /> Compliance Hub
          </h1>
        </div>
        <div className="w-24" /> {/* Spacer */}
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-5 bg-accent-blue text-white relative">
        <div className="relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter mb-8"
          >
            Audit Protection <br />
            Through Federal <br />
            Compliance.
          </motion.h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            My reports are engineered to meet the highest federal standards, 
            ensuring your digital asset valuations stand up to the most rigorous IRS scrutiny.
          </p>
        </div>
        <div className="absolute right-[-5%] top-[-10%] w-[40%] h-[120%] bg-accent-yellow rounded-full opacity-20" />
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        
        {/* USPAP */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="w-16 h-16 bg-accent-red/10 rounded-2xl flex items-center justify-center">
            <Scale className="text-accent-red w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 leading-tight">
            USPAP Compliance <br /> Statement
          </h3>
          <p className="text-gray-600 leading-relaxed">
            All appraisals are performed in strict accordance with the 
            <span className="font-bold text-gray-900"> Uniform Standards of Professional Appraisal Practice (USPAP)</span>. 
            This ensures objectivity, impartiality, and the highest level of professional ethics in every valuation I produce.
          </p>
          <div className="flex items-center gap-2 text-accent-green font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Certified Standards
          </div>
        </motion.div>

        {/* IRS Section 170 */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="w-16 h-16 bg-accent-yellow/10 rounded-2xl flex items-center justify-center">
            <FileText className="text-accent-yellow w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 leading-tight">
            IRS Section 170 <br /> Substantiation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            My appraisals meet the <span className="font-bold text-gray-900">"Qualified Appraisal"</span> requirements 
            under IRS guidelines for non-cash charitable contributions and IRA valuations. 
            I provide the necessary documentation to satisfy IRS Section 170 substantiation rules.
          </p>
          <div className="flex items-center gap-2 text-accent-green font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Audit-Ready Documentation
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center">
            <BarChart3 className="text-accent-blue w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 leading-tight">
            Methodology <br /> Overview
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I determine Fair Market Value (FMV) using <span className="font-bold text-gray-900">spot price aggregation</span>, 
            liquidity analysis, and <span className="font-bold text-gray-900">"highest and best use"</span> principles. 
            My methodology accounts for market volatility and exchange-specific depth to ensure accuracy.
          </p>
          <div className="flex items-center gap-2 text-accent-green font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Data-Driven Accuracy
          </div>
        </motion.div>

      </section>

      {/* CTA Footer */}
      <footer className="mt-auto bg-gray-50 px-6 md:px-12 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-3xl font-black text-gray-900 tracking-tight">Protect Your Assets.</h4>
            <p className="text-gray-500 font-medium">Get a qualified appraisal that stands up to the IRS.</p>
            <p className="text-black text-sm font-black mt-2">Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.</p>
            <p className="text-black text-[10px] font-black uppercase tracking-widest mt-1">2711 Williamsburg Cir, Auburn Hills, Michigan 48326</p>
            <div className="flex gap-4 mt-4">
              <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
              <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
            </div>
          </div>
          <button 
            onClick={onStart}
            className="bg-accent-blue text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
          >
            Start Your Valuation
          </button>
        </div>
      </footer>
    </main>
  );
}

function QuoteWorkflow({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  const [step, setStep] = useState(1);
  const [smsConsent, setSmsConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
    assetType: "",
    valuationDate: "current"
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    {
      title: "Contact Information",
      description: "How can I reach you?",
      icon: <User className="w-8 h-8 text-accent-blue" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email or Phone</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="text" 
                placeholder="john@example.com or (248) 955-1491"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all"
                value={formData.contact}
                onChange={e => setFormData({...formData, contact: e.target.value})}
              />
            </div>
            <div className="flex gap-3 items-start mt-4">
              <input 
                type="checkbox" 
                id="sms-consent"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-accent-blue focus:ring-accent-blue cursor-pointer shrink-0"
              />
              <label htmlFor="sms-consent" className="text-[10px] text-gray-500 font-bold leading-tight cursor-pointer text-left">
                By providing your phone number, you agree to receive text messages from Qualified Digital Asset Valuations for the purpose of valuation services and project updates. Consent is not a condition of purchase or service. Message and data rates may apply. Message frequency varies. Reply <span className="font-bold">HELP</span> for help or <span className="font-bold">STOP</span> to cancel. View our <a href="#privacy" onClick={(e) => { e.preventDefault(); setView("privacy"); }} className="text-accent-blue underline hover:opacity-80">Privacy Policy</a> and <a href="#terms" onClick={(e) => { e.preventDefault(); setView("terms"); }} className="text-accent-blue underline hover:opacity-80">Terms of Service</a>.
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Purpose of Appraisal",
      description: "Why do you need this valuation?",
      icon: <FileText className="w-8 h-8 text-accent-yellow" />,
      content: (
        <div className="grid grid-cols-2 gap-4">
          {["Tax", "IRA", "Legal", "Insurance"].map(purpose => (
            <button
              key={purpose}
              onClick={() => setFormData({...formData, purpose})}
              className={`p-6 rounded-3xl border-2 transition-all text-left flex flex-col gap-2 ${
                formData.purpose === purpose 
                ? "border-accent-blue bg-accent-blue/5" 
                : "border-gray-50 bg-white hover:border-gray-200"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                formData.purpose === purpose ? "bg-accent-blue text-white" : "bg-gray-50 text-gray-400"
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">{purpose}</span>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Asset Type",
      description: "What am I valuing?",
      icon: <Coins className="w-8 h-8 text-accent-red" />,
      content: (
        <div className="space-y-4">
          {[
            { id: "Standard Token", label: "Standard Token", desc: "BTC, ETH, ERC-20, etc." },
            { id: "NFT", label: "NFT", desc: "Digital Art, Collectibles, etc." },
            { id: "Complex DeFi", label: "Complex DeFi", desc: "LP Tokens, Staking, Vaults, etc." }
          ].map(type => (
            <button
              key={type.id}
              onClick={() => setFormData({...formData, assetType: type.id})}
              className={`w-full p-6 rounded-3xl border-2 transition-all text-left flex items-center gap-4 ${
                formData.assetType === type.id 
                ? "border-accent-blue bg-accent-blue/5" 
                : "border-gray-50 bg-white hover:border-gray-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                formData.assetType === type.id ? "bg-accent-blue text-white" : "bg-gray-50 text-gray-400"
              }`}>
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{type.label}</div>
                <div className="text-xs text-gray-500">{type.desc}</div>
              </div>
              {formData.assetType === type.id && <CheckCircle2 className="ml-auto text-accent-blue w-6 h-6" />}
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Valuation Date",
      description: "When do you need the FMV for?",
      icon: <Calendar className="w-8 h-8 text-accent-green" />,
      content: (
        <div className="space-y-4">
          {[
            { id: "current", label: "Current FMV", desc: "Valuation as of today" },
            { id: "historical", label: "Historical Date", desc: "Specific date in the past" },
            { id: "yearend", label: "Year End (Dec 31)", desc: "Standard calendar year-end valuation" }
          ].map(date => (
            <button
              key={date.id}
              onClick={() => setFormData({...formData, valuationDate: date.id})}
              className={`w-full p-6 rounded-3xl border-2 transition-all text-left flex items-center gap-4 ${
                formData.valuationDate === date.id 
                ? "border-accent-blue bg-accent-blue/5" 
                : "border-gray-50 bg-white hover:border-gray-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                formData.valuationDate === date.id ? "bg-accent-blue text-white" : "bg-gray-50 text-gray-400"
              }`}>
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{date.label}</div>
                <div className="text-xs text-gray-500">{date.desc}</div>
              </div>
              {formData.valuationDate === date.id && <CheckCircle2 className="ml-auto text-accent-blue w-6 h-6" />}
            </button>
          ))}
          {(formData.valuationDate === "historical" || formData.valuationDate === "yearend") && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-4"
            >
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">
                {formData.valuationDate === "yearend" ? "Select Year" : "Select Date"}
              </label>
              <input 
                type={formData.valuationDate === "yearend" ? "number" : "date"} 
                placeholder={formData.valuationDate === "yearend" ? "e.g. 2023" : ""}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all"
              />
            </motion.div>
          )}
        </div>
      )
    }
  ];

  const currentStep = steps[step - 1];
  const isLastStep = step === steps.length;
  const canContinue = step === 1 ? (formData.name && formData.contact) : 
                      step === 2 ? formData.purpose :
                      step === 3 ? formData.assetType : true;

  return (
    <main className="relative h-screen w-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-blue" />
      <div className="absolute top-[40%] left-[-10%] w-[60%] h-[80%] bg-accent-yellow rounded-full opacity-10 blur-3xl" />
      
      <div className="relative z-10 w-full max-w-2xl px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="h-2 w-full bg-gray-100 flex">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 transition-all duration-500 ${i < step ? "bg-accent-blue" : "bg-transparent"}`}
              />
            ))}
          </div>

          <div className="p-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={step === 1 ? onBack : prevStep}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>
              <div className="text-center">
                <div className="text-[10px] font-black text-accent-blue uppercase tracking-[0.2em] mb-1">Step {step} of {steps.length}</div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{currentStep.title}</h2>
              </div>
              <div className="w-12" />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="mb-4">{currentStep.icon}</div>
                  <p className="text-gray-500 font-medium">{currentStep.description}</p>
                </div>
                {currentStep.content}
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex gap-4">
                <button 
                  onClick={isLastStep ? onBack : nextStep}
                  disabled={!canContinue}
                  className={`flex-1 py-5 rounded-3xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                    canContinue
                    ? "bg-accent-blue text-white hover:scale-[1.02] active:scale-[0.98]" 
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {isLastStep ? "Submit Request" : "Continue"}
                  {!isLastStep && <ChevronRight className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8 space-y-1">
          <p className="text-black text-sm font-black opacity-80">
            Your data is encrypted and protected by my Security Promise.
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function PrivacyPolicyPage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3">
            <Shield className="text-accent-blue w-6 h-6" />
            <span className="font-black text-gray-900 tracking-tight">Privacy Policy</span>
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 pt-32 pb-20 bg-accent-blue">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-white tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg font-medium">How we protect your data and respect your privacy.</p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Information Collection</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us when you request a valuation quote, contact us, or otherwise communicate with us. This may include your name, email address, phone number, and details about the digital assets you wish to have valued. 
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We collect phone numbers specifically for the purpose of providing you with price estimates, project status updates, and leading follow-up communications regarding your requested valuation services.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Mobile Messaging</h2>
              <p className="text-gray-900 font-bold leading-relaxed">
                Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Use of Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, including to process your valuation requests and communicate with you about your appraisals. Phone numbers are used only for communication regarding the specific valuation services requested.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-black text-sm font-black">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.
          </p>
          <p className="text-black text-[10px] font-bold uppercase tracking-widest opacity-40">
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TermsOfServicePage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
          )}
        </div>
      )
    }
  ];

  const currentStep = steps[step - 1];
  const isLastStep = step === steps.length;
  const canContinue = step === 1 ? (formData.name && formData.contact) : 
                      step === 2 ? formData.purpose :
                      step === 3 ? formData.assetType : true;

  return (
    <main className="relative h-screen w-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-blue" />
      <div className="absolute top-[40%] left-[-10%] w-[60%] h-[80%] bg-accent-yellow rounded-full opacity-10 blur-3xl" />
      
      <div className="relative z-10 w-full max-w-2xl px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="h-2 w-full bg-gray-100 flex">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 transition-all duration-500 ${i < step ? "bg-accent-blue" : "bg-transparent"}`}
              />
            ))}
          </div>

          <div className="p-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={step === 1 ? onBack : prevStep}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>
              <div className="text-center">
                <div className="text-[10px] font-black text-accent-blue uppercase tracking-[0.2em] mb-1">Step {step} of {steps.length}</div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{currentStep.title}</h2>
              </div>
              <div className="w-12" />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="mb-4">{currentStep.icon}</div>
                  <p className="text-gray-500 font-medium">{currentStep.description}</p>
                </div>
                {currentStep.content}
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex gap-4">
                <button 
                  onClick={isLastStep ? onBack : nextStep}
                  disabled={!canContinue}
                  className={`flex-1 py-5 rounded-3xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                    canContinue
                    ? "bg-accent-blue text-white hover:scale-[1.02] active:scale-[0.98]" 
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {isLastStep ? "Submit Request" : "Continue"}
                  {!isLastStep && <ChevronRight className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8 space-y-1">
          <p className="text-black text-sm font-black opacity-80">
            Your data is encrypted and protected by my Security Promise.
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function PrivacyPolicyPage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3">
            <Shield className="text-accent-blue w-6 h-6" />
            <span className="font-black text-gray-900 tracking-tight">Privacy Policy</span>
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 pt-32 pb-20 bg-accent-blue">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-white tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg font-medium">How we protect your data and respect your privacy.</p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Mobile Messaging</h2>
              <p className="text-gray-900 font-bold leading-relaxed">
                Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Information Collection & Use</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect and use phone numbers specifically for the purpose of providing valuation services, project status updates, and leading follow-up communications regarding your requested appraisals.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 uppercase tracking-tight">No Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                All mobile opt-in data is used exclusively for the specific valuation services requested by the user. We do not use mobile information for marketing or promotional purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-black text-sm font-black">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.
          </p>
          <p className="text-black text-[10px] font-bold uppercase tracking-widest opacity-40">
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TermsOfServicePage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-white overflow-y-auto flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3">
            <FileText className="text-accent-blue w-6 h-6" />
            <span className="font-black text-gray-900 tracking-tight">Terms of Service</span>
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 pt-32 pb-20 bg-accent-blue">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-white tracking-tight mb-6">Terms of Service</h1>
          <p className="text-white/70 text-lg font-medium">The rules and guidelines for using our valuation services.</p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Service Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Qualified Digital Asset Valuations provides IRS-qualified appraisal services for digital assets, including cryptocurrencies, NFTs, and DeFi positions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for providing accurate and complete information regarding the assets to be valued. Any valuation provided is based on the information you supply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Our valuations are professional opinions based on available market data. We are not liable for any financial decisions made based on these valuations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight underline">SMS/MMS Mobile Messaging</h2>
              
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Program Name</h3>
                  <p className="text-gray-600 leading-relaxed">
                    QDAV Notifications
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">2. Program Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Messages include project updates, valuation delivery notifications, and scheduling alerts.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Message Frequency and Rates</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Message frequency varies. Message and data rates may apply.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">4. Support (HELP)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For support, text <span className="font-bold">HELP</span> to (248) 955-1491 or email support@qdav.mba.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">5. Opt-Out (STOP)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may opt-out at any time by texting <span className="font-bold">STOP</span> to (248) 955-1491.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">6. Carrier Disclaimer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">7. Data Sharing & Privacy</h3>
                  <p className="text-gray-900 font-bold leading-relaxed italic">
                    "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-black text-sm font-black">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC.
          </p>
          <p className="text-black text-[10px] font-bold uppercase tracking-widest opacity-40">
            2711 Williamsburg Circle, Auburn Hills, Michigan 48326
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
