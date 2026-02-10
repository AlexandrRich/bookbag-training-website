import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function FreeAuditCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-indigo-500/20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 text-xs font-medium mb-6">
            Free • 72-hour turnaround
          </div>

          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Get a Free Outbound Safety Audit
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Upload 100-200 AI messages and get back pass/fix/block rates, top failure categories, gold-standard rewrites, and a recommended rubric—all within 72 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-8 max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">Pass / Fix / Block Profile</div>
                <div className="text-xs text-slate-500">See exactly where quality breaks</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">10-20 Gold Rewrites</div>
                <div className="text-xs text-slate-500">Approved examples you can reuse</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">Deliverability Red Flags</div>
                <div className="text-xs text-slate-500">Spammy patterns that hurt inboxing</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">Recommended Rubric</div>
                <div className="text-xs text-slate-500">Turn audit into ongoing gate</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/free-audit">Start Free Audit</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/product">See Example Report</Link>
            </Button>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            No credit card required • Used by AI SDR vendors, regulated teams, and heavy outbound senders
          </p>
        </div>
      </div>
    </section>
  )
}
