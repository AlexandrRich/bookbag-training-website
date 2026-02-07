import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react"

export const metadata = {
  title: "RevOps & Enablement Solution | Bookbag Intelligence",
  description:
    "Quality control and approved language libraries for revenue operations teams using AI outbound.",
}

export default function RevOpsEnablementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">RevOps & Enablement</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Fix Outbound Quality in 2 Weeks
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            RevOps owns outbound tools but gets blamed for bad copy. Bookbag catches spammy personalization and builds your approved language library.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            The RevOps Outbound Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="font-medium text-white mb-2">You Own the Tools</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                RevOps deploys sequencing platforms, AI personalization, and cadence tools. But when AI generates bad copy, you get the escalation.
              </p>
            </Card>
            <Card className="p-6">
              <AlertCircle className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Quality Drifts Over Time</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Early AI outputs look good. Six months later, deliverability tanks and reps complain about "spammy" generated messages.
              </p>
            </Card>
            <Card className="p-6">
              <AlertCircle className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-medium text-white mb-2">No Approved Messaging Library</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every correction is one-off. No central source of truth for what "good" looks like. Reps reinvent the wheel.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How Bookbag Helps */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            How Bookbag Fixes This
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <BarChart3 className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-lg font-medium text-white mb-3">Quality Metrics Dashboard</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                See blocked rate, top failure modes, and quality drift over time. Catch issues before they become escalations.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• % of messages auto-approved vs flagged</li>
                <li>• Top rubric violations by category</li>
                <li>• Quality trend: improving or degrading?</li>
              </ul>
            </Card>

            <Card className="p-8">
              <CheckCircle2 className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-lg font-medium text-white mb-3">Approved Messaging Templates</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Every QA rewrite becomes an approved template. Build a library of gold-standard language that reps can reference.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Export approved messages as templates</li>
                <li>• Tag by use case (cold, follow-up, etc.)</li>
                <li>• Use as training data for fine-tuning</li>
              </ul>
            </Card>

            <Card className="p-8">
              <TrendingUp className="w-10 h-10 text-teal-400 mb-6" />
              <h3 className="text-lg font-medium text-white mb-3">Faster Iteration Cycles</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Export human corrections as preference data. Retrain your prompts or models. See quality improve within weeks.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• DPO/SFT training exports</li>
                <li>• A/B test new prompts safely</li>
                <li>• Close the feedback loop</li>
              </ul>
            </Card>

            <Card className="p-8">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-lg font-medium text-white mb-3">Governance Without Bottlenecks</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Set rubrics once. Bookbag enforces them at scale. Safe messages auto-approve. Edge cases route to QA. No manual review of every message.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Define "good" once, enforce everywhere</li>
                <li>• Auto-approve 90%+ of messages</li>
                <li>• Review queue for only the edge cases</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Common RevOps Use Cases
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-indigo-400 font-mono text-xs font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Prevent Low-Effort Personalization</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Flag messages like "I saw you posted on LinkedIn" with no actual insight. Enforce a minimum quality bar for personalization.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-indigo-400 font-mono text-xs font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Catch Over-Claimy Language</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Block phrases like "10x your pipeline" or "guaranteed results." Maintain brand trust and avoid spam filters.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-indigo-400 font-mono text-xs font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Build Approved Templates for Reps</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Export QA-approved messages as templates. Reps can see what "good" looks like and adapt the pattern.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics That Matter */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-medium text-white mb-8">Metrics That Matter</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="text-3xl font-bold text-indigo-400 mb-2">92%</div>
              <div className="text-sm text-slate-300 mb-1">Auto-Approved</div>
              <div className="text-xs text-slate-500">Most messages pass without review</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">-40%</div>
              <div className="text-sm text-slate-300 mb-1">Flagged Rate</div>
              <div className="text-xs text-slate-500">After first training cycle</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-teal-400 mb-2">2 weeks</div>
              <div className="text-sm text-slate-300 mb-1">Time to Launch</div>
              <div className="text-xs text-slate-500">Pilot to production</div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to fix outbound quality?"
        primaryText="Request demo"
        secondaryText="See quality metrics"
      />
    </>
  )
}
