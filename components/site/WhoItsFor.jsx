import { Building2, ShieldCheck, TrendingUp } from "lucide-react"
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
          {/* Tier A: AI Outbound Vendors */}
          <Card className="p-8">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">AI Outbound Vendors</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              AI SDR platforms, sequencing tools, and personalization engines that need enterprise-ready controls and "Certified Outbound" differentiation.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Add governance without building workforce ops</li>
              <li>• Ship pass/fix/block rates to enterprise buyers</li>
              <li>• Reduce churn from spammy output</li>
            </ul>
          </Card>

          {/* Tier B: Regulated Outbound */}
          <Card className="p-8 bg-indigo-500/5 border-indigo-500/20">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">Regulated Teams</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              FinServ, insurance, lending, and collections teams that need defensible approvals, SME authority, and immutable audit trails.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• SME final authority with evidence + rationale</li>
              <li>• Export audit logs for compliance</li>
              <li>• Prevent prohibited claims before send</li>
            </ul>
          </Card>

          {/* Tier C: Mid-Market Outbound Teams */}
          <Card className="p-8">
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">Heavy Outbound Teams</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              RevOps, SDR leaders, and enablement teams sending high-volume AI outbound who need to protect deliverability and brand.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Stop bad AI before it tanks inboxing</li>
              <li>• Get approved language library</li>
              <li>• Weekly pass/fix/block reporting</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
