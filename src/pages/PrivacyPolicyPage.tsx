import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function PrivacyPolicyPage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
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
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326<br/>Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.
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