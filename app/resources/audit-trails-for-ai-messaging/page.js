import { CTA } from "@/components/site/CTA"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata = {
  title: "Audit Trails for AI Messaging: What Regulators Actually Need | Bookbag",
  description:
    "A practical guide to audit-ready recordkeeping for AI-generated outbound. Who approved, when, why, and which policy was used.",
}

export default function AuditTrailsArticle() {
  return (
    <>
      <article className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/resources" className="text-sm text-indigo-400 hover:text-indigo-300 mb-6 inline-block">
            ← Back to Resources
          </Link>
          <Badge className="mb-4">Compliance</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            Audit Trails for AI Messaging: What Regulators Actually Need
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
            <span>10 min read</span>
            <span>•</span>
            <span>Last updated: January 2024</span>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="text-lg text-slate-300 leading-relaxed mb-8">
              When regulators review AI-generated outbound, they ask one question: "Who approved this?" Traditional audit trails don't work for AI systems. Here's what you actually need.
            </div>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">The Regulator Question</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              In regulated industries—FinServ, insurance, lending, healthcare—compliance teams must be able to answer: "Who approved this message before it went to a customer?"
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              When humans write messages, the answer is clear: the rep wrote it, their manager approved it, marketing reviewed the template. When AI writes the message, the answer isn't obvious.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">What Regulators Need to See</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Audit-ready recordkeeping for AI outbound must include:
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">1. Final Approver Identity</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              For every message: who made the final call that this message could ship?
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>Email address of the approver</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>Role (Worker, QA, SME, System)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>Timestamp (ISO 8601 format)</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-6">
              Every message is logged with the reviewer who approved it, their role, and the policy version in effect at the time of review.
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">2. Policy Version Stamping</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Which rubric and policy version was in effect when the decision was made? If your rubrics change over time (they should), you need to track which version applied to each message.
            </p>
            <div className="bg-slate-900 border border-white/10 rounded-xl p-4 my-6 font-mono text-sm">
              <div className="text-slate-400">Example:</div>
              <div className="text-white mt-2">policy_id: "finserv_outbound_v2"</div>
              <div className="text-white">policy_version: "2.3.1"</div>
              <div className="text-white">last_updated: "2024-01-10T00:00:00Z"</div>
            </div>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">3. Rationale (for Blocked Items)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              When an SME blocks a message, they must provide written rationale. This is critical for audit defense.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 my-6">
              <div className="text-xs font-mono text-red-400 mb-2">EXAMPLE RATIONALE</div>
              <div className="text-sm text-white leading-relaxed">
                "Message contains unsubstantiated performance claims ('consistently outperforms the market'). Violates FINRA Rule 2210 prohibiting promissory language. No documented basis for claim."
              </div>
            </div>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">4. Provenance Trail</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The full chain of custody: who touched this message, when, and what actions they took.
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>System flagged for review → timestamp + rubric violation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>Worker reviewed → timestamp + label applied</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>QA edited → timestamp + approved version</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span>SME final review → timestamp + rationale</span>
              </li>
            </ul>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">What Good Looks Like</h2>
            <div className="bg-slate-900 border border-white/10 rounded-xl p-6 my-8 font-mono text-xs overflow-x-auto">
              <div className="text-slate-500 mb-4">AUDIT RECORD EXAMPLE</div>
              <div className="space-y-2 text-slate-300">
                <div>message_id: "msg_a7k2m9"</div>
                <div>verdict: "blocked"</div>
                <div>approver: "jane.compliance@acme.com"</div>
                <div>approver_role: "SME"</div>
                <div>policy_id: "finserv_v2"</div>
                <div>policy_version: "2.3.1"</div>
                <div>timestamp: "2024-01-15T10:23:41Z"</div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-slate-500">rationale:</div>
                  <div className="text-white ml-2">"Contains prohibited language re: guaranteed returns.</div>
                  <div className="text-white ml-2">Violates SEC advertising guidelines."</div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-slate-500">provenance:</div>
                  <div className="text-white ml-2">- System flagged (2024-01-15T10:15:22Z)</div>
                  <div className="text-white ml-2">- Worker labeled (2024-01-15T10:18:03Z)</div>
                  <div className="text-white ml-2">- SME reviewed (2024-01-15T10:23:41Z)</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Common Mistakes</h2>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Mistake 1: No Version Stamping</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Logging "approved under our policy" isn't enough. Which version? If your rubrics changed after this decision, how do you prove what was in effect at the time?
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Mistake 2: Generic Rationale</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              "Blocked for compliance reasons" doesn't cut it. You need specific citation: which rule, which clause, and why this message violates it.
            </p>

            <h3 className="text-xl font-medium text-white mt-8 mb-3">Mistake 3: No Provenance</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Showing only the final decision isn't enough. Regulators want to see the full chain: who flagged it, who reviewed it, who made the final call.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Export Requirements</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Your audit trail must be exportable. Common formats:
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span><strong className="text-white">JSON</strong> — Machine-readable for analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span><strong className="text-white">CSV</strong> — Human-readable for review</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">•</span>
                <span><strong className="text-white">PDF</strong> — For regulatory submissions</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-6">
              You must be able to export records on demand, with filtering by date range, policy version, or approver.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-400">1.</span>
                <span>Regulators need to know who approved each message</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">2.</span>
                <span>Every decision must include policy version stamping</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">3.</span>
                <span>Blocked items require written rationale with rule citations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">4.</span>
                <span>Full provenance trail (who touched it, when, what they did)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400">5.</span>
                <span>Audit logs must be exportable on demand</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <CTA />
    </>
  )
}
