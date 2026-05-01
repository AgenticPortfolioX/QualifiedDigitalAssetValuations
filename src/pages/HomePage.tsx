import { motion } from "motion/react";
import { TrendingUp, FileText, Shield, Coins } from "lucide-react";

export default function HomePage({ setView }: { setView: (v: string) => void }) {
  return (
    <main className="relative h-screen w-screen bg-accent-blue overflow-hidden flex items-center justify-center">
      {/* Background Arc */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-[-20%] md:left-[-10%] top-[-10%] w-[140%] md:w-[70%] h-[120%] bg-accent-yellow rounded-full z-0"
      />

      <nav className="absolute top-6 md:top-8 left-6 md:left-12 z-20">
        <button 
          onClick={() => setView("about")}
          className="text-white font-medium hover:opacity-80 transition-opacity cursor-pointer"
        >
          About
        </button>
      </nav>
      <nav className="absolute top-6 md:top-8 right-6 md:right-12 z-20">
        <button 
          onClick={() => setView("blog")}
          className="text-white font-medium hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
        >
          Stay Current
        </button>
      </nav>

      <footer className="absolute bottom-6 md:bottom-8 left-6 md:left-12 z-20 flex flex-col items-start gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
              <TrendingUp className="text-accent-blue w-5 h-5" />
            </div>
            <span className="text-white font-black tracking-tight text-sm md:text-base">
              Qualified Digital Asset Valuations
            </span>
          </div>
        </div>
      </footer>
      <footer className="absolute bottom-6 md:bottom-8 right-6 md:right-12 z-20">
        <button 
          onClick={() => setView("scope")}
          className="text-white font-medium hover:opacity-80 transition-opacity cursor-pointer text-sm md:text-base text-right leading-tight"
        >
          Scope & <br /> Services
        </button>
      </footer>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between pt-[20vh] pb-24 md:py-0 gap-12 md:gap-0 h-full md:h-auto overflow-y-auto md:overflow-visible">
        
        {/* Left Text */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 text-center md:text-left mt-16 md:mt-0 relative top-12 md:top-0"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            IRS <br />
            <span className="relative inline">Qualified Valuations<motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-8px] left-0 h-1.5 bg-white"
              /></span>
          </h1>
        </motion.div>

        {/* Center Cards */}
        <div className="relative flex items-center justify-center w-[300px] sm:w-[500px] h-[400px] md:h-[600px] perspective-1000 scale-75 sm:scale-[0.85] md:scale-100 shrink-0">
          {/* Card 1 */}
          <motion.div
            animate={{
              rotateY: [-5, 5, -5],
              y: [-10, 10, -10],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-64 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 z-10 -rotate-6 transform translate-x-[-20%]"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-red" />
              <div className="w-3 h-3 rounded-full bg-accent-yellow" />
              <div className="w-3 h-3 rounded-full bg-accent-green" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
              <Coins className="w-20 h-20 text-accent-blue" />
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                Digital Assets <br />
                <span className="text-accent-blue">Appraisal</span>
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Bitcoin, Self-Directed IRA's & Digital Assets
              </p>
            </div>
            <div className="h-12 bg-gray-50 rounded-xl flex items-center px-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "80%", "80%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-accent-blue"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Compliance Hub Link */}
          <motion.button
            onClick={() => setView("compliance")}
            animate={{
              rotateY: [5, -5, 5],
              y: [10, -10, 10],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-0 w-64 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 z-20 rotate-6 transform translate-x-[20%] text-left hover:scale-105 transition-transform cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="px-3 py-1 bg-accent-yellow/20 rounded-full">
                <span className="text-[10px] font-bold text-accent-yellow uppercase tracking-wider">IRS Form 8283</span>
              </div>
              <FileText className="w-5 h-5 text-gray-400 group-hover:text-accent-blue transition-colors" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-black text-gray-900 leading-[0.9]">
                IRS <br />
                Compliant <br />
                Reports
              </h3>
              <p className="text-[10px] text-accent-blue font-bold uppercase tracking-widest animate-pulse">
                Click to Enter Hub →
              </p>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded" />
                <div className="h-2 w-3/4 bg-gray-100 rounded" />
                <div className="h-2 w-1/2 bg-gray-100 rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-accent-green/10 rounded-xl flex items-center justify-center">
                <Shield className="text-accent-green w-6 h-6" />
              </div>
              <div className="h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-accent-blue w-6 h-6" />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Right Text */}
        <motion.button 
          onClick={() => setView("quote")}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 text-center md:text-right group cursor-pointer mb-24 md:mb-0 relative bottom-12 md:bottom-0"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-white transition-colors">
            Start <br />
            <span className="relative inline">Appraisal<motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-8px] right-0 h-1.5 bg-gray-900 group-hover:bg-white transition-colors"
              /></span>
          </h1>
        </motion.button>

      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-12 h-12 bg-accent-red rounded-lg rotate-12 opacity-20"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-accent-green rounded-full opacity-20"
      />

      {/* Global Compliance Footer */}
      <div className="absolute bottom-2 left-0 right-0 z-30 flex flex-col items-center gap-2 pointer-events-none">

        <div className="flex gap-4 pointer-events-auto text-[10px] text-white uppercase tracking-[0.1em] font-black">
          <a href="tel:2489551491" className="hover:text-accent-yellow transition-colors">(248) 955-1491</a>
          <span className="opacity-50">|</span>
          <a href="mailto:support@qdav.mba" className="hover:text-accent-yellow transition-colors">support@qdav.mba</a>
        </div>
      </div>
    </main>
  );
}
