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

export default function CompareIndexPage() {
  const entries = Object.entries(comparisons)

  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Comparisons</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Compare Approaches
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Honest, side-by-side comparisons of AI outbound quality approaches. Understand the trade-offs before you decide.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {entries.map(([slug, data]) => (
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
