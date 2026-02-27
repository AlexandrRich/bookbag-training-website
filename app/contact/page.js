"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    aiTool: "",
    monthlyVolume: "",
    biggestChallenge: "",
    message: "",
    freeAudit: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="py-40 max-w-md mx-auto px-4 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_-5px_rgba(74,222,128,0.2)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-medium text-white mb-4">We&apos;ll be in touch</h2>
        <p className="text-slate-400 mb-8 text-sm">
          A solutions specialist will reach out within one business day to discuss your AI outbound quality needs.
        </p>
        <Button variant="secondary" onClick={() => window.location.href = "/"}>
          Return Home
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative animate-slide-up">
        <div className="absolute top-0 -left-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-lg mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4">Book a Demo</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
            Let&apos;s talk about your AI outbound
          </h1>
          <p className="text-slate-400 text-sm">
            Tell us about your team and we&apos;ll show you how Bookbag catches quality issues before they reach your prospects.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-lg mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 glass-card p-8 rounded-2xl border border-white/10 relative z-10 shadow-2xl"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                type="text"
                required
                placeholder="Acme Inc"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <Label htmlFor="role">Your Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vp-sales">VP Sales / Head of Sales</SelectItem>
                  <SelectItem value="sdr-manager">SDR Manager</SelectItem>
                  <SelectItem value="revops">RevOps / Sales Ops</SelectItem>
                  <SelectItem value="compliance">Compliance / Legal</SelectItem>
                  <SelectItem value="product">Product / Engineering</SelectItem>
                  <SelectItem value="founder">Founder / CEO</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* AI Tool */}
            <div className="space-y-1.5">
              <Label htmlFor="aiTool">What AI outbound tool are you using?</Label>
              <Select
                value={formData.aiTool}
                onValueChange={(value) =>
                  setFormData({ ...formData, aiTool: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select tool..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11x">11x (Jessica)</SelectItem>
                  <SelectItem value="artisan">Artisan (Ava)</SelectItem>
                  <SelectItem value="aisdr">AiSDR</SelectItem>
                  <SelectItem value="regie">Regie.ai</SelectItem>
                  <SelectItem value="salesloft">Salesloft</SelectItem>
                  <SelectItem value="outreach">Outreach</SelectItem>
                  <SelectItem value="apollo">Apollo</SelectItem>
                  <SelectItem value="custom-llm">Custom / Internal LLM</SelectItem>
                  <SelectItem value="evaluating">Still evaluating tools</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Monthly Volume */}
            <div className="space-y-1.5">
              <Label htmlFor="monthlyVolume">Approximate monthly AI message volume</Label>
              <Select
                value={formData.monthlyVolume}
                onValueChange={(value) =>
                  setFormData({ ...formData, monthlyVolume: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select volume..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1k">Under 1,000</SelectItem>
                  <SelectItem value="1k-5k">1,000 - 5,000</SelectItem>
                  <SelectItem value="5k-25k">5,000 - 25,000</SelectItem>
                  <SelectItem value="25k-100k">25,000 - 100,000</SelectItem>
                  <SelectItem value="100k-plus">100,000+</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Biggest Challenge */}
            <div className="space-y-1.5">
              <Label htmlFor="biggestChallenge">Biggest challenge with AI outbound</Label>
              <Select
                value={formData.biggestChallenge}
                onValueChange={(value) =>
                  setFormData({ ...formData, biggestChallenge: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quality">Quality issues (hallucinations, generic copy)</SelectItem>
                  <SelectItem value="compliance">Compliance / regulatory requirements</SelectItem>
                  <SelectItem value="deliverability">Domain reputation / deliverability</SelectItem>
                  <SelectItem value="enterprise-readiness">Enterprise readiness (we&apos;re an AI vendor)</SelectItem>
                  <SelectItem value="no-visibility">No visibility into what AI is sending</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message">Anything else? (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about what you're experiencing..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Free Audit */}
            <div className="pt-2">
              <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                <input
                  type="checkbox"
                  className="checkbox-custom"
                  checked={formData.freeAudit}
                  onChange={(e) =>
                    setFormData({ ...formData, freeAudit: e.target.checked })
                  }
                />
                I&apos;d also like a free 25-message audit
              </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book a Demo"}
              </Button>
            </div>
            <p className="text-[10px] text-center text-slate-600">
              By submitting, you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
