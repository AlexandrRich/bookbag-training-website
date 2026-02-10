import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, FileText, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Free Outbound Safety Audit | Bookbag",
  description:
    "Upload 100-200 AI messages and get pass/fix/block rates, gold rewrites, and red flags—free within 72 hours.",
}

export default function FreeAuditPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/20 bg-green-400/10 text-green-300 text-xs font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Free • 72-hour turnaround • No credit card
          </div>

          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Get a Free Outbound Safety Audit
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Upload 100-200 AI-generated messages (email, LinkedIn, SMS) and get back an executive-ready report showing pass/fix/block rates, failure patterns, gold rewrites, and a recommended rubric.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="/contact">Request Audit</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#what-you-get">See What You Get</Link>
            </Button>
          </div>

          <p className="text-sm text-slate-500">
            Used by AI SDR vendors, regulated teams, and heavy outbound senders
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              What You Get (Within 72 Hours)
            </h2>
            <p className="text-slate-400">
              An executive-ready report you can forward to leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Pass / Fix / Block Profile</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                See exactly what percentage is safe to deploy, needs QA fixes, or requires SME blocking with evidence.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Top Failure Categories</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hallucinated personalization, spammy tone, risky claims, policy violations — with representative examples.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-green-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">10-20 Gold-Standard Rewrites</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Approved before/after examples you can deploy immediately and use as training artifacts.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 text-red-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Deliverability Red Flags</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Spammy patterns, over-optimized language, and aggressive urgency that hurt inboxing.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Compliance Red Flags</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Guarantees, sensitive claims, missing disclaimers, and regulated language violations.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Recommended Rubric</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Custom taxonomy config you can operationalize immediately to turn the audit into an ongoing gate.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400">
              Simple, fast, and free — no credit card required
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Upload 100-200 AI Messages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Email, LinkedIn, SMS, or call scripts — whatever you're sending with AI. No PII required.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">We Run the Gate</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Expert reviewers evaluate against hallucinations, compliance risk, deliverability patterns, and brand tone.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Get Your Report (72 Hours)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Pass/fix/block profile, failure categories, gold rewrites, red flags, and recommended rubric — ready to share internally.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-medium">
                4
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Turn It Into a Live Gate (Optional)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  If you want ongoing gating, we turn the audit into a live project. Choose a plan and start running the gate continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Who This Is For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-medium text-white mb-2">AI Outbound Vendors</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ship "Certified Outbound" to enterprise buyers without building workforce ops.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-medium text-white mb-2">Regulated Teams</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Get SME authority + evidence trail for defensible approvals.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-medium text-white mb-2">Heavy Outbound Teams</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Protect deliverability and brand without slowing down volume.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Ready to See Your Risk Profile?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Upload 100-200 messages and get your free safety audit within 72 hours.
          </p>

          <Button asChild size="lg">
            <Link href="/contact">Request Free Audit</Link>
          </Button>

          <p className="text-sm text-slate-500 mt-6">
            No credit card • No commitment • Used by AI vendors and enterprise outbound teams
          </p>
        </div>
      </section>
    </>
  )
}
