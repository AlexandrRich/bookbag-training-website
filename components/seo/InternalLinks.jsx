import Link from "next/link"
import { personas } from "@/lib/seo/personas"
import { glossaryTerms } from "@/lib/seo/glossary"

export function InternalLinks({ personaSlugs = [], glossarySlugs = [], comparisonSlug, integrationSlug }) {
  const hasLinks = personaSlugs.length > 0 || glossarySlugs.length > 0 || comparisonSlug || integrationSlug

  if (!hasLinks) return null

  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-medium text-white mb-8">Related Resources</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {glossarySlugs.length > 0 && (
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Glossary</h3>
              <ul className="space-y-2">
                {glossarySlugs.map((slug) => {
                  const term = glossaryTerms[slug]
                  if (!term) return null
                  return (
                    <li key={slug}>
                      <Link href={`/glossary/${slug}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                        {term.term}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {personaSlugs.length > 0 && (
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Solutions</h3>
              <ul className="space-y-2">
                {personaSlugs.map((slug) => {
                  const p = personas[slug]
                  if (!p) return null
                  return (
                    <li key={slug}>
                      <Link href={`/for/${slug}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                        {p.badge}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {comparisonSlug && (
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Compare</h3>
              <Link href={`/compare/${comparisonSlug}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                See comparison →
              </Link>
            </div>
          )}
          {integrationSlug && (
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Integrations</h3>
              <Link href={`/integrations/${integrationSlug}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                View compatibility →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
