"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/siteConfig"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Image
            src="/logos/Logo-D3.png"
            alt="Bookbag"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-medium tracking-tight text-white text-sm group-hover:text-slate-200 transition-colors">
            Bookbag
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 z-50">
          {siteConfig.mainNav.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.href} className="relative group h-14 flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link flex items-center gap-1",
                      isActive(item.href) && "active"
                    )}
                  >
                    {item.title} <ChevronDown className="w-4 h-4 opacity-50" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1 transform translate-y-2 group-hover:translate-y-0 shadow-2xl shadow-black/50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <div className="font-medium">{subItem.title}</div>
                        {subItem.description && (
                          <div className="text-[10px] text-slate-500 mt-0.5">{subItem.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  isActive(item.href) && "active"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 z-50">
          <Link href="/contact" className="hidden md:inline-flex text-xs font-medium text-slate-400 hover:text-white transition-colors">
            Log in
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">Book Demo</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#020617] animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            {siteConfig.mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
