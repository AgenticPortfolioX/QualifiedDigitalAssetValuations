import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function ScopeServicesPage({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
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