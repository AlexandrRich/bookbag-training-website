import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, TrendingDown, Shield, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Outbound Vendors Solution | Bookbag Intelligence",
  description:
    "AI Production Gate for AI SDR platforms. Add a compliance-ready safety layer to unblock enterprise deals.",
}

export default function OutboundVendorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Outbound Vendors</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Become Compliance-Ready. Unblock Enterprise.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            AI SDR platforms and outbound tools need a safety layer to win regulated accounts. Bookbag becomes your enterprise-readiness unlock.
          </p>
        </div>
      </section>

      {/* Common Churn Reasons */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Why Enterprise Deals Stall
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <TrendingDown className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Bad Outputs</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI generates hallucinations, spam-like personalization, or brand-damaging messages. Customers lose trust.
              </p>
            </Card>
            <Card className="p-6 border-orange-500/20 bg-orange-500/5">
              <Shield className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Compliance Pushback</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Legal/compliance teams block the deal. "Where's the human review?" "Who approved this message?"
              </p>
            </Card>
            <Card className="p-6 border-yellow-500/20 bg-yellow-500/5">
              <TrendingDown className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Brand Damage</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                One bad message escalates. Customer churns. Deal goes cold. Reputation risk kills expansion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How Bookbag Becomes Your Safety Layer */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            How Bookbag Becomes Your Safety Layer
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Bookbag plugs in before send. Your vendor keeps the UX. Bookbag provides the verdict, review lane, and audit trail.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Plug-In Gate Before Send</div>
                    <div className="text-xs text-slate-500">
                      API call: send message, get verdict (pass/needs_fix/blocked)
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Customer Keeps Control</div>
                    <div className="text-xs text-slate-500">
                      Your customer's reviewers + rubrics. You provide the generation, Bookbag provides supervision.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Audit-Ready Evidence</div>
                    <div className="text-xs text-slate-500">
                      Who approved, when, why. Compliance teams get the trail they need.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-xs font-mono text-slate-500 mb-4">VENDOR INTEGRATION FLOW</div>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-indigo-400 font-mono text-xs mb-1">1. Your AI generates message</div>
                  <div className="text-slate-500 text-xs">LLM output → JSON payload</div>
                </div>
                <div className="text-center text-slate-600">↓</div>
                <div className="bg-slate-950 p-3 rounded border border-indigo-500/30">
                  <div className="text-indigo-400 font-mono text-xs mb-1">2. Bookbag evaluates</div>
                  <div className="text-slate-500 text-xs">POST /v1/evaluate → verdict</div>
                </div>
                <div className="text-center text-slate-600">↓</div>
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-green-400 font-mono text-xs mb-1">3. Pass → Auto-send</div>
                  <div className="text-orange-400 font-mono text-xs mb-1">3. Needs Fix → QA queue</div>
                  <div className="text-red-400 font-mono text-xs mb-1">3. Blocked → SME review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM / Partner Model */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">
            Partner Model Options
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <h3 className="font-medium text-white mb-3">Referral Partnership</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Refer customers to Bookbag. They integrate directly. You get partner credit.
              </p>
              <div className="text-xs text-indigo-400">Standard model</div>
            </Card>
            <Card className="p-8 bg-indigo-500/5 border-indigo-500/20">
              <h3 className="font-medium text-white mb-3">White-Label / OEM</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Bookbag becomes "YourVendor Safety Layer." Your brand, our infrastructure. Custom configurations available.
              </p>
              <div className="text-xs text-indigo-400">Contact sales</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Data Feedback Loop */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">
            The Training Data Feedback Loop
          </h2>
          <Card className="p-8">
            <div className="flex gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-white mb-2">Improve Your Models Over Time</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every human correction in Bookbag becomes training data. Export preference pairs (DPO), fine-tuning examples (SFT), and ranking data to retrain your base model. Your AI gets better with every review.
                </p>
              </div>
            </div>
            <div className="text-xs text-slate-500">
              Typical improvement: 30-50% reduction in flagged messages after first training cycle.
            </div>
          </Card>
        </div>
      </section>

      <CTA
        title="Partner with Bookbag to unblock enterprise deals"
        primaryText="Contact partnerships"
        secondaryText="View integration docs"
      />
    </>
  )
}
