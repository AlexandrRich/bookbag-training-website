import { ShieldAlert, TrendingUp, RefreshCcw } from "lucide-react"

export function FeatureGrid({ features }) {
  const defaultFeatures = [
    {
      icon: ShieldAlert,
      title: "Prevent Reputation Risk",
      description:
        "Stop hallucinations, prohibited promissory claims, and brand-damaging messages before they reach the inbox.",
    },
    {
      icon: TrendingUp,
      title: "Enforce Copy Standards",
      description:
        "Codify your best SDRs' intuition into rubrics. Automatically flag low-effort or spammy personalization.",
    },
    {
      icon: RefreshCcw,
      title: "Close the Learning Loop",
      description:
        "Turn every human intervention into a high-quality training datapoint (SFT/DPO) to improve your base model.",
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
              Why teams deploy the Gate
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

          {/* Right Content - Code Mockup */}
          <div className="glass-card rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden relative">
            <div className="bg-[#0f1117] rounded-xl overflow-hidden border border-white/5">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  review_queue_12.tsx
                </div>
              </div>
              {/* Code */}
              <div className="p-6 font-mono text-xs">
                <div className="flex mb-4">
                  <div className="w-8 text-slate-700">1</div>
                  <div className="text-purple-400">const</div>
                  <div className="text-blue-400 ml-2">verdict</div>
                  <div className="text-white ml-2">=</div>
                  <div className="text-yellow-400 ml-2">await</div>
                  <div className="text-white ml-2">bookbag.evaluate{"({"}</div>
                </div>
                <div className="flex mb-1">
                  <div className="w-8 text-slate-700">2</div>
                  <div className="text-slate-400 ml-4">input:</div>
                  <div className="text-green-400 ml-2">generatedDraft</div>
                  <div className="text-white">,</div>
                </div>
                <div className="flex mb-1">
                  <div className="w-8 text-slate-700">3</div>
                  <div className="text-slate-400 ml-4">policy_id:</div>
                  <div className="text-orange-300 ml-2">&quot;finserv_strict_v2&quot;</div>
                </div>
                <div className="flex mb-4">
                  <div className="w-8 text-slate-700">4</div>
                  <div className="text-white">{"});"}</div>
                </div>
                <div className="flex mb-1">
                  <div className="w-8 text-slate-700">5</div>
                  <div className="text-purple-400">if</div>
                  <div className="text-white ml-2">(verdict.flagged) {"{"}</div>
                </div>
                <div className="flex mb-1">
                  <div className="w-8 text-slate-700">6</div>
                  <div className="text-yellow-400 ml-4">return</div>
                  <div className="text-blue-400 ml-2">routeToHumanQueue</div>
                  <div className="text-white">(verdict.reason);</div>
                </div>
                <div className="flex mb-1">
                  <div className="w-8 text-slate-700">7</div>
                  <div className="text-white">{"}"}</div>
                </div>
              </div>
              {/* Overlay Tooltip */}
              <div className="absolute bottom-10 right-10 bg-slate-900 border border-red-500/50 rounded-lg p-3 shadow-2xl shadow-red-900/20 max-w-[200px] animate-slide-up">
                <div className="flex items-center gap-2 mb-1 text-red-400 font-bold text-[10px] uppercase tracking-wider">
                  <ShieldAlert className="w-3 h-3" />
                  Policy Violation
                </div>
                <p className="text-white text-xs">
                  &quot;Guaranteed returns&quot; detected. Flagged for review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
