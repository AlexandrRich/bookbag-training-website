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
    evaluating: "",
    channels: [],
    message: "",
    freeAudit: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCheckbox = (channel) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }))
  }

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
        <h2 className="text-2xl font-medium text-white mb-4">Request Received</h2>
        <p className="text-slate-400 mb-8 text-sm">
          We&apos;ve received your inquiry. A solutions specialist will reach out shortly to discuss your AI outbound needs.
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
          <Badge className="mb-4">Get Started</Badge>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
            Request Access
          </h1>
          <p className="text-slate-400 text-sm">
            Configure your production gate environment. Most teams launch in under 2 weeks.
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
                placeholder="Acme AI"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Role..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="revops">RevOps</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Evaluating */}
            <div className="space-y-1.5">
              <Label htmlFor="evaluating">What are you evaluating?</Label>
              <Select
                value={formData.evaluating}
                onValueChange={(value) =>
                  setFormData({ ...formData, evaluating: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="outbound-vendor">Outbound Vendor</SelectItem>
                  <SelectItem value="regulated-sender">Regulated Sender</SelectItem>
                  <SelectItem value="revops">RevOps / Enablement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Channels */}
            <div className="space-y-3 pt-2">
              <Label>Channels of Interest</Label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    className="checkbox-custom"
                    checked={formData.channels.includes("email")}
                    onChange={() => handleCheckbox("email")}
                  />
                  Email
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    className="checkbox-custom"
                    checked={formData.channels.includes("sms")}
                    onChange={() => handleCheckbox("sms")}
                  />
                  SMS
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    className="checkbox-custom"
                    checked={formData.channels.includes("voice")}
                    onChange={() => handleCheckbox("voice")}
                  />
                  Voice Script
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your use case..."
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
                I&apos;m interested in a free 25-message audit
              </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
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
