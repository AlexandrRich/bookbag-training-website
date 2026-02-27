import { PricingTable } from "@/components/site/PricingTable"
import { CTA } from "@/components/site/CTA"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Pricing | Bookbag Intelligence",
  description:
    "Transparent pricing for the AI Outbound Production Gate. Scale securely with Bookbag.",
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Pricing</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Credit-based billing that scales with your team. All plans include training data export and audit reports.
          </p>
        </div>
      </section>

      <PricingTable />

      {/* Add-ons Section */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Enterprise Add-Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-medium text-white mb-2">SME Lane + Advanced Workflows</h3>
              <p className="text-sm text-slate-400 mb-4">
                Subject matter expert review queue with evidence trails and provenance tracking.
              </p>
              <div className="text-indigo-400 text-sm font-medium">Contact sales</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-medium text-white mb-2">Custom Taxonomy</h3>
              <p className="text-sm text-slate-400 mb-4">
                Work with our team to build domain-specific rubrics and evaluation criteria.
              </p>
              <div className="text-indigo-400 text-sm font-medium">Contact sales</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-medium text-white mb-2">Dedicated QA Team</h3>
              <p className="text-sm text-slate-400 mb-4">
                Bookbag-managed reviewers and QA specialists for your project.
              </p>
              <div className="text-indigo-400 text-sm font-medium">Contact sales</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-medium text-white mb-2">Custom Integrations</h3>
              <p className="text-sm text-slate-400 mb-4">
                Direct integrations with your CRM, ESP, or data warehouse.
              </p>
              <div className="text-indigo-400 text-sm font-medium">Contact sales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="font-medium text-white mb-4">Important Notes</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  Bookbag <strong className="text-white">supports compliance review workflows</strong>—we do not provide legal compliance services or replace compliance teams.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  All plans include project management, webhook support, and basic analytics dashboards.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  Volume discounts and custom credit packages available for Scale and Enterprise plans.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  Most teams start with a free 25-message audit to validate the approach.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Context */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">
            What does it cost when...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-red-400 mb-2">$53,088</div>
              <div className="text-sm text-white mb-1">Per compliance violation (FTC)</div>
              <div className="text-xs text-slate-500">A single AI hallucination in a regulated industry can trigger regulatory action</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-orange-400 mb-2">Weeks</div>
              <div className="text-sm text-white mb-1">To recover a burned sending domain</div>
              <div className="text-xs text-slate-500">Spammy AI messages tank deliverability — recovery takes weeks of lost pipeline</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400 mb-2">1 email</div>
              <div className="text-sm text-white mb-1">To lose your biggest prospect</div>
              <div className="text-xs text-slate-500">A hallucinated claim to a key account can destroy a relationship permanently</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-purple-400 mb-2">70-80%</div>
              <div className="text-sm text-white mb-1">Churn at leading AI SDR vendors</div>
              <div className="text-xs text-slate-500">Quality problems are the #1 reason customers cancel AI outbound tools</div>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Bookbag isn&apos;t an expense — it&apos;s insurance for your AI outbound program.
          </p>
        </div>
      </section>

      <CTA
        title="Ready to get started?"
        primaryText="Request demo"
        secondaryText="Get free audit"
      />
    </>
  )
}
