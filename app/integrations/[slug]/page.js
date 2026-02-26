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

export function generateStaticParams() {
  return getAllIntegrationSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = getIntegration(params.slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
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
      <section className="pt-24 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Integrations", href: "/integrations" },
              { label: data.toolName },
            ]}
          />
          <Badge className="mb-4">{data.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Bookbag + {data.toolName}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* About the Tool */}
      <section className="py-16 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-4">About {data.toolName}</h2>
          <p className="text-slate-400 leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">How It Works Together</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.howItWorks.map((step, i) => (
              <Card key={i} className="p-8">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 font-medium text-sm">
                  {i + 1}
                </div>
                <h3 className="font-medium text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => (
              <Card key={i} className="p-8">
                <CheckCircle2 className="w-5 h-5 text-green-400 mb-4" />
                <h3 className="font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
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
