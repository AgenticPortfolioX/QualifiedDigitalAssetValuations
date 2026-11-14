import React, { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, Phone, Mail, FileCheck2, Clock, ShieldCheck } from "lucide-react";
import { trackConversion } from "../utils/analytics";

interface ConfirmationPageProps {
  onBack: () => void;
  setView: (v: string) => void;
}

export default function ConfirmationPage({ onBack, setView }: ConfirmationPageProps) {
  useEffect(() => {
    // Fire Google Analytics / Google Ads conversion tracking event
    trackConversion("quote_submission_confirmed", {
      event_category: "lead",
      event_label: "customer_funnel_confirmed",
      value: 1.0,
      currency: "USD"
    });
  }, []);

  return (
    <main className="relative min-h-screen w-screen bg-gray-50 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 text-center my-8"
      >
        {/* Success Icon */}
        <div className="w-24 h-24 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-accent-green" />
        </div>

        <span className="inline-block px-4 py-1.5 bg-accent-green/10 text-accent-green font-bold text-xs uppercase tracking-wider rounded-full mb-3">
          Appraisal Request Confirmed
        </span>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Request Received!
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
          Thank you for choosing Qualified Digital Asset Valuations. An IRS-qualified appraiser is reviewing your scope of work and will contact you promptly.
        </p>

        {/* Expectation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-start">
            <Clock className="w-6 h-6 text-accent-blue mb-2" />
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Turnaround</h2>
            <p className="text-sm font-bold text-gray-800 mt-1">48–72 Hours</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Expedited 24h available</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-start">
            <FileCheck2 className="w-6 h-6 text-accent-green mb-2" />
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Compliance</h2>
            <p className="text-sm font-bold text-gray-800 mt-1">USPAP Standards</p>
            <p className="text-[11px] text-gray-500 mt-0.5">IRS Form 8283 / SDIRA</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-start">
            <ShieldCheck className="w-6 h-6 text-accent-yellow mb-2" />
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Privacy Promise</h2>
            <p className="text-sm font-bold text-gray-800 mt-1">Zero Private Keys</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Read-only public ledgers</p>
          </div>
        </div>

        {/* Urgent Contact Box */}
        <div className="bg-accent-blue/5 border border-accent-blue/15 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-gray-900">Need Immediate Scoping Assistance?</h3>
            <p className="text-xs text-gray-500">Reach the QDAV appraisal desk directly:</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:2483138955"
              className="flex items-center gap-1.5 px-4 py-2 bg-accent-blue text-white rounded-xl text-xs font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              (248) 313-8955
            </a>
            <a
              href="mailto:appraisal@qdav.mba"
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent-blue" />
              Email
            </a>
          </div>
        </div>

        {/* Navigation Action */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:bg-gray-800 hover:scale-105 transition-all uppercase tracking-widest text-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to QDAV Home
        </button>
      </motion.div>
    </main>
  );
}

