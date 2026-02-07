import { CTA } from "@/components/site/CTA"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Shield, Lock, FileText, Users, Database, Eye } from "lucide-react"

export const metadata = {
  title: "Security & Compliance | Bookbag Intelligence",
  description:
    "Learn about Bookbag's security practices, audit trails, and compliance support features.",
}

export default function SecurityCompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="mb-4">Security & Compliance</Badge>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Enterprise-Grade Security & Audit Trails
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Bookbag supports compliance review workflows with audit-ready evidence trails, role-based access control, and full provenance tracking.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">
            Security & Data Handling
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <Lock className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Data Encryption</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Messages are stored securely with access controls.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Bookbag maintains SOC 2 Type II compliance. Reports available upon request for enterprise customers.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Role-Based Access</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Granular permissions for Worker, QA, SME, and Admin roles. Control who can view, edit, and approve messages.
              </p>
            </Card>

            <Card className="p-6">
              <Database className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Data Retention</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Configurable retention periods per project. Export audit logs and training data before deletion.
              </p>
            </Card>

            <Card className="p-6">
              <Eye className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Audit Logging</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every action is logged: who accessed what, when, and why. Full audit trail for compliance reviews.
              </p>
            </Card>

            <Card className="p-6">
              <FileText className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-2">Export Controls</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You own your data. Export audit trails, training data, and decisions at any time. No lock-in.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Trails & Provenance */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">
                Audit Trails & Provenance Tracking
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Every decision in Bookbag includes full provenance: who approved, when, which rubric version was used, and rationale (for blocked items).
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Final Approver Identity</div>
                    <div className="text-xs text-slate-500">
                      Know exactly who made the final call (email, role, timestamp)
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Taxonomy Version Stamping</div>
                    <div className="text-xs text-slate-500">
                      Every decision is stamped with the rubric version in effect
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Rationale Required for Blocks</div>
                    <div className="text-xs text-slate-500">
                      SMEs must provide written rationale and evidence for blocked items
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">Export-Ready Format</div>
                    <div className="text-xs text-slate-500">
                      Audit logs exported as JSON or CSV for compliance review
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Card className="p-8">
              <div className="text-xs font-mono text-slate-500 mb-4 uppercase">Sample Audit Record</div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">message_id</span>
                  <span className="text-white">msg_x9k2p</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">verdict</span>
                  <span className="text-red-400 font-semibold">blocked</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">approver</span>
                  <span className="text-white text-xs">j.smith@acme.com</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">role</span>
                  <span className="text-orange-400">SME</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">policy_v</span>
                  <span className="text-white">finserv_v2.1</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">timestamp</span>
                  <span className="text-slate-300 text-xs">2024-01-15T14:22:10Z</span>
                </div>
                <div className="pt-2">
                  <div className="text-slate-500 mb-1 text-xs">rationale:</div>
                  <div className="text-white text-xs leading-relaxed bg-slate-900 p-2 rounded">
                    "Contains unsubstantiated performance claims. Violates FINRA Rule 2210."
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Support */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium text-white mb-8 text-center">
            Compliance Support
          </h2>
          <Card className="p-8">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Important:</strong> Bookbag supports compliance review workflows—we do not provide legal compliance services or replace compliance teams.
              </p>
              <p>
                We provide the tooling, evidence trails, and audit-ready recordkeeping that compliance teams need to supervise AI-generated outbound at scale.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>Bookbag does not interpret regulations or provide legal advice</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>Your team defines rubrics, policies, and approval criteria</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>Your SMEs make final calls with rationale and evidence</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>We provide the infrastructure for audit-ready workflows</div>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Enterprise Deployment */}
      <section className="py-24 border-t border-white/5 bg-[#03081c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-medium text-white mb-6">
            Enterprise Deployment Options
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            For highly regulated environments, we offer custom deployment configurations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 text-left">
              <h3 className="font-medium text-white mb-3">Cloud (Default)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Fully managed, SOC 2 compliant infrastructure. Deploy in days.
              </p>
              <div className="text-xs text-slate-500">Available now</div>
            </Card>
            <Card className="p-8 text-left">
              <h3 className="font-medium text-white mb-3">On-Premise / Private Cloud</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Deploy Bookbag in your own VPC or on-premise environment.
              </p>
              <div className="text-xs text-indigo-400">Contact sales</div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to build audit-ready AI outbound?"
        primaryText="Request demo"
        secondaryText="Talk to security team"
      />
    </>
  )
}
