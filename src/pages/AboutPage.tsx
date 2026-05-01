import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function AboutPage({ onBack, onStart, setView }: { onBack: () => void; onStart: () => void; setView: (v: string) => void }) {
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