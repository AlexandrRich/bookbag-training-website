import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Terms of Service | Bookbag Intelligence",
  description: "Terms of Service for Bookbag Intelligence",
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 relative animate-slide-up">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Terms of Service
        </h1>
        <div className="text-sm text-slate-500 mb-12">Last updated: January 2024</div>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="text-slate-300 leading-relaxed space-y-6">
            <p>
              This is a placeholder terms of service. A complete terms of service would be provided by your legal team.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Use License</h2>
            <p>
              Details about the license granted to users for using the service.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Service Description</h2>
            <p>
              Description of the services provided and any limitations.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Limitations</h2>
            <p>
              Information about limitations of liability and disclaimers.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Contact Us</h2>
            <p>
              For questions about these Terms, please contact us at legal@bookbag.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
