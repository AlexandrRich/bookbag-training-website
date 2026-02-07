import { Hero } from "@/components/site/Hero"
import { HowItWorks } from "@/components/site/HowItWorks"
import { FeatureGrid } from "@/components/site/FeatureGrid"
import { FAQ } from "@/components/site/FAQ"
import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Code2, BarChart3, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Bookbag Intelligence | The AI Outbound Production Gate",
  description:
    "Stop risky AI messages before they ship. The AI Production Gate for outbound teams.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureGrid />

      {/* What You Get Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              What you get
            </h2>
            <p className="text-slate-400">
              Everything you need to make AI outbound safe, auditable, and improvable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Approval Queue & Routing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automatic verdict routing: safe_to_deploy, needs_fix, blocked. Each with full context and reasoning.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-green-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">QA Rewrites & Gold Standards</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Human reviewers can edit, approve, or escalate. Corrections become your gold-standard examples.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">SME Lane for Blocked Items</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Subject matter experts make final calls with evidence trails. Full provenance tracking.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Audit Trail Exports</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Export who/what/when/why for every decision. Full compliance recordkeeping.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Taxonomy & Rubrics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Version-stamped policies and rubrics. Project-level configuration and dynamic forms.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 text-teal-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2">Training Data Exports</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                SFT, DPO, ranking data with full metadata. Retrain your models with real human feedback.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="py-24 border-t border-white/5 bg-[#050a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Tailored Workflows
            </h2>
            <p className="text-slate-400">Select the configuration for your use case.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/solutions/regulated-outbound">
              <Card className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 p-8">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Regulated Outbound
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For FinServ, Insurance & Healthcare. The audit-ready authority layer.
                </p>
                <div className="text-xs font-medium text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View solution <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href="/solutions/outbound-vendors">
              <Card className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 p-8">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-purple-300 transition-colors">
                  AI Vendors
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For AI SDRs & Dialers. Unblock enterprise deals with a safety layer.
                </p>
                <div className="text-xs font-medium text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View solution <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href="/solutions/revops-enablement">
              <Card className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 p-8">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-teal-300 transition-colors">
                  RevOps
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Quality control for outbound. Fix quality and improve conversion.
                </p>
                <div className="text-xs font-medium text-teal-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View solution <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-medium text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 mb-8">
            Starts at <span className="text-white font-semibold">$500/month</span> for pilots. Most teams start with a free 100-message audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View full pricing →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Get a free audit →
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  )
}
