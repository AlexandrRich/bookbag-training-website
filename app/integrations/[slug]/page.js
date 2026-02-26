import { notFound } from "next/navigation"
import Link from "next/link"
import { getIntegration, getAllIntegrationSlugs } from "@/lib/seo/integrations"
import { CTA } from "@/components/site/CTA"
import { FAQ } from "@/components/site/FAQ"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { InternalLinks } from "@/components/seo/InternalLinks"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return getAllIntegrationSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = getIntegration(params.slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/integrations/${params.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://bookbag.ai/integrations/${params.slug}`,
    },
  }
}

export default function IntegrationPage({ params }) {
  const data = getIntegration(params.slug)
  if (!data) notFound()

  return (
    <>
      <FAQSchema faqs={data.faqs} />

      {/* Hero */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Integrations", href: "/integrations" },
              { label: data.toolName },
            ]}
          />
          <Badge className="mb-4">{data.category}</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Bookbag + {data.toolName}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/free-audit">Get a Free Safety Audit</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/product">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About + Compatibility */}
      <section className="py-16 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-8">About {data.toolName}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-slate-400 leading-relaxed">{data.description}</p>
            {data.compatibility && (
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-xs font-mono text-slate-500 mb-4">COMPATIBILITY</div>
                {data.compatibility.channels && (
                  <div className="mb-4">
                    <div className="text-xs font-medium text-slate-300 mb-2">Channels</div>
                    <div className="flex flex-wrap gap-2">
                      {data.compatibility.channels.map((ch, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">{ch}</span>
                      ))}
                    </div>
                  </div>
                )}
                {data.compatibility.methods && (
                  <div>
                    <div className="text-xs font-medium text-slate-300 mb-2">Integration Methods</div>
                    <div className="flex flex-wrap gap-2">
                      {data.compatibility.methods.map((m, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-700/50 border border-white/10 text-xs text-slate-300">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">How It Works Together</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 leading-relaxed mb-6">
                {data.toolName} handles generation. Bookbag handles quality control. Every message passes through the AI Production Gate before it ships.
              </p>
              <ul className="space-y-4">
                {data.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{step.title}</div>
                      <div className="text-xs text-slate-500">{step.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-xs font-mono text-slate-500 mb-4">INTEGRATION FLOW</div>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-indigo-400 font-mono text-xs mb-1">1. {data.toolName} generates messages</div>
                  <div className="text-slate-500 text-xs">AI outbound content ready for review</div>
                </div>
                <div className="text-center text-slate-600">↓</div>
                <div className="bg-slate-950 p-3 rounded border border-indigo-500/30">
                  <div className="text-indigo-400 font-mono text-xs mb-1">2. Route through Bookbag gate</div>
                  <div className="text-slate-500 text-xs">Expert reviewers evaluate → verdicts assigned</div>
                </div>
                <div className="text-center text-slate-600">↓</div>
                <div className="bg-slate-950 p-3 rounded border border-white/10">
                  <div className="text-green-400 font-mono text-xs mb-1">safe_to_deploy → Ships automatically</div>
                  <div className="text-orange-400 font-mono text-xs mb-1">needs_fix → QA corrects with rewrite</div>
                  <div className="text-red-400 font-mono text-xs mb-1">blocked → SME review with evidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => {
              const colors = [
                { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
                { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
                { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
              ]
              const color = colors[i % colors.length]
              return (
                <Card key={i} className="p-8">
                  <div className={`w-12 h-12 rounded-full ${color.bg} border ${color.border} flex items-center justify-center mb-6 ${color.text}`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ faqs={data.faqs} />

      {/* Related Integrations */}
      {data.relatedIntegrations && data.relatedIntegrations.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-medium text-white mb-6">Related Integrations</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedIntegrations.map((slug) => (
                <Link
                  key={slug}
                  href={`/integrations/${slug}`}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <InternalLinks
        personaSlugs={data.relatedPersonas}
        glossarySlugs={data.relatedGlossary}
        comparisonSlug={data.relatedComparison}
      />

      <CTA
        title={`Gate your ${data.toolName} AI output`}
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
