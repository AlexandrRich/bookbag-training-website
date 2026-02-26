import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"
import { siteConfig } from "@/lib/siteConfig"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen relative overflow-x-hidden">
        <Header />
        <main id="app-root" className="flex-1 w-full z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
