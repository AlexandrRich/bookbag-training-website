import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, UserCheck, ShieldCheck, Cog, Database, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Product | Bookbag Intelligence",
  description:
    "Learn how Bookbag Intelligence works. Human review for AI-generated outbound — catch hallucinations, enforce quality, export training data.",
}

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Product Overview</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            How Bookbag Works
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Upload messages from any AI tool — email, LinkedIn, SMS. Bookbag evaluates every message, routes edge cases to human reviewers, and exports training data — providing quality control and compliance oversight before messages ship.
          </p>
        </div>
      </section>

      {/* Workflow Diagram Section */}
      <section className="py-16 border-y border-white/5 bg-[#03081c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-xl font-medium text-white mb-8 text-center">The Workflow</h2>
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono text-center min-w-[120px]">
                AI Generates<br />
                <span className="text-xs text-slate-500">Email / LinkedIn / SMS</span>
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono text-center min-w-[120px]">
                Export from<br />
                <span className="text-xs text-slate-500">Your Tool (CSV / API)</span>
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 text-sm font-mono text-center min-w-[120px]">
                Upload to<br />
                <span className="text-xs text-indigo-400">Bookbag Project</span>
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono text-center min-w-[120px]">
                Expert Review<br />
                <span className="text-xs text-slate-500">Approved / Rewrite / Blocked</span>
              </div>
              <div className="text-slate-600">→</div>
              <div className="p-4 rounded border border-white/10 bg-white/5 text-white text-sm font-mono text-center min-w-[120px]">
                Get Results<br />
                <span className="text-xs text-slate-500">Approved + Audit</span>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              Upload messages → Expert review → Get approved content back with audit trail
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
              <h3 className="text-lg font-medium text-white mb-3">Your Team Reviews</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Reviewers evaluate flagged messages against your quality standards. Fast, structured workflows for high-volume review.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Task-based queue</li>
                <li>• Rubric-guided evaluation</li>
                <li>• Quick approve/reject/escalate</li>
              </ul>
            </Card>

            <Card className="p-8 bg-indigo-500/5 border-indigo-500/20">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">QA Checks</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                QA can rewrite, approve, or escalate. Corrections become gold-standard examples your AI can learn from.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Edit & approve workflow</li>
                <li>• Create approved templates</li>
                <li>• Export training data</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Experts Approve</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Subject matter experts make final calls on high-risk messages. Full provenance and evidence trails.
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
                Know Exactly Who Approved Every Message
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Every decision in Bookbag is logged with full context: who approved, when, why, and which rules were in effect.
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
              Your Standards, Configured Once
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Configure your quality criteria, policies, and review forms per project. Version-stamped for audit compliance.
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
              Your AI Gets Better Over Time
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every human correction becomes training data. Export in standard ML formats to retrain your models.
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

      {/* How to Get Started */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-white mb-4">
              How to Get Started
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Subscribe to Bookbag and start uploading messages for human review. Works with any LLM, any ESP, any workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                1
              </div>
              <h3 className="font-medium text-white mb-2">Subscribe & Create Project</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Choose your plan, create a project, and configure your rubrics and reviewer roles.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                2
              </div>
              <h3 className="font-medium text-white mb-2">Upload Messages</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Upload AI-generated messages (email, LinkedIn, SMS) to your Bookbag project for expert review.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                3
              </div>
              <h3 className="font-medium text-white mb-2">Get Results</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive pass/fix/block verdicts, approved rewrites, audit trail, and training data exports.
              </p>
            </Card>
          </div>
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
              "Project configured and ready",
              "Rubrics defined for your use case",
              "Reviewer roles assigned",
              "QA queue operational",
              "First 20 messages evaluated",
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

      {/* Related Resources */}
      <section className="py-16 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-6">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/glossary/ai-production-gate" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-white">What is an AI Production Gate?</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </Link>
            <Link href="/glossary/sft-training-data" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-white">SFT Training Data explained</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </Link>
            <Link href="/compare/bookbag-vs-manual-review" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-white">Bookbag vs Manual Review</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </Link>
            <Link href="/compare/bookbag-vs-prompt-engineering" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-white">Bookbag vs Prompt Engineering</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
