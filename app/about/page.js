import { CTA } from "@/components/site/CTA"
import { Badge } from "@/components/ui/badge"
import { Target, Clock, Lightbulb } from "lucide-react"

export const metadata = {
  title: "About | Bookbag Intelligence",
  description:
    "Learn about Bookbag Intelligence's mission to make AI outbound safe, auditable, and improvable.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Making AI Outbound Safe, Auditable, and Improvable
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Bookbag Intelligence provides the authority layer that AI-generated outbound needs to operate at scale in regulated environments.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6 text-indigo-400">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                Make AI outbound safe, auditable, and improvable. We provide the human-in-the-loop infrastructure that enterprises need to deploy AI messaging with confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-6 text-purple-400">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Why Now</h3>
              <p className="text-slate-400 leading-relaxed">
                AI outbound is scaling faster than supervision workflows. Regulated senders and high-volume teams need a production gate that can evaluate millions of messages while maintaining human authority.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-6 text-teal-400">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">What We Believe</h3>
              <p className="text-slate-400 leading-relaxed">
                Humans + systems + evidence trails. AI needs human oversight. Human oversight needs tooling. And every correction should improve the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">
            The Problem We Solve
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              AI-generated outbound is reaching millions of customers daily. But current approaches lack three critical capabilities:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-white">Authority</strong> — No clear human accountability when AI makes mistakes. Compliance teams need final sign-off with evidence trails.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-white">Auditability</strong> — Regulators ask "Who approved this message?" Current AI tools can't answer. Audit logs are incomplete or missing provenance.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-white">Improvement</strong> — Human corrections are lost. Every rewrite should become training data, but most systems don't capture or export feedback loops.
                </div>
              </li>
            </ul>
            <p>
              Bookbag solves all three. We provide the production gate, the evidence trail, and the training-data factory in one system.
            </p>
          </div>
        </div>
      </section>

      {/* Who Uses Bookbag */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Who Uses Bookbag
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-medium text-white mb-3">Regulated Senders</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                FinServ, insurance, lending, collections, and healthcare-adjacent marketers who need audit-ready supervision workflows.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-medium text-white mb-3">Outbound Vendors</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI SDR platforms, sequencing tools, and personalization engines adding a compliance-ready layer to unblock enterprise deals.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-medium text-white mb-3">RevOps Teams</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Revenue operations, enablement, and marketing ops teams enforcing quality standards and building approved language libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Join us in making AI outbound trustworthy"
        primaryText="Request demo"
        secondaryText="Learn more"
      />
    </>
  )
}
