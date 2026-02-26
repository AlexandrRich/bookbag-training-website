import Link from "next/link"

export function Breadcrumbs({ items }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span className="text-slate-600">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-400">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bookbag.ai" },
              ...items.map((item, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: item.label,
                ...(item.href ? { item: `https://bookbag.ai${item.href}` } : {}),
              })),
            ],
          }),
        }}
      />
    </>
  )
}
