import Link from "next/link"
import { Twitter, Github, Linkedin, Shield } from "lucide-react"
import { siteConfig } from "@/lib/siteConfig"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-slate-800 border border-white/10 rounded flex items-center justify-center text-white text-[10px] font-bold">
                B
              </div>
              <span className="font-medium text-slate-200 tracking-tight text-sm">
                Bookbag Intelligence
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs mb-6 leading-relaxed">
              The AI Outbound Production Gate. Stop risky messages before they ship.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.twitter}
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a
                href={siteConfig.social.github}
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-white text-xs mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {siteConfig.footerNav.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-medium text-white text-xs mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {siteConfig.footerNav.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-white text-xs mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {siteConfig.footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-600">
          <p>© 2024 Bookbag Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              Systems Operational
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
