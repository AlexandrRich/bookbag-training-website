import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Privacy Policy | Bookbag Intelligence",
  description: "Privacy Policy for Bookbag Intelligence",
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 relative animate-slide-up">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Privacy Policy
        </h1>
        <div className="text-sm text-slate-500 mb-12">Last updated: January 2024</div>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="text-slate-300 leading-relaxed space-y-6">
            <p>
              This is a placeholder privacy policy. A complete privacy policy would be provided by your legal team.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Information We Collect</h2>
            <p>
              Information about data collection practices would be detailed here.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">How We Use Information</h2>
            <p>
              Details about how collected information is used.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Data Security</h2>
            <p>
              Information about security measures and data protection.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Your Rights</h2>
            <p>
              Information about user rights regarding their data.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Contact Us</h2>
            <p>
              For privacy-related questions, please contact us at legal@bookbag.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
