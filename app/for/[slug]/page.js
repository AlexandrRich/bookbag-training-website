import { notFound } from "next/navigation"
import Link from "next/link"
import { getPersona, getAllPersonaSlugs } from "@/lib/seo/personas"
import { CTA } from "@/components/site/CTA"
import { FAQ } from "@/components/site/FAQ"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
    alternates: { canonical: `/for/${params.slug}` },
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
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/for" },
              { label: data.badge },
            ]}
          />
          <Badge className="mb-4">{data.badge}</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          {/* Verdict badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/10">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-green-200">Safe to Deploy</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/10">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="text-sm font-medium text-orange-200">Needs Fix</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-400/20 bg-red-400/10">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-sm font-medium text-red-200">Blocked</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/free-audit">Get a Free Safety Audit</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/product">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column: narrative + pain points */}
            <div>
              <p className="text-slate-400 leading-relaxed mb-8">
                {data.problemNarrative ||
                  "AI-generated outbound content ships fast, but without a quality gate, bad messages reach real people. Hallucinations, compliance gaps, and tone violations erode trust and damage your sender reputation."}
              </p>
              <div className="space-y-4">
                {data.painPoints.map((pain, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white mb-1">{pain.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: flagged message example */}
            <Card className="p-8 bg-red-500/5 border-red-500/20">
              <div className="text-xs font-mono text-red-400 mb-4 uppercase">Flagged Message</div>
              <div className="text-sm text-white leading-relaxed mb-4 bg-slate-950 p-4 rounded">
                {data.exampleMessage?.text ||
                  "Your AI generated this outbound message, but our gate flagged critical issues before it shipped."}
              </div>
              <div className="space-y-2 text-xs">
                {(
                  data.exampleMessage?.flags || [
                    "Accuracy issue detected",
                    "Tone violation",
                    "Missing compliance language",
                  ]
                ).map((flag, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                    <div className="text-red-400">{flag}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                <strong className="text-white">Verdict:</strong>{" "}
                {data.exampleMessage?.verdict || "BLOCKED \u2192 SME review required"}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Gate */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-4">The Gate</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Every AI-generated message passes through the production gate: safe messages ship, risky
            messages get fixed, and high-risk messages require SME approval with evidence.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column: bullet list */}
            <div className="space-y-5">
              {data.howItHelps.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column: gate flow diagram */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-xs font-mono text-slate-500 mb-4">AI PRODUCTION GATE FLOW</div>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-indigo-400 font-mono text-xs mb-1">
                    1. AI generates messages
                  </div>
                  <div className="text-slate-500 text-xs">Outbound content ready for review</div>
                </div>
                <div className="text-center text-slate-600">&darr;</div>
                <div className="bg-slate-950 p-3 rounded border border-indigo-500/30">
                  <div className="text-indigo-400 font-mono text-xs mb-1">
                    2. Gate evaluates every message
                  </div>
                  <div className="text-slate-500 text-xs">
                    Rubric-based review &rarr; verdict assigned
                  </div>
                </div>
                <div className="text-center text-slate-600">&darr;</div>
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-green-400 font-mono text-xs mb-1">
                    safe_to_deploy &rarr; Ships automatically
                  </div>
                  <div className="text-orange-400 font-mono text-xs mb-1">
                    needs_fix &rarr; QA corrects with rewrite
                  </div>
                  <div className="text-red-400 font-mono text-xs mb-1">
                    blocked &rarr; SME review with evidence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best For / Not For */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-green-500/5 border-green-500/20">
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
