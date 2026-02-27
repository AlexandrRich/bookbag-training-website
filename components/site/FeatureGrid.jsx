import { ShieldAlert, TrendingUp, RefreshCcw } from "lucide-react"

export function FeatureGrid({ features }) {
  const defaultFeatures = [
    {
      icon: ShieldAlert,
      title: "Catch Hallucinations Before They Ship",
      description:
        "Your AI fabricated a stat, invented a job title, or made a promise you can't keep. Bookbag catches it before your prospect sees it.",
    },
    {
      icon: TrendingUp,
      title: "Enforce Your Quality Bar",
      description:
        "Define what 'good' looks like once. Bookbag applies it to every message — flagging generic personalization, spammy language, and off-brand tone.",
    },
    {
      icon: RefreshCcw,
      title: "Your AI Gets Better Over Time",
      description:
        "Every human correction becomes training data. Export it to retrain your models. Fewer flags, better first drafts, less review over time.",
    },
  ]

  const displayFeatures = features || defaultFeatures

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
              Why teams use Bookbag
            </h2>
            <div className="space-y-8">
              {displayFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Gate Preview Card */}
          <div className="glass-card rounded-2xl border border-white/10 p-1 overflow-hidden relative">
            <div className="bg-[#0f1117] rounded-xl overflow-hidden border border-white/5">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-[11px] font-medium text-slate-200">Gate Preview</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500">outbound_email • v2</span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                    1 of 847
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                {/* Message Context */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">AI Draft</div>
                    {/* Verdict chip */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1">
                      <span className="h-2 w-2 rounded-full bg-orange-400" />
                      <span className="text-[11px] font-semibold text-orange-200">Needs Fix</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-slate-200 leading-relaxed">
                      Hey Jordan — quick note. We guarantee your pipeline will grow 30% this month.
                      Want me to send over a few examples?
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                        channel: email
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                        segment: mid-market
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                        intent: book-meeting
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rubric / Checks */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Rubric Checks</div>
                  <div className="grid grid-cols-1 gap-2">
                    {/* Pass */}
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-green-400/20 bg-green-400/10 text-green-200 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <div className="text-sm font-medium text-slate-100">Tone</div>
                          <div className="text-xs text-slate-400">Matches your outbound voice</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">Score: 4/5</div>
                    </div>

                    {/* Warn */}
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10 text-orange-200 text-xs font-bold">
                          !
                        </span>
                        <div>
                          <div className="text-sm font-medium text-slate-100">Personalization</div>
                          <div className="text-xs text-slate-400">Too generic for claimed specificity</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">Score: 2/5</div>
                    </div>

                    {/* Fail */}
                    <div className="flex items-center justify-between rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-red-400/30 bg-red-500/10 text-red-200 text-xs font-bold">
                          ✕
                        </span>
                        <div>
                          <div className="text-sm font-medium text-red-100">Compliance / Claims</div>
                          <div className="text-xs text-red-200/80">Promissory language: &quot;guarantee&quot;</div>
                        </div>
                      </div>
                      <div className="text-xs text-red-200/80">Severity: High</div>
                    </div>
                  </div>
                </div>

                {/* Suggested Fix */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Suggested Fix</div>
                    <span className="text-[10px] text-slate-500">QA rewrite</span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-slate-200 leading-relaxed">
                      Hey Jordan — quick note. If you&apos;re open to it, I can share a few examples of how teams
                      improve outbound reply rates without making performance guarantees.
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2 py-0.5 text-[10px] font-medium text-indigo-200">
                        rewrite_ready
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                        approval_required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Audit trail footer */}
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-slate-300">
                      QA
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">Routed to QA • awaiting approval</div>
                      <div className="text-[11px] text-slate-500">Reason: promissory claim + low personalization</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500">Audit-ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
