import { getComparison, getAllComparisonSlugs } from "@/lib/seo/comparisons"
import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export default function Image({ params }) {
  const data = getComparison(params.slug)
  if (!data) {
    return renderOGImage({ title: "Bookbag Intelligence", badge: "Comparison" })
  }
  return renderOGImage({
    title: data.title,
    badge: "Comparison",
    description: data.subtitle,
  })
}
