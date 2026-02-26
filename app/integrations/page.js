import Link from "next/link"
import { integrations } from "@/lib/seo/integrations"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/site/CTA"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Integrations & Compatibility | Bookbag Intelligence",
  description: "See how Bookbag works alongside AI SDR platforms, sequencing tools, cold email infrastructure, and data enrichment providers.",
}

export default function IntegrationsIndexPage() {
  const entries = Object.entries(integrations)

  const categories = {}
  entries.forEach(([slug, data]) => {
    if (!categories[data.category]) categories[data.category] = []
    categories[data.category].push([slug, data])
  })

  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Integrations</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Works With Your Stack
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Bookbag is compatible with the tools you already use. Route AI-generated messages from any platform through the production gate.
          </p>
        </div>
      </section>

      {Object.entries(categories).map(([category, items], i) => (
        <section key={category} className={`py-24 border-t border-white/5 ${i % 2 === 0 ? "bg-[#03081c]" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-medium text-white mb-8">{category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(([slug, data]) => (
                <Link key={slug} href={`/integrations/${slug}`}>
                  <Card className="p-6 h-full group">
                    <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {data.toolName}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{data.subtitle}</p>
                    <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                      View compatibility <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA
        title="See how Bookbag fits your stack"
        primaryText="Request a demo"
        secondaryText="Get a free audit"
      />
    </>
  )
}
