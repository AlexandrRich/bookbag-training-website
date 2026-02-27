import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export default function Image() {
  return renderOGImage({
    title: "Your AI SDR is burning money and pipeline",
    badge: "Bookbag Intelligence",
    description:
      "Review every AI message before it ships. Stop losing deals to hallucinations, spammy copy, and compliance violations.",
  })
}
