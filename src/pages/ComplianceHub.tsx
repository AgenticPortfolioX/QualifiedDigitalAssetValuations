import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function ComplianceHub({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
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