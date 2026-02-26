import { notFound } from "next/navigation"
import Link from "next/link"
import { getPersona, getAllPersonaSlugs } from "@/lib/seo/personas"
import { CTA } from "@/components/site/CTA"
import { FAQ } from "@/components/site/FAQ"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { InternalLinks } from "@/components/seo/InternalLinks"
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return getAllPersonaSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = getPersona(params.slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://bookbag.ai/for/${params.slug}`,
    },
  }
}

export default function PersonaPage({ params }) {
  const data = getPersona(params.slug)
  if (!data) notFound()

  return (
    <>
      <FAQSchema faqs={data.faqs} />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/for" },
              { label: data.badge },
            ]}
          />
          <Badge className="mb-4">{data.badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((pain, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-medium text-white">{pain.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Bookbag Helps */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-4">How Bookbag Helps</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Every AI-generated message passes through the production gate: safe messages ship, risky messages get fixed, and high-risk messages require SME approval with evidence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.howItHelps.map((item, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-medium text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Upload AI messages", description: "Send your AI-generated outbound messages to Bookbag via batch upload or API." },
              { step: "2", title: "Gate evaluates each message", description: "Every message is evaluated against your configured rubrics and routed to safe, needs_fix, or blocked." },
              { step: "3", title: "Experts review and correct", description: "QA reviewers fix flagged items. SMEs handle blocked items with evidence and rationale." },
              { step: "4", title: "Ship approved messages", description: "Approved messages return to your pipeline. Corrections become training data for AI improvement." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400 font-medium text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For / Not For */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-xl font-medium text-white mb-6">Best For</h2>
              <ul className="space-y-3">
                {data.bestFor.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <h2 className="text-xl font-medium text-white mb-6">Not the Right Fit</h2>
              <ul className="space-y-3">
                {data.notFor.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <FAQ faqs={data.faqs} />

      <InternalLinks
        personaSlugs={data.relatedPersonas}
        glossarySlugs={data.relatedGlossary}
        comparisonSlug={data.relatedComparison}
        integrationSlug={data.relatedIntegration}
      />

      <CTA
        title="Ready to gate your AI outbound?"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
