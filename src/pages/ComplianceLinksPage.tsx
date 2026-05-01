import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function ComplianceLinksPage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
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