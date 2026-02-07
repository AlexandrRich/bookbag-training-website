import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FileText, Clock } from "lucide-react"

export const metadata = {
  title: "Resources | Bookbag Intelligence",
  description:
    "Learn about AI outbound production gates, audit trails, and quality control for AI messaging.",
}

export default function ResourcesPage() {
  const articles = [
    {
      title: "What is an AI Outbound Production Gate?",
      description:
        "Learn what a production gate is, why AI messaging needs one, and how it works as a checkpoint between generation and delivery.",
      href: "/resources/ai-outbound-production-gate",
      readTime: "8 min read",
      category: "Fundamentals",
    },
    {
      title: "Blocked vs Needs Fix vs Safe: The Three-Lane Verdict System",
      description:
        "Understanding how messages are routed through safe_to_deploy, needs_fix, and blocked lanes—and why this matters for compliance.",
      href: "/resources/blocked-vs-needs-fix-vs-safe",
      readTime: "6 min read",
      category: "Product",
    },
    {
      title: "Audit Trails for AI Messaging: What Regulators Actually Need",
      description:
        "A practical guide to audit-ready recordkeeping for AI-generated outbound. Who approved, when, why, and which policy version was used.",
      href: "/resources/audit-trails-for-ai-messaging",
      readTime: "10 min read",
      category: "Compliance",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Resources</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Learn About AI Production Gates
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Guides and deep-dives on making AI outbound safe, auditable, and improvable.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="p-8 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-[10px]">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-medium text-white mb-6">
            Ready to implement a production gate?
          </h2>
          <p className="text-slate-400 mb-8">
            Most teams launch in under 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold bg-white text-black hover:bg-slate-200 h-11 px-8 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] transition-all"
            >
              Request demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:bg-white/10 h-11 px-8 transition-all"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
