import Link from "next/link"
import { personas } from "@/lib/seo/personas"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/site/CTA"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI Production Gate Solutions by Segment | Bookbag Intelligence",
  description: "Explore how Bookbag's AI Production Gate serves different industries, company types, and roles. Find the solution that fits your team.",
}

export default function ForIndexPage() {
  const entries = Object.entries(personas)
  const companyType = entries.filter(([, v]) => v.type === "company")
  const industry = entries.filter(([, v]) => v.type === "industry")
  const role = entries.filter(([, v]) => v.type === "role")

  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Solutions</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Built for Your Team
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See how the AI Production Gate works for your company type, industry, or role.
          </p>
        </div>
      </section>

      <Section title="By Company Type" items={companyType} />
      <Section title="By Industry" items={industry} dark />
      <Section title="By Role" items={role} />

      <CTA />
    </>
  )
}

function Section({ title, items, dark }) {
  return (
    <section className={`py-24 border-t border-white/5 ${dark ? "bg-[#03081c]" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-medium text-white mb-10">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([slug, data]) => (
            <Link key={slug} href={`/for/${slug}`}>
              <Card className="p-6 h-full group">
                <Badge variant="outline" className="mb-3 text-[10px]">{data.badge}</Badge>
                <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {data.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{data.subtitle}</p>
                <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
