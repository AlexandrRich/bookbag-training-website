import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export default function Image() {
  return renderOGImage({
    title: "Your AI SDR is sending emails you'd never approve",
    badge: "Bookbag Intelligence",
    description:
      "Catch hallucinations, spammy personalization, and compliance violations before they reach your prospects.",
  })
}
