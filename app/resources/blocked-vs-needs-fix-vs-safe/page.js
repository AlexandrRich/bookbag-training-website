import { CTA } from "@/components/site/CTA"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

export const metadata = {
  title: "Blocked vs Needs Fix vs Safe: The Three-Lane Verdict System | Bookbag",
  description:
    "Understanding how messages are routed through safe_to_deploy, needs_fix, and blocked lanes in an AI production gate.",
}

export default function VerdictSystemArticle() {
  return (
    <>
      <article className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/resources"
            className="text-sm text-indigo-400 hover:text-indigo-300 mb-6 inline-block"
          >
            ← Back to Resources
          </Link>
          <Badge className="mb-4">Product</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            Blocked vs Needs Fix vs Safe: The Three-Lane Verdict System
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
            <span>6 min read</span>
            <span>•</span>
            <span>Last updated: January 2024</span>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="text-lg text-slate-300 leading-relaxed mb-8">
              Not all AI-generated messages are created equal. Some are perfect. Some need minor edits. Some should never ship. The three-lane verdict system routes each message to the right workflow based on risk.
            </div>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">The Three Lanes</h2>

            <div className="space-y-6 my-8">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-medium text-white">safe_to_deploy</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  Message passes all rubric checks. No issues detected. Approved and logged with full context.
                </p>
                <div className="text-sm text-slate-400">
                  <strong className="text-white">Typical rate:</strong> 90-95% of messages
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-medium text-white">needs_fix</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  Message has minor issues. QA reviewer can edit and approve. Corrections become training data.
                </p>
                <div className="text-sm text-slate-400">
                  <strong className="text-white">Typical rate:</strong> 4-8% of messages
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-medium text-white">blocked</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  High-risk message. SME provides final approval with rationale and evidence. Full audit trail.
                </p>
                <div className="text-sm text-slate-400">
                  <strong className="text-white">Typical rate:</strong> 1-3% of messages
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">How Routing Works</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Each message is evaluated against your defined rubrics. Based on the severity of any detected issues, the system routes to the appropriate lane.
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Safe to Deploy</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              These messages pass all rubric checks. They&apos;re approved and cleared for delivery.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Every approved message is logged with full context: timestamp, rubric version, reviewer, and evaluation results. If regulators ask &quot;Who approved this?&quot; you have the answer — with a complete audit trail.
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Needs Fix</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              These messages have minor issues that a QA reviewer can quickly fix. Examples:
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-orange-400">•</span>
                <span>Slightly off-brand tone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">•</span>
                <span>Low-effort personalization ("I saw your LinkedIn post")</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">•</span>
                <span>Missing or weak call-to-action</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">•</span>
                <span>Formatting issues</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-6">
              QA can edit the message, approve it, and send. The original (rejected) and corrected (approved) versions are logged as a preference pair for training.
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Blocked</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              These are high-risk messages that require SME review. Examples:
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Prohibited promissory language ("guaranteed returns")</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Potential hallucinations (unverifiable claims)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Missing required disclosures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>High-risk language for regulated industries</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-6">
              SMEs must provide rationale and evidence for their decision. This creates the audit trail compliance teams need.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Why Three Lanes Instead of Two?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Many systems use a binary pass/fail model. Bookbag uses three lanes because most issues aren't black-and-white.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A message with weak personalization isn't a compliance risk—it just needs better copy. Routing this to the SME lane wastes their time and creates a bottleneck.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The three-lane model allows you to scale supervision: approve clean messages quickly, fix the fixable issues efficiently, and reserve SME attention for genuine high-risk decisions.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-400">1.</span>
                <span>Three lanes = safe_to_deploy (90%+), needs_fix (4-8%), blocked (1-3%)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">2.</span>
                <span>Safe messages are approved with full audit logs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">3.</span>
                <span>Needs fix routes to QA for quick edits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">4.</span>
                <span>Blocked requires SME approval with rationale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">5.</span>
                <span>This model scales supervision without bottlenecks</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <CTA />
    </>
  )
}
