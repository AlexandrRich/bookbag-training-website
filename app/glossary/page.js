import Link from "next/link"
import { glossaryTerms } from "@/lib/seo/glossary"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/site/CTA"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI Outbound Glossary | Bookbag Intelligence",
  description: "Definitions of key terms in AI outbound quality, compliance, and production gating. From AI Production Gate to SFT export.",
}

const START_HERE_SLUGS = ["ai-production-gate", "safe-to-deploy", "needs-fix", "blocked-verdict"]

export default function GlossaryIndexPage() {
  const entries = Object.entries(glossaryTerms).sort((a, b) =>
    a[1].term.localeCompare(b[1].term)
  )

  const startHere = START_HERE_SLUGS
    .map((slug) => [slug, glossaryTerms[slug]])
    .filter(([, data]) => data)

  // Group by category if available
  const categories = {}
  entries.forEach(([slug, data]) => {
    const cat = data.category || "General"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push([slug, data])
  })
  const hasCategories = Object.keys(categories).length > 1

  return (
    <>
      <section className="pt-24 pb-16 animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Glossary</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            AI Outbound Glossary
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Key terms and concepts in AI message quality, compliance gating, and production review workflows.
          </p>
        </div>
      </section>

      {/* Start Here */}
      {startHere.length > 0 && (
        <section className="py-16 border-t border-white/5 bg-[#03081c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-medium text-white mb-2">Start Here</h2>
            <p className="text-sm text-slate-500 mb-8">The core concepts behind Bookbag&apos;s AI Production Gate.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {startHere.map(([slug, data]) => (
                <Link key={slug} href={`/glossary/${slug}`}>
                  <Card className="p-6 h-full group bg-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                    <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {data.term}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{data.definition}</p>
                    <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                      Read definition <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Terms - grouped by category if available */}
      {hasCategories ? (
        Object.entries(categories).map(([category, items], i) => (
          <section key={category} className={`py-24 border-t border-white/5 ${i % 2 === 0 ? "" : "bg-[#03081c]"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-medium text-white mb-8">{category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(([slug, data]) => (
                  <Link key={slug} href={`/glossary/${slug}`}>
                    <Card className="p-6 h-full group">
                      <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        {data.term}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{data.definition}</p>
                      <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                        Read definition <ArrowRight className="w-3 h-3" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {entries.map(([slug, data]) => (
                <Link key={slug} href={`/glossary/${slug}`}>
                  <Card className="p-6 h-full group">
                    <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {data.term}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{data.definition}</p>
                    <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                      Read definition <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="See how these concepts work in practice"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
