import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, FileText, Coins, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from '@formspree/react';
import { trackLeadSubmission } from "../utils/analytics";

export default function QuoteWorkflow({ onBack, setView }: { onBack: () => void; setView: (v: string) => void }) {
  const [state, handleSubmit] = useForm('xwvykawk');
  const [step, setStep] = useState(1);
  const [smsConsent, setSmsConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
    otherPurposeText: "",
    assetType: "",
    otherAssetTypeText: "",
    valuationDate: ""
  });
  
  const [isReadyForFinalSubmit, setIsReadyForFinalSubmit] = useState(false);

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => setIsReadyForFinalSubmit(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsReadyForFinalSubmit(false);
    }
  }, [step]);

  useEffect(() => {
    if (state.succeeded) {
      trackLeadSubmission({
        purpose: formData.purpose === "Other" ? formData.otherPurposeText : formData.purpose,
        assetType: formData.assetType === "Other" ? formData.otherAssetTypeText : formData.assetType,
        valuationDate: formData.valuationDate
      });
      // Automatically route to dedicated confirmation URL for customer funnel & ad conversion tracking
      setView("confirmation");
    }
  }, [state.succeeded, setView, formData]);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const canContinue = useMemo(() => {
    if (step === 1) return formData.name.length > 0 && formData.contact.length > 0;
    if (step === 2) return formData.purpose === "Other" ? formData.otherPurposeText.length > 0 : formData.purpose.length > 0;
    if (step === 3) return formData.assetType === "Other" ? formData.otherAssetTypeText.length > 0 : formData.assetType.length > 0;
    if (step === 4) return formData.valuationDate !== "" && formData.valuationDate !== "historical" && formData.valuationDate !== "yearend";
    return true;
  }, [step, formData]);

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
                placeholder="john@example.com or (248) 313-8955"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all"
                value={formData.contact}
                onChange={e => setFormData({...formData, contact: e.target.value})}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Purpose of Appraisal",
      description: "Why do you need this valuation?",
      icon: <FileText className="w-8 h-8 text-accent-blue" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "Form 8283", title: "Charitable Donation", desc: "IRS Form 8283 Compliance" },
            { id: "SDIRA", title: "Self-Directed IRA", desc: "Annual asset valuation / rollover" },
            { id: "Estate", title: "Estate & Date-of-Death", desc: "Step-up basis & probate reporting" },
            { id: "Litigation", title: "Divorce & Litigation", desc: "Court-admissible forensic appraisal" },
            { id: "Corporate", title: "Financial Reporting", desc: "GAAP / Balance sheet impairment" },
            { id: "Other", title: "Other Purpose", desc: "Specify custom appraisal scope" }
          ].map(item => (
            <div 
              key={item.id}
              onClick={() => setFormData({...formData, purpose: item.id})}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                formData.purpose === item.id 
                  ? "border-accent-blue bg-accent-blue/5 shadow-md" 
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.purpose === item.id ? "border-accent-blue bg-accent-blue" : "border-gray-300"
                }`}>
                  {formData.purpose === item.id && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </div>
          ))}

          {formData.purpose === "Other" && (
            <div className="col-span-1 md:col-span-2 mt-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Please describe your appraisal requirement</label>
              <textarea
                rows={3}
                placeholder="Explain the statutory or personal valuation need..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all text-sm"
                value={formData.otherPurposeText}
                onChange={e => setFormData({...formData, otherPurposeText: e.target.value})}
              />
            </div>
          )}
        </div>
      )
    },
    {
      title: "Asset Category",
      description: "What digital asset(s) are we evaluating?",
      icon: <Coins className="w-8 h-8 text-accent-blue" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "Bitcoin", title: "Bitcoin (BTC)", desc: "Spot holdings & multisig storage" },
            { id: "Layer 1 / Layer 2", title: "Ethereum & Major L1/L2s", desc: "ETH, SOL, AVAX, MATIC, ARB, OP" },
            { id: "DeFi / Staking", title: "Staked Assets & DeFi LPs", desc: "Liquid staking tokens, DEX liquidity pools" },
            { id: "NFTs", title: "NFTs & Digital Art", desc: "Rarity index, floor tracking, provenance" },
            { id: "Diversified Portfolio", title: "Multi-Token Portfolio", desc: "Broad basket across exchanges & wallets" },
            { id: "Other", title: "Restricted / Illiquid Tokens", desc: "SAFTs, vesting schedules, lockups" }
          ].map(item => (
            <div 
              key={item.id}
              onClick={() => setFormData({...formData, assetType: item.id})}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                formData.assetType === item.id 
                  ? "border-accent-blue bg-accent-blue/5 shadow-md" 
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.assetType === item.id ? "border-accent-blue bg-accent-blue" : "border-gray-300"
                }`}>
                  {formData.assetType === item.id && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </div>
          ))}

          {formData.assetType === "Other" && (
            <div className="col-span-1 md:col-span-2 mt-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Specify digital assets or protocols</label>
              <input
                type="text"
                placeholder="e.g. SAFT contract, private placement, DAO governance tokens..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all text-sm"
                value={formData.otherAssetTypeText}
                onChange={e => setFormData({...formData, otherAssetTypeText: e.target.value})}
              />
            </div>
          )}
        </div>
      )
    },
    {
      title: "Effective Valuation Date",
      description: "What date must the appraisal reflect?",
      icon: <Calendar className="w-8 h-8 text-accent-blue" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "current", title: "Current Date", desc: "Today's Fair Market Value" },
              { id: "yearend", title: "Year-End (Dec 31)", desc: "Annual SDIRA or tax year" },
              { id: "historical", title: "Specific Historical Date", desc: "Date of death, gift date, divorce" }
            ].map(item => (
              <div 
                key={item.id}
                onClick={() => {
                  if (item.id === "current") {
                    setFormData({...formData, valuationDate: new Date().toISOString().split('T')[0]});
                  } else {
                    setFormData({...formData, valuationDate: item.id});
                  }
                }}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  (item.id === "current" && formData.valuationDate.match(/^\d{4}-\d{2}-\d{2}$/) && formData.valuationDate === new Date().toISOString().split('T')[0]) ||
                  (item.id === "yearend" && (formData.valuationDate === "yearend" || formData.valuationDate.endsWith("-12-31"))) ||
                  (item.id === "historical" && formData.valuationDate === "historical")
                    ? "border-accent-blue bg-accent-blue/5 shadow-md" 
                    : "border-gray-100 bg-gray-50 hover:border-gray-200"
                }`}
              >
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {(formData.valuationDate === "historical" || formData.valuationDate === "yearend" || (formData.valuationDate !== "" && formData.valuationDate !== new Date().toISOString().split('T')[0])) && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Enter Exact Date</label>
              <input 
                type="date" 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all font-bold text-gray-800"
                value={formData.valuationDate.match(/^\d{4}-\d{2}-\d{2}$/) ? formData.valuationDate : ""}
                onChange={e => setFormData({...formData, valuationDate: e.target.value})}
              />
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <main className="relative min-h-screen w-screen bg-gray-50 flex flex-col items-center justify-between p-6 md:p-12 overflow-y-auto">
      {/* Top Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to QDAV
        </button>
        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Step {step} of 4
        </div>
      </div>

      {/* Main Form Box */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex-1 flex flex-col justify-between">
        <div>
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
            <motion.div 
              className="h-full bg-accent-blue"
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            {/* Hidden form fields for Formspree */}
            <input type="hidden" name="name" value={formData.name} />
            <input type="hidden" name="contact" value={formData.contact} />
            <input type="hidden" name="purpose" value={formData.purpose === "Other" ? formData.otherPurposeText : formData.purpose} />
            <input type="hidden" name="assetType" value={formData.assetType === "Other" ? formData.otherAssetTypeText : formData.assetType} />
            <input type="hidden" name="valuationDate" value={formData.valuationDate} />
            <input type="hidden" name="smsConsent" value={smsConsent ? "Yes" : "No"} />
            <input type="hidden" name="_subject" value={`New Appraisal Request from ${formData.name}`} />

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
                  onClick={() => setView("confirmation")}
                  className="px-8 py-4 bg-accent-blue text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-sm cursor-pointer"
                >
                  View Confirmation
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent-blue/10 rounded-2xl">
                      {steps[step - 1].icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 leading-tight">
                        {steps[step - 1].title}
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        {steps[step - 1].description}
                      </p>
                    </div>
                  </div>

                  {steps[step - 1].content}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Bottom Controls */}
            {!state.succeeded && (
              <div className="mt-12 flex items-center justify-between pt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors cursor-pointer text-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    disabled={!canContinue}
                    onClick={nextStep}
                    className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-xs transition-all shadow-lg cursor-pointer ${
                      canContinue 
                        ? "bg-accent-blue text-white hover:opacity-90 hover:scale-105" 
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={state.submitting || !canContinue || !isReadyForFinalSubmit}
                    className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-xs transition-all shadow-xl cursor-pointer ${
                      canContinue && isReadyForFinalSubmit
                        ? "bg-accent-green text-white hover:opacity-90 hover:scale-105"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {state.submitting ? "Submitting Scope..." : "Submit Appraisal Request"}
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Security & SMS Consent Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center space-y-4">
          <p className="text-xs text-gray-400 font-medium">
            Your data is encrypted and protected by my Security Promise.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setView("privacy")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline cursor-pointer">Privacy Policy</button>
            <button onClick={() => setView("terms")} className="text-[10px] text-gray-400 hover:text-accent-blue transition-colors uppercase font-black underline cursor-pointer">Terms of Service</button>
          </div>
          <div className="flex gap-3 items-start max-w-lg mx-auto text-left">
            <input 
              type="checkbox" 
              id="sms-consent"
              checked={smsConsent}
              onChange={e => setSmsConsent(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-accent-blue focus:ring-accent-blue cursor-pointer shrink-0"
            />
            <label htmlFor="sms-consent" className="text-[10px] text-gray-500 font-bold leading-tight cursor-pointer">
              By providing your phone number, you agree to receive text messages from Qualified Digital Asset Valuations for the purpose of valuation services and project updates. Consent is not a condition of purchase or service. Message and data rates may apply. Message frequency varies. Reply <span className="font-bold">HELP</span> for help or <span className="font-bold">STOP</span> to cancel. View our <a href="#privacy" onClick={(e) => { e.preventDefault(); setView("privacy"); }} className="text-accent-blue underline hover:opacity-80">Privacy Policy</a> and <a href="#terms" onClick={(e) => { e.preventDefault(); setView("terms"); }} className="text-accent-blue underline hover:opacity-80">Terms of Service</a>.
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
