import { getIntegration, getAllIntegrationSlugs } from "@/lib/seo/integrations"
import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export function generateStaticParams() {
  return getAllIntegrationSlugs().map((slug) => ({ slug }))
}

export default function Image({ params }) {
  const data = getIntegration(params.slug)
  if (!data) {
    return renderOGImage({
      title: "Bookbag Intelligence",
      badge: "Integration",
    })
  }
  return renderOGImage({
    title: `Bookbag + ${data.toolName}`,
    badge: data.category,
    description: data.subtitle,
  })
}
