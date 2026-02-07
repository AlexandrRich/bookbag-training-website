import Link from "next/link"
import { Wand2, ScanSearch, GitBranch, Database, CheckCircle2, Edit3, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HowItWorks() {
  return (
    <section className="py-24 border-t border-white/5 relative bg-[#03081c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              The Human-in-the-Loop Engine
            </h2>
            <p className="text-slate-400 font-light">
              From raw generation to verified send. Fully observable.
            </p>
          </div>
          <Link
            href="/product"
            className="mt-4 md:mt-0 text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
          >
            Explore the architecture →
          </Link>
        </div>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connecting Line Background */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -z-10" />

          {/* Step 1: Generation */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-slate-300 shadow-inner">
              <Wand2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">01 INPUT</div>
            <h3 className="font-medium text-white mb-2">Generation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              LLM drafts email, SMS, or script. Sent to Bookbag API via JSON.
            </p>
          </div>

          {/* Step 2: Evaluation */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-blue-400 shadow-inner">
              <ScanSearch className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">02 EVAL</div>
            <h3 className="font-medium text-white mb-2">Policy Check</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rubric evaluation against hallucinations, PI, and negative sentiment.
            </p>
          </div>

          {/* Step 3: Decision Gate (HIGHLIGHTED) */}
          <div className="glass-card p-6 rounded-2xl relative group bg-indigo-500/5 border-indigo-500/20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <GitBranch className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-indigo-400/70 mb-2">03 ROUTE</div>
            <h3 className="font-medium text-white mb-3">Decision Gate</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                <CheckCircle2 className="w-3 h-3" /> Pass (92%)
              </div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded border border-orange-400/20">
                <Edit3 className="w-3 h-3" /> Human QA (6%)
              </div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded border border-red-400/20">
                <XCircle className="w-3 h-3" /> Block (2%)
              </div>
            </div>
          </div>

          {/* Step 4: RLHF Export */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-slate-300 shadow-inner">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">04 LEARN</div>
            <h3 className="font-medium text-white mb-2">RLHF Export</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Human corrections are exported as preference data (DPO) to retrain models.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
