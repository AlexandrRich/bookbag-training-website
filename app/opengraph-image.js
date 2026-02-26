import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export default function Image() {
  return renderOGImage({
    title: "Stop risky AI messages before they ship",
    badge: "AI Production Gate",
    description:
      "Gate every AI-generated outbound message with human authority, audit trails, and training data export.",
  })
}
