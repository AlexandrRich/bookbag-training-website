import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden animate-slide-up">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 text-balance leading-[1.1]">
          Turn your AI&apos;s worst conversations into <span className="text-blue-400">its best training data</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-6 text-balance leading-relaxed font-light">
          Upload your AI&apos;s chat history from sales or support. Our expert reviewers fix what&apos;s broken — hallucinations, off-brand responses, compliance risks. Every correction becomes training data that makes your AI smarter, so you stop burning money on conversations that never should have happened.
        </p>

        {/* 3 Verdict Types */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/10">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-green-200">Approved</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/10">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="text-sm font-medium text-orange-200">Needs Rewrite</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-400/20 bg-red-400/10">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="text-sm font-medium text-red-200">Blocked</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild size="lg">
            <Link href="/contact">Book a Demo</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/free-audit">Get a Free 25-Message Audit</Link>
          </Button>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-6">
            Built for teams sending AI outbound at scale
          </p>
        </div>
      </div>
    </section>
  )
}
