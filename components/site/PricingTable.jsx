import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingTable() {
  const tiers = [
    {
      name: "Starter",
      price: "$6,000",
      period: "/month",
      credits: "2,000 credits/month",
      description: "For validation and initial proof of concept",
      features: [
        { text: "Up to 15 users", included: true },
        { text: "Up to 10 projects", included: true },
        { text: "Runtime Playground", included: true },
        { text: "AI Quality Insights", included: false },
        { text: "Training Data Export", included: true },
        { text: "Export Project Data", included: true },
        { text: "Audit Reports", included: true },
        { text: "Dedicated QA Lead", included: false },
        { text: "Multi-project Governance", included: false },
        { text: "Compliance Pack (HIPAA, SOC2)", included: false },
      ],
      cta: "Get Started",
      href: "/contact",
      variant: "secondary",
    },
    {
      name: "Growth",
      price: "$20,000",
      period: "/month",
      credits: "8,000 credits/month",
      description: "For high-growth outbound teams",
      features: [
        { text: "Up to 50 users", included: true },
        { text: "Up to 50 projects", included: true },
        { text: "Runtime Playground", included: true },
        { text: "AI Quality Insights", included: true },
        { text: "Training Data Export", included: true },
        { text: "Export Project Data", included: true },
        { text: "Audit Reports", included: true },
        { text: "Dedicated QA Lead", included: false },
        { text: "Multi-project Governance", included: false },
        { text: "Compliance Pack (HIPAA, SOC2)", included: false },
      ],
      cta: "Get Started",
      href: "/contact",
      variant: "default",
      popular: true,
    },
    {
      name: "Scale",
      price: "$60,000",
      period: "/month",
      credits: "30,000 credits/month",
      description: "For regulated sectors and high-volume operations",
      features: [
        { text: "Up to 200 users", included: true },
        { text: "Up to 200 projects", included: true },
        { text: "Runtime Playground", included: true },
        { text: "AI Quality Insights", included: true },
        { text: "Training Data Export", included: true },
        { text: "Export Project Data", included: true },
        { text: "Audit Reports", included: true },
        { text: "Dedicated QA Lead", included: true },
        { text: "Multi-project Governance", included: true },
        { text: "Compliance Pack (HIPAA, SOC2)", included: false },
      ],
      cta: "Get Started",
      href: "/contact",
      variant: "secondary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      credits: "Contact sales for pricing",
      description: "For enterprise-scale operations with custom requirements",
      features: [
        { text: "Unlimited users", included: true },
        { text: "Unlimited projects", included: true },
        { text: "Runtime Playground", included: true },
        { text: "AI Quality Insights", included: true },
        { text: "Training Data Export", included: true },
        { text: "Export Project Data", included: true },
        { text: "Audit Reports", included: true },
        { text: "Dedicated QA Lead", included: true },
        { text: "Multi-project Governance", included: true },
        { text: "Compliance Pack (HIPAA, SOC2)", included: true },
        { text: "On-premise Deployment", included: true },
        { text: "Dedicated Cloud Instance", included: true },
      ],
      cta: "Contact Sales",
      href: "/contact",
      variant: "secondary",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white mb-4">Choose Your Plan</h2>
          <p className="text-slate-400">
            Credit-based billing that scales with your team. All plans include training data export and audit reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-6 relative flex flex-col ${
                tier.popular
                  ? "bg-indigo-500/5 border-indigo-500/30 shadow-lg lg:scale-105"
                  : "bg-gradient-to-b from-slate-800/40 to-slate-800/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center pb-6 border-b border-white/10">
                <h3 className="text-white font-semibold text-xl mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-sm text-slate-500">{tier.period}</span>}
                </div>
                <p className="text-sm text-indigo-400 font-medium">{tier.credits}</p>
              </div>

              <ul className="space-y-2.5 my-6 flex-1">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <svg className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={feature.included ? "text-slate-300" : "text-slate-600 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <Button asChild variant={tier.variant} className="w-full">
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-400 space-y-3">
          <p>
            Need help choosing?{" "}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
