import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserCheck, ShieldCheck, Cog, Database, Zap } from "lucide-react"

export const metadata = {
  title: "Product | Bookbag Intelligence",
  description:
    "Learn how Bookbag Intelligence works. The AI Production Gate for safe, auditable AI outbound.",
}

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Product Overview</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            What is an AI Production Gate?
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            A production gate is the checkpoint between AI generation and customer delivery. Bookbag evaluates every message, routes edge cases to human authority, and exports training data—all in real-time.
          </p>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-16 border-y border-white/5 bg-[#03081c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono">
                LLM Output
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 text-sm font-mono shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                Bookbag API
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono">
                ESP / Twilio
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              Bookbag sits between generation and dispatch. Every message is evaluated before send.
            </p>
          </div>
        </div>
      </section>

      {/* Routing & Roles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Routing & Roles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Worker Queue</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Annotators review flagged messages and apply labels. Fast, structured workflows for high-volume review.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Task-based queue</li>
                <li>• Rubric-guided evaluation</li>
                <li>• Quick accept/reject/escalate</li>
              </ul>
            </Card>

            <Card className="p-8 bg-indigo-500/5 border-indigo-500/20">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">QA Review Queue</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                QA can rewrite, approve, or escalate. Corrections become gold-standard training examples.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Edit & approve workflow</li>
                <li>• Create approved templates</li>
                <li>• Export training pairs (SFT/DPO)</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">SME Final Review Queue</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Subject matter experts make final calls on blocked items. Full provenance and evidence trails.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Blocked-only items</li>
                <li>• Requires rationale + evidence</li>
                <li>• Audit-ready recordkeeping</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Evidence Trail & Provenance */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">
                Evidence Trail & Provenance
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Every decision in Bookbag is logged with full context: who approved, when, why, and which rubric version was used.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Final Approver Tracked</div>
                    <div className="text-xs text-slate-500">
                      Know exactly who made the final call on every message
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Version Stamping</div>
                    <div className="text-xs text-slate-500">
                      Taxonomy and rubric versions logged per decision
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Rationale Required</div>
                    <div className="text-xs text-slate-500">
                      SMEs must provide reasoning for blocked items
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Card className="p-8">
              <div className="text-xs font-mono text-slate-500 mb-4">AUDIT LOG ENTRY</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">message_id:</span>
                  <span className="text-white font-mono">msg_a7k2m9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">verdict:</span>
                  <span className="text-red-400 font-medium">blocked</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">approver:</span>
                  <span className="text-white">jane.doe@acme.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">role:</span>
                  <span className="text-orange-400">SME</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">taxonomy_v:</span>
                  <span className="text-white font-mono">v2.3.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">timestamp:</span>
                  <span className="text-slate-300 font-mono text-xs">2024-01-15T10:23:41Z</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-slate-400 mb-1">rationale:</div>
                  <div className="text-white text-xs leading-relaxed">
                    "Contains prohibited promissory language re: guaranteed returns. Violates SEC advertising guidelines."
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Taxonomy & Dynamic Forms */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-white mb-4">
              Taxonomy & Dynamic Forms
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Configure your rubrics, policies, and review forms per project. Version-stamped for audit compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Cog className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Project-Level Configuration</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Each project can have its own rubrics, definitions, and review workflows. Switch configurations per campaign or client.
              </p>
            </Card>
            <Card className="p-6">
              <Database className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Version-Stamped Policies</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every decision is logged with the exact rubric version used. Trace back to the policy that was in effect at the time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Exports & Training Data */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-white mb-4">
              Exports & Training Data Formats
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Turn human corrections into training data. Export in standard ML formats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-2">SFT</div>
              <div className="text-sm text-slate-300 mb-2">Supervised Fine-Tuning</div>
              <p className="text-xs text-slate-500">
                Input → approved output pairs for fine-tuning your base model
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">DPO</div>
              <div className="text-sm text-slate-300 mb-2">Direct Preference Optimization</div>
              <p className="text-xs text-slate-500">
                Preference pairs: chosen vs rejected outputs for RLHF training
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-teal-400 mb-2">Ranking</div>
              <div className="text-sm text-slate-300 mb-2">Ranked Outputs</div>
              <p className="text-xs text-slate-500">
                Multiple outputs ranked by quality for reward model training
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Approach */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-white mb-4">
              Integration Approach
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              API-first. Works with any LLM, any ESP, any workflow.
            </p>
          </div>

          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-2">Single API Call</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Send your generated message to Bookbag. Get back a verdict (pass/needs_fix/blocked), reasoning, and any flags.
                </p>
              </div>
            </div>
            <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <div className="text-purple-400">POST</div>
              <div className="text-slate-400 mt-2">https://api.bookbag.ai/v1/evaluate</div>
              <div className="text-slate-500 mt-4">{"{"}</div>
              <div className="text-slate-400 ml-4">&quot;message&quot;: &quot;[generated content]&quot;,</div>
              <div className="text-slate-400 ml-4">&quot;policy_id&quot;: &quot;finserv_v2&quot;</div>
              <div className="text-slate-500">{"}"}</div>
            </div>
          </Card>
        </div>
      </section>

      {/* What You Can Launch in 2 Weeks */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            What you can launch in 2 weeks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "API integration complete",
              "Rubrics defined for your use case",
              "Reviewer roles assigned",
              "QA queue operational",
              "First 100 messages evaluated",
              "Training data export configured",
              "Audit logs flowing",
              "Blocked items routed to SMEs",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
