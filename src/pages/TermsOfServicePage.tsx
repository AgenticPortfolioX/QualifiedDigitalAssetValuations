import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function TermsOfServicePage({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
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
          
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline">Terms of Service</button>
          </div>
        </div>
      </footer>
    </main>
  );
}