import { CTA } from "@/components/site/CTA"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Code2, BarChart3, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Solutions | Bookbag Intelligence",
  description:
    "Tailored AI Production Gate workflows for regulated senders, outbound vendors, and RevOps teams.",
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Solutions</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Tailored Workflows for Your Use Case
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether you're a regulated sender, an AI vendor, or a RevOps team—Bookbag provides the production gate configuration you need.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Regulated Outbound */}
            <Link href="/solutions/regulated-outbound">
              <Card className="group cursor-pointer hover:-translate-y-2 transition-all duration-300 p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-300 transition-colors">
                  Regulated Outbound
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For FinServ, Insurance & Healthcare. The audit-ready authority layer that compliance teams need to supervise AI outbound at scale.
                </p>
                <div className="text-sm font-medium text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-5 h-5" />
                </div>
              </Card>
            </Link>

            {/* Outbound Vendors */}
            <Link href="/solutions/outbound-vendors">
              <Card className="group cursor-pointer hover:-translate-y-2 transition-all duration-300 p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-purple-300 transition-colors">
                  AI Vendors
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For AI SDR platforms and outbound tools. Add a compliance-ready safety layer to unblock enterprise deals and reduce churn.
                </p>
                <div className="text-sm font-medium text-purple-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-5 h-5" />
                </div>
              </Card>
            </Link>

            {/* RevOps & Enablement */}
            <Link href="/solutions/revops-enablement">
              <Card className="group cursor-pointer hover:-translate-y-2 transition-all duration-300 p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-teal-300 transition-colors">
                  RevOps & Enablement
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For revenue operations teams. Enforce quality standards, build approved language libraries, and improve conversion rates.
                </p>
                <div className="text-sm font-medium text-teal-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-5 h-5" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Which solution is right for you?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-slate-300">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-blue-400">Regulated</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-purple-400">Vendors</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-teal-400">RevOps</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-slate-300">Audit trails & provenance</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-slate-600">—</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-slate-300">SME final review lane</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-slate-600">Optional</td>
                  <td className="text-center py-4 px-4 text-slate-600">—</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-slate-300">Training data exports</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-slate-300">Quality metrics dashboard</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-300">White-label option</td>
                  <td className="text-center py-4 px-4 text-slate-600">—</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-slate-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
