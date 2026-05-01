import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useForm } from '@formspree/react';
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

export default function QuoteWorkflow({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  const [state, handleSubmit] = useForm('xwvykawk');
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
              type="button"
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
              type="button"
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
              type="button"
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
                onChange={e => setFormData({...formData, valuationDate: e.target.value})}
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

          <form className="p-12" onSubmit={handleSubmit}>
            <input type="hidden" name="name" value={formData.name} />
            <input type="hidden" name="contact" value={formData.contact} />
            <input type="hidden" name="purpose" value={formData.purpose} />
            <input type="hidden" name="assetType" value={formData.assetType} />
            <input type="hidden" name="valuationDate" value={formData.valuationDate} />
            <input type="hidden" name="smsConsent" value={smsConsent ? "Yes" : "No"} />

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent-green" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Request Sent!</h2>
                <p className="text-gray-500 text-lg mb-8 max-w-md">
                  Thank you for reaching out. A qualified appraiser will review your details and contact you shortly.
                </p>
                <button 
                  type="button"
                  onClick={onBack}
                  className="px-8 py-4 bg-accent-blue text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-sm"
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <button 
                    type="button"
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
                      type={isLastStep ? "submit" : "button"}
                      onClick={isLastStep ? undefined : nextStep}
                      disabled={!canContinue || state.submitting}
                      className={`flex-1 py-5 rounded-3xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                        canContinue
                        ? "bg-accent-blue text-white hover:scale-[1.02] active:scale-[0.98]" 
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      {isLastStep ? (state.submitting ? "Sending..." : "Submit Request") : "Continue"}
                      {!isLastStep && <ChevronRight className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </motion.div>

        <div className="text-center mt-8 space-y-1">
          <p className="text-black text-sm font-black opacity-80">
            Your data is encrypted and protected by my Security Promise.
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            Qualified Digital Asset Valuations is a DBA of Renowned Value Restoration LLC
          </p>
          <p className="text-black text-[10px] font-black uppercase tracking-widest opacity-60">
            2711 Williamsburg Cir, Auburn Hills, Michigan 48326<br/>Serving clients nationwide for digital asset appraisals | Property and business valuations available in Michigan only.
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