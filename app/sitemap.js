import { getAllPersonaSlugs } from "@/lib/seo/personas"
import { getAllGlossarySlugs } from "@/lib/seo/glossary"
import { getAllComparisonSlugs } from "@/lib/seo/comparisons"
import { getAllIntegrationSlugs } from "@/lib/seo/integrations"

const BASE_URL = "https://bookbag.ai"

export default function sitemap() {
  const now = new Date().toISOString()

  // Static pages
  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/product`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/free-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/security-compliance`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solutions/regulated-outbound`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solutions/outbound-vendors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solutions/revops-enablement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/resources/ai-outbound-production-gate`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/blocked-vs-needs-fix-vs-safe`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/audit-trails-for-ai-messaging`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  // Hub pages
  const hubPages = [
    { url: `${BASE_URL}/for`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/integrations`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ]

  // Persona pages
  const personaPages = getAllPersonaSlugs().map((slug) => ({
    url: `${BASE_URL}/for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Glossary pages
  const glossaryPages = getAllGlossarySlugs().map((slug) => ({
    url: `${BASE_URL}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // Comparison pages
  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // Integration pages
  const integrationPages = getAllIntegrationSlugs().map((slug) => ({
    url: `${BASE_URL}/integrations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...hubPages,
    ...personaPages,
    ...glossaryPages,
    ...comparisonPages,
    ...integrationPages,
  ]
}
