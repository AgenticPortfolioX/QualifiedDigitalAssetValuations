import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function BlogPage({ onBack, onSelectPost, setView }: { onBack: () => void; onSelectPost: (id: string) => void; setView: (v: string) => void }) {
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