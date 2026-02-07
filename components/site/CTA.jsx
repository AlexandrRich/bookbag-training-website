import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA({
  title = "Ready to stop risky AI outbound before it ships?",
  primaryText = "Request a demo",
  primaryHref = "/contact",
  secondaryText = "Get a free audit",
  secondaryHref = "/contact"
}) {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
          {title}
        </h2>
        <p className="text-lg text-slate-400 mb-10 font-light">
          Join the engineering teams building safe, high-volume AI messaging systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
