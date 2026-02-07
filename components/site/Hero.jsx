import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
          Every AI message goes through <span className="text-gradient-blue">Bookbag</span>
          <br /> before it reaches your customers
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12 text-balance leading-relaxed font-light">
          The API-first <strong>Production Gate</strong> for AI messaging. Detect hallucinations, enforce compliance rubrics, and route edge cases to humans—all in real-time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild>
            <Link href="/contact">Start Integration</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">View Documentation</Link>
          </Button>
        </div>

        {/* Trust Logos */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-6">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-lg text-white tracking-tighter">
              ACME<span className="text-indigo-500">.ai</span>
            </span>
            <span className="font-bold text-lg text-white tracking-tighter">
              Hyper<span className="font-light text-slate-400">Scale</span>
            </span>
            <span className="font-bold text-lg text-white tracking-tighter flex items-center gap-1">
              <div className="w-4 h-4 rounded-full border-2 border-white" />
              Orbit
            </span>
            <span className="font-bold text-lg text-white tracking-tighter">VELOCITY</span>
          </div>
        </div>
      </div>
    </section>
  )
}
