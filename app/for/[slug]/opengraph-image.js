import { getPersona, getAllPersonaSlugs } from "@/lib/seo/personas"
import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export function generateStaticParams() {
  return getAllPersonaSlugs().map((slug) => ({ slug }))
}

export default function Image({ params }) {
  const data = getPersona(params.slug)
  if (!data) {
    return renderOGImage({ title: "Bookbag Intelligence", badge: "Solutions" })
  }
  return renderOGImage({
    title: data.title,
    badge: data.badge,
    description: data.subtitle,
  })
}
