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
              The Production Gate
            </h2>
            <p className="text-slate-400 font-light">
              Upload AI messages → Human review → Get approved content back
            </p>
          </div>
          <Link
            href="/product"
            className="mt-4 md:mt-0 text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
          >
            See how it works →
          </Link>
        </div>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connecting Line Background */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -z-10" />

          {/* Step 1: Upload */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-slate-300 shadow-inner">
              <Wand2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">01 UPLOAD</div>
            <h3 className="font-medium text-white mb-2">Upload Messages</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload 100-200 AI-generated messages (email, LinkedIn, SMS) to your Bookbag project.
            </p>
          </div>

          {/* Step 2: Review */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-blue-400 shadow-inner">
              <ScanSearch className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">02 REVIEW</div>
            <h3 className="font-medium text-white mb-2">Human Review</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Expert reviewers evaluate against your rubric: tone, compliance, brand safety, personalization quality.
            </p>
          </div>

          {/* Step 3: Verdict (HIGHLIGHTED) */}
          <div className="glass-card p-6 rounded-2xl relative group bg-indigo-500/5 border-indigo-500/20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 text-indigo-300">
              <GitBranch className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-indigo-400/70 mb-2">03 VERDICT</div>
            <h3 className="font-medium text-white mb-3">Gate Decision</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                <CheckCircle2 className="w-3 h-3" /> Safe to Deploy
              </div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded border border-orange-400/20">
                <Edit3 className="w-3 h-3" /> Needs Fix (QA rewrite)
              </div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded border border-red-400/20">
                <XCircle className="w-3 h-3" /> Blocked (SME review)
              </div>
            </div>
          </div>

          {/* Step 4: Results */}
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center mb-5 text-slate-300 shadow-inner">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-2">04 RESULTS</div>
            <h3 className="font-medium text-white mb-2">Get Approved Content</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pass/fix/block rates, gold-standard rewrites, audit trail, and training-ready exports.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
