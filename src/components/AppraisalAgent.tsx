import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageSquareQuote,
  ChevronDown
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  actionText?: string;
  actionView?: string;
}

interface AppraisalAgentProps {
  setView: (v: string) => void;
}

const KNOWLEDGE_BASE = [
  {
    triggers: ["donate", "donation", "8283", "charity", "5000", "5,000", "nonprofit", "gifting"],
    answer: "Under Internal Revenue Code Section 170(f)(11) and Treas. Reg. § 1.170A-17, any noncash digital asset contribution exceeding $5,000 strictly requires a formal Qualified Appraisal prepared and signed by an independent Qualified Appraiser, alongside completed IRS Form 8283 Section B.",
    actionText: "Start Form 8283 Appraisal Quote",
    actionView: "quote"
  },
  {
    triggers: ["exchange", "coinbase", "koinly", "cointracker", "spot price", "coinmarketcap", "ticker"],
    answer: "IRS Chief Counsel Advice (CCA 202302012) specifically established that exchange spot tickers or automated portfolio/tax software reports do NOT satisfy the statutory qualified appraisal requirement for deductions over $5,000. Cryptocurrency is treated as property, not publicly traded securities.",
    actionText: "Review Compliance Precedents",
    actionView: "compliance"
  },
  {
    triggers: ["sdira", "ira", "retirement", "5498", "custodian", "alto", "choice", "itrust", "kingdom"],
    answer: "SDIRA custodians require an annual independent Fair Market Value (FMV) appraisal to complete IRS Form 5498 reporting and substantiate account valuation without risking IRA disqualification or prohibited transaction scrutiny.",
    actionText: "Explore SDIRA Services",
    actionView: "scope"
  },
  {
    triggers: ["estate", "death", "inheritance", "inherit", "706", "step up", "step-up", "basis", "executor"],
    answer: "Under IRC § 1014, inherited digital assets receive a step-up in basis to fair market value on the decedent's date of death. Our appraisals provide forensic blockchain pricing defensible on IRS Form 706 estate tax returns.",
    actionText: "Start Estate Valuation",
    actionView: "quote"
  },
  {
    triggers: ["turnaround", "time", "speed", "fast", "timeline", "how long", "deadline"],
    answer: "Standard qualified digital asset appraisal reports are typically delivered within 48 to 72 hours following receipt of public wallet records. Expedited 24-hour turnaround is also available for urgent tax filing deadlines.",
    actionText: "Request Expedited Quote",
    actionView: "quote"
  },
  {
    triggers: ["fee", "cost", "price", "pricing", "rate", "quote", "how much"],
    answer: "Appraisal fees vary based on portfolio complexity (e.g., standard Layer-1 assets like Bitcoin vs. illiquid tokens, DeFi LP positions, or multi-wallet holdings). Contact us directly or submit your scope for a transparent, fixed-fee quote.",
    actionText: "Get an Instant Quote",
    actionView: "quote"
  },
  {
    triggers: ["key", "private key", "security", "seed phrase", "safe"],
    answer: "QDAV NEVER requests or accepts private keys or seed phrases. Our appraisal analysis is conducted entirely using read-only public blockchain addresses, transaction hashes, and custodian statements.",
    actionText: "Read Security & Privacy Policy",
    actionView: "about"
  },
  {
    triggers: ["contact", "phone", "email", "call", "human", "speak"],
    answer: "You can reach our appraisal team directly by phone at (248) 955-1491 or via email at appraisal@qdav.mba. We're based in the US and respond promptly.",
    actionText: "Submit Appraisal Scope",
    actionView: "quote"
  }
];

const QUICK_PROMPTS = [
  "Do I need an appraisal for donating >$5,000 in crypto?",
  "Can I use exchange prices instead of an appraisal?",
  "What is required for SDIRA crypto valuation?",
  "How are estate date-of-death assets valued?"
];

export default function AppraisalAgent({ setView }: AppraisalAgentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Welcome to QDAV. I'm your AI Appraisal & Compliance Assistant. Ask me anything about IRS rules (Form 8283, SDIRAs, Estate Valuations, USPAP), or let me guide you to the right appraisal quote."
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput("");

    setTimeout(() => {
      const lower = query.toLowerCase();
      const matched = KNOWLEDGE_BASE.find(kb => 
        kb.triggers.some(t => lower.includes(t))
      );

      let botResponse: Message;

      if (matched) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: matched.answer,
          actionText: matched.actionText,
          actionView: matched.actionView
        };
      } else {
        botResponse = {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "QDAV delivers USPAP-compliant, IRS-defensible valuations for Bitcoin, digital tokens, DeFi, and NFTs. To get specific guidance for your exact situation, initiate an appraisal scope or speak directly with an appraiser.",
          actionText: "Start Appraisal Quote",
          actionView: "quote"
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="agent-launcher"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open QDAV AI Assistant"
            className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/20 hover:bg-gray-800 transition-all cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue text-white shadow-md">
              <Bot className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
              </span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-black tracking-wider uppercase flex items-center gap-1.5 text-accent-yellow">
                <Sparkles className="w-3.5 h-3.5" />
                QDAV AI Assistant
              </div>
              <div className="text-[11px] text-gray-300 font-medium">IRS Compliance & Valuation</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="agent-modal"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gray-900 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-accent-blue flex items-center justify-center text-white shadow">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm tracking-tight text-white">QDAV AI Advisor</span>
                    <span className="text-[10px] bg-accent-green/20 text-accent-green px-1.5 py-0.5 rounded-full font-bold">
                      USPAP / IRS
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">Institutional Digital Asset Appraisal</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800 cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center justify-between text-[11px] text-gray-600">
              <a href="tel:2489551491" className="flex items-center gap-1 hover:text-accent-blue font-semibold">
                <Phone className="w-3 h-3 text-accent-blue" /> (248) 955-1491
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:appraisal@qdav.mba" className="flex items-center gap-1 hover:text-accent-blue font-semibold">
                <Mail className="w-3 h-3 text-accent-blue" /> appraisal@qdav.mba
              </a>
            </div>

            {/* Messages Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-accent-blue text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.actionText && msg.actionView && (
                    <button
                      onClick={() => {
                        setView(msg.actionView!);
                        setIsOpen(false);
                      }}
                      className="mt-2 flex items-center gap-1.5 text-xs font-bold bg-accent-yellow/20 text-gray-900 border border-accent-yellow px-3 py-1.5 rounded-xl hover:bg-accent-yellow transition-colors cursor-pointer"
                    >
                      <span>{msg.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full font-medium transition-colors shrink-0 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about IRS Form 8283, SDIRA, fees..."
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:bg-white transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-accent-blue text-white p-2.5 rounded-xl hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
