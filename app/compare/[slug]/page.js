import { notFound } from "next/navigation"
import { getComparison, getAllComparisonSlugs } from "@/lib/seo/comparisons"
import { CTA } from "@/components/site/CTA"
import { FAQ } from "@/components/site/FAQ"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { InternalLinks } from "@/components/seo/InternalLinks"
import { CheckCircle2, XCircle } from "lucide-react"

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = getComparison(params.slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://bookbag.ai/compare/${params.slug}`,
    },
  }
}

export default function ComparisonPage({ params }) {
  const data = getComparison(params.slug)
  if (!data) notFound()

  return (
    <>
      <FAQSchema faqs={data.faqs} />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Compare", href: "/compare" },
              { label: data.title },
            ]}
          />
          <Badge className="mb-4">Comparison</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Side by Side */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Side A */}
            <Card className="p-8">
              <h2 className="text-xl font-medium text-white mb-3">{data.sideA.name}</h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{data.sideA.description}</p>
              <div className="mb-6">
                <h3 className="text-xs font-medium text-green-400 uppercase tracking-wider mb-3">Strengths</h3>
                <ul className="space-y-2">
                  {data.sideA.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-3">Limitations</h3>
                <ul className="space-y-2">
                  {data.sideA.weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Side B */}
            <Card className="p-8">
              <h2 className="text-xl font-medium text-white mb-3">{data.sideB.name}</h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{data.sideB.description}</p>
              <div className="mb-6">
                <h3 className="text-xs font-medium text-green-400 uppercase tracking-wider mb-3">Strengths</h3>
                <ul className="space-y-2">
                  {data.sideB.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-3">Limitations</h3>
                <ul className="space-y-2">
                  {data.sideB.weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">The Verdict</h2>
          <Card className="p-8">
            <p className="text-slate-300 leading-relaxed">{data.verdict}</p>
          </Card>
        </div>
      </section>

      <FAQ faqs={data.faqs} />

      <InternalLinks
        personaSlugs={data.relatedPersonas}
        glossarySlugs={data.relatedGlossary}
        comparisonSlug={data.relatedComparison}
      />

      <CTA
        title="See the AI Production Gate in action"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
