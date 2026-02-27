import { TrendingDown, ShieldCheck, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhoItsFor() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            Who This Is For
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built for teams where AI outbound quality, compliance, and deliverability matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Quality is slipping */}
          <Card className="p-8">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">You deployed an AI SDR and quality is slipping</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              You invested in AI outbound but replies are flat, personalization feels generic, and your domain reputation is trending down. Bookbag reviews every message against your standards before it ships.
            </p>
            <div className="text-xs text-slate-500">
              For: Sales leaders, SDR managers, RevOps teams
            </div>
          </Card>

          {/* Card 2: Regulated industry */}
          <Card className="p-8 bg-indigo-500/5 border-indigo-500/20">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">You&apos;re in a regulated industry and need audit trails</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Compliance needs to know who approved every message. Bookbag provides immutable audit trails, expert sign-off, and evidence-based verdicts for every AI-generated communication.
            </p>
            <div className="text-xs text-slate-500">
              For: FinServ, Insurance, Healthcare, Lending
            </div>
          </Card>

          {/* Card 3: AI vendor */}
          <Card className="p-8">
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">You&apos;re an AI vendor and enterprise deals are stalling</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Enterprise buyers ask &quot;who reviews your AI&apos;s output?&quot; and you don&apos;t have a good answer. Bookbag becomes your compliance-ready quality layer — your brand or ours.
            </p>
            <div className="text-xs text-slate-500">
              For: AI SDR platforms, sequencing tools, personalization engines
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
