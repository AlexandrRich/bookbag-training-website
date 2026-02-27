import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2, FileText } from "lucide-react"

export const metadata = {
  title: "Regulated Outbound Solution | Bookbag Intelligence",
  description:
    "AI Production Gate for FinServ, Insurance & Healthcare. Audit-ready authority layer for regulated AI outbound.",
}

export default function RegulatedOutboundPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Regulated Outbound</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            The Audit-Ready Authority Layer
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            For FinServ, Insurance, Lending & Healthcare. Bookbag acts as the human + policy authority layer between AI generation and customer delivery.
          </p>
        </div>
      </section>

      {/* The Risk */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">The Risk</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                AI-generated outbound in regulated sectors carries significant compliance risk. A single hallucination, missing disclosure, or prohibited claim can trigger regulatory action.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Hallucinations</div>
                    <div className="text-xs text-slate-500">
                      LLMs can fabricate performance data, returns, or product features
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Missing Disclosures</div>
                    <div className="text-xs text-slate-500">
                      Required risk warnings, fee schedules, or disclaimers omitted
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Prohibited Claims</div>
                    <div className="text-xs text-slate-500">
                      Promissory language, guaranteed returns, or unsubstantiated performance
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-red-500/5 border-red-500/20">
              <div className="text-xs font-mono text-red-400 mb-4 uppercase">Flagged Message</div>
              <div className="text-sm text-white leading-relaxed mb-4 bg-slate-950 p-4 rounded">
                "Our fund has <span className="bg-red-500/20 px-1 rounded">consistently delivered 12% annual returns</span> for the past decade. <span className="bg-red-500/20 px-1 rounded">Guaranteed performance</span> backed by our proprietary AI trading algorithm."
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <div className="text-red-400">Unsubstantiated performance claim (FINRA 2210)</div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <div className="text-red-400">Prohibited promissory language</div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <div className="text-red-400">Missing risk disclosure</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                <strong className="text-white">Verdict:</strong> BLOCKED → SME review required
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Control */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">The Control</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-white mb-3">Blocked → SME Review</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                High-risk messages are routed to subject matter experts who provide final approval with rationale and evidence. Full provenance tracked.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-white mb-3">Evidence Trails</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every decision includes who approved, when, which rubric version, and why. Audit-ready recordkeeping for regulatory review.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-white mb-3">Policy Enforcement</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Codify your compliance rubrics — FINRA 2210, CAN-SPAM, TCPA, state-level regulations. Bookbag evaluates every message against your policies before it ships to customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">The Outcome</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Fewer Compliance Incidents</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Catch prohibited language and hallucinations before they reach customers. Reduce regulatory exposure and reputational risk.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Faster Review Workflows</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Clean messages get approved quickly. Route edge cases to QA and high-risk items to SMEs. Supervision workflows that scale with volume.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-2">Consistent Approved Language</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Build a library of approved messaging. Export corrections as training data to improve your AI models over time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Buys */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">Who Buys This Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <h3 className="font-medium text-white mb-2">Marketing Compliance</h3>
              <p className="text-xs text-slate-500">
                Advertising review & approval workflows
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-medium text-white mb-2">Compliance Officer</h3>
              <p className="text-xs text-slate-500">
                Supervision & recordkeeping requirements
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-medium text-white mb-2">Risk & Controls</h3>
              <p className="text-xs text-slate-500">
                Audit trail & policy enforcement
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-medium text-white mb-2">RevOps</h3>
              <p className="text-xs text-slate-500">
                Quality control & fewer escalations
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to make AI outbound audit-ready?"
        primaryText="Request demo"
        secondaryText="Get compliance audit"
      />
    </>
  )
}
