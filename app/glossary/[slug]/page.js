import { notFound } from "next/navigation"
import Link from "next/link"
import { getGlossaryTerm, getAllGlossarySlugs, glossaryTerms } from "@/lib/seo/glossary"
import { CTA } from "@/components/site/CTA"
import { FAQ } from "@/components/site/FAQ"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { InternalLinks } from "@/components/seo/InternalLinks"

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = getGlossaryTerm(params.slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://bookbag.ai/glossary/${params.slug}`,
    },
  }
}

export default function GlossaryTermPage({ params }) {
  const data = getGlossaryTerm(params.slug)
  if (!data) notFound()

  return (
    <>
      <FAQSchema faqs={data.faqs} />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Glossary", href: "/glossary" },
              { label: data.term },
            ]}
          />
          <Badge className="mb-4">Glossary</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {data.term}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed border-l-2 border-indigo-500 pl-6">
            {data.definition}
          </p>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2 className="text-2xl font-medium text-white mb-6">What It Means</h2>
            <p className="text-slate-400 leading-relaxed text-base">{data.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-6">Why It Matters</h2>
          <p className="text-slate-400 leading-relaxed text-base">{data.whyItMatters}</p>
        </div>
      </section>

      {/* How Bookbag Helps */}
      <section className="py-16 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-6">How Bookbag Helps</h2>
          <Card className="p-8">
            <p className="text-slate-300 leading-relaxed">{data.howBookbagHelps}</p>
          </Card>
        </div>
      </section>

      {/* Related Terms */}
      {data.relatedTerms && data.relatedTerms.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-medium text-white mb-6">Related Terms</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTerms.map((slug) => {
                const term = glossaryTerms[slug]
                if (!term) return null
                return (
                  <Link
                    key={slug}
                    href={`/glossary/${slug}`}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {term.term}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <FAQ faqs={data.faqs} />

      <InternalLinks
        personaSlugs={data.relatedPersonas}
        glossarySlugs={[]}
        comparisonSlug={data.relatedComparison}
      />

      <CTA
        title="See how Bookbag works"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
