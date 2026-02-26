import { getGlossaryTerm, getAllGlossarySlugs } from "@/lib/seo/glossary"
import { renderOGImage, size, contentType } from "@/lib/og-template"

export { size, contentType }

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }))
}

export default function Image({ params }) {
  const data = getGlossaryTerm(params.slug)
  if (!data) {
    return renderOGImage({ title: "Bookbag Intelligence", badge: "Glossary" })
  }
  return renderOGImage({
    title: data.term,
    badge: "Glossary",
    description: data.definition,
  })
}
