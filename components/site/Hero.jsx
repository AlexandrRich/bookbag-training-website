import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden animate-slide-up">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-slate-300 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          v2.0 is now available
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 text-balance leading-[1.1]">
          Stop risky AI messages <span className="text-blue-400">before they ship</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-6 text-balance leading-relaxed font-light">
          Bookbag gates AI outbound before it ships — safe messages go out, risky messages get fixed, high-risk messages require SME approval with evidence — and everything is auditable.
        </p>

        {/* 3 Verdict Types */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/10">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-green-200">Safe to Deploy</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/10">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="text-sm font-medium text-orange-200">Needs Fix</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-400/20 bg-red-400/10">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="text-sm font-medium text-red-200">Blocked</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild size="lg">
            <Link href="/free-audit">Get a Free Safety Audit</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/product">See How It Works</Link>
          </Button>
        </div>

        {/* Trust Logos */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-6">
            Built for teams sending AI outbound at scale
          </p>
        </div>
      </div>
    </section>
  )
}
