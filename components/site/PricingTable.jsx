import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingTable() {
  const tiers = [
    {
      name: "Pilot",
      price: "$500",
      period: "/mo",
      description: "For validation and initial proof of concept",
      features: [
        "Up to 5,000 evaluations/month",
        "2 reviewers included",
        "Email & SMS channels",
        "Basic rubric templates",
        "14-day audit trail",
        "Email support",
      ],
      cta: "Start Pilot",
      href: "/contact",
      variant: "secondary",
    },
    {
      name: "Team",
      price: "$2,000",
      period: "/mo",
      description: "For high-growth outbound teams",
      features: [
        "Up to 50,000 evaluations/month",
        "10 reviewers included",
        "All channels (Email, SMS, Voice)",
        "Custom rubrics & policies",
        "90-day audit trail",
        "Training data exports (SFT/DPO)",
        "Priority support",
        "Slack integration",
      ],
      cta: "Get Started",
      href: "/contact",
      variant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For regulated sectors and high-volume operations",
      features: [
        "Unlimited evaluations",
        "Unlimited reviewers",
        "SME lane with evidence trails",
        "Custom taxonomy & versioning",
        "Unlimited audit retention",
        "Dedicated QA team (optional)",
        "Custom integrations",
        "SLA & dedicated support",
        "On-premise deployment (optional)",
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
          <h2 className="text-4xl font-medium text-white mb-4">Transparent Pricing</h2>
          <p className="text-slate-400">
            Scale securely. No per-seat limits on annotation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 relative ${
                tier.popular
                  ? "bg-indigo-500/5 border-indigo-500/30"
                  : "bg-gradient-to-b from-slate-800/40 to-slate-800/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-white font-medium mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-white mb-2">
                {tier.price}
                <span className="text-sm font-normal text-slate-500">{tier.period}</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={tier.variant} className="w-full">
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-400">
          <p>
            All plans include API access, webhook support, and basic analytics.
            <br />
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300">
              Contact us
            </Link>{" "}
            for volume discounts or custom deployments.
          </p>
        </div>
      </div>
    </section>
  )
}
