import Link from "next/link"
import { comparisons } from "@/lib/seo/comparisons"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/site/CTA"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI Outbound Quality Comparisons | Bookbag Intelligence",
  description: "Compare approaches to AI outbound quality: Bookbag vs manual review, prompt engineering, internal QA, and more.",
}

const POPULAR_SLUGS = ["bookbag-vs-manual-review", "bookbag-vs-prompt-engineering", "bookbag-vs-internal-qa"]

export default function CompareIndexPage() {
  const entries = Object.entries(comparisons)
  const popular = POPULAR_SLUGS
    .map((slug) => [slug, comparisons[slug]])
    .filter(([, data]) => data)
  const rest = entries.filter(([slug]) => !POPULAR_SLUGS.includes(slug))

  return (
    <>
      <section className="pt-24 pb-16 animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Comparisons</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Compare Approaches
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Most teams try prompt engineering, manual spot-checks, or internal QA before they realize they need a structured production gate. Here&apos;s how each approach compares — honestly, with trade-offs included.
          </p>
        </div>
      </section>

      {/* Most Popular */}
      {popular.length > 0 && (
        <section className="py-16 border-t border-white/5 bg-[#03081c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-medium text-white mb-8">Most Popular</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {popular.map(([slug, data]) => (
                <Link key={slug} href={`/compare/${slug}`}>
                  <Card className="p-8 h-full group bg-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                    <h3 className="text-lg font-medium text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {data.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{data.subtitle}</p>
                    <div className="mt-4 text-sm text-indigo-400 flex items-center gap-1">
                      See comparison <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Comparisons */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-medium text-white mb-8">All Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map(([slug, data]) => (
              <Link key={slug} href={`/compare/${slug}`}>
                <Card className="p-6 h-full group">
                  <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{data.subtitle}</p>
                  <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                    See comparison <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See how Bookbag compares in practice"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
