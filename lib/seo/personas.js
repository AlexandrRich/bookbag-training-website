export const personas = {
  // ── Company Type ──────────────────────────────────────────────
  "ai-sdr-vendors": {
    type: "company",
    badge: "AI SDR Vendors",
    title: "AI Production Gate for AI SDR Vendors",
    subtitle: "Your AI writes the sequences. Bookbag makes sure they don't destroy your customers' sender reputation — or your renewal rate.",
    problemNarrative: "Your AI SDR sent a prospect at Goldman a message claiming you're SOC 2 certified. You're not. Now legal is involved, the deal is dead, and your champion is ghosting your CS team. Multiply that by every customer running your AI at scale, and you've got a churn engine disguised as a product feature.",
    exampleMessage: {
      text: "\"Hi Sarah, I noticed Acme Corp just raised their Series C — congrats! Our platform has helped companies like yours achieve 3x pipeline growth guaranteed within 90 days.\"",
      flags: ["Unsubstantiated performance claim ('3x pipeline growth')", "Promissory language ('guaranteed within 90 days')", "Series C claim unverifiable from available data"],
      verdict: "BLOCKED → SME review required",
    },
    metaTitle: "AI Production Gate for AI SDR Vendors | Bookbag Intelligence",
    metaDescription: "Bookbag gates every AI-generated outbound message before it ships. Reduce churn, protect deliverability, and add a quality layer to your AI SDR platform.",
    painPoints: [
      { title: "The message that kills the account", description: "Your AI tells a prospect 'I saw you're using Salesforce' — they're on HubSpot. Or it claims a feature you sunsetted last quarter. One wrong detail doesn't just lose the deal — your customer blames your platform and churns." },
      { title: "Enterprise procurement won't close without controls", description: "The CISO asks: 'What happens when your AI hallucinates in a message to our CEO's inbox?' You need an immutable audit trail, human authority over every send, and documented governance — not a slide deck." },
      { title: "Building review ops from scratch burns 6 months", description: "You need annotators, calibration workflows, rubric versioning, and an escalation lane. That's a team, a budget, and a roadmap distraction — or you can plug into an AI Production Gate that already has it." },
    ],
    howItHelps: [
      { title: "Ship 'Certified Outbound' as a premium SKU", description: "Package the AI Production Gate as a revenue-generating tier. Your customers get safe_to_deploy / needs_fix / blocked verdicts on every message. You get expansion revenue and a defensible moat." },
      { title: "Kill churn before it starts", description: "Every AI-generated sequence step gets a verdict before it enters the send queue. The 20% that would have hallucinated, gone off-brand, or triggered spam filters gets caught and fixed. Your customers never see the bad output." },
      { title: "Enterprise-ready on day one", description: "Ship an immutable audit trail, authority escalation to SMEs, and evidence-based verdicts — the exact controls story that gets you past procurement, legal, and the CISO." },
    ],
    bestFor: [
      "AI SDR platforms shipping outbound at scale",
      "Vendors facing enterprise procurement questions about AI governance",
      "Teams that need a QA layer without building internal workforce ops",
    ],
    notFor: [
      "Pre-PMF startups with fewer than 100 messages per week",
      "Teams that want to build their own annotation infrastructure",
      "Companies not generating AI outbound content",
    ],
    faqs: [
      { question: "Can we white-label Bookbag for our customers?", answer: "You own the customer relationship. Bookbag runs the AI Production Gate behind the scenes — verdicts, gold-standard rewrites, immutable audit trails — and you surface them as your own 'Certified Outbound' feature. Your customers see your brand, not ours." },
      { question: "How does this actually reduce customer churn?", answer: "Churn in AI SDR platforms comes from two places: deliverability damage and embarrassing messages. The AI Production Gate catches both before they ship. When you can show a customer their block rate dropped from 22% to 3%, that's a retention conversation, not a cancellation call." },
      { question: "What does integration look like?", answer: "Content in, verdicts out. You send AI-generated messages via upload or API. We return safe_to_deploy / needs_fix / blocked verdicts, gold-standard rewrites for anything flagged, and a full audit trail. Most vendors start with a batch pilot and move to continuous gating within two weeks." },
      { question: "How fast do messages clear the gate?", answer: "Safe messages clear instantly — no human needed. Only the ones the gate flags hit the review queue. Most teams see 70-85% auto-approve after the first calibration cycle, so the human review load is much lighter than people expect." },
    ],
    relatedPersonas: ["sequencing-platforms", "cold-email-infrastructure", "vp-product"],
    relatedGlossary: ["ai-production-gate", "safe-to-deploy", "gold-standard-rewrites"],
    relatedComparison: "bookbag-vs-internal-qa",
    relatedIntegration: "outreach",
  },

  "sequencing-platforms": {
    type: "company",
    badge: "Sequencing Platforms",
    title: "AI Production Gate for Sequencing Platforms",
    subtitle: "Your AI writes the sequences. Bookbag makes sure they don't destroy your sender reputation.",
    problemNarrative: "Your AI personalization engine writes 'I saw you spoke at Dreamforce' to someone who's never been. Or claims compatibility with a product you don't support. The rep doesn't catch it, the prospect does, and now your platform has a credibility problem that no prompt tuning will fix.",
    exampleMessage: {
      text: "\"Hey Mike, loved your recent talk on scaling DevOps at KubeCon — your point about service mesh adoption really resonated. We integrate natively with Istio and can cut your deployment time by 60%.\"",
      flags: ["Conference attendance unverifiable", "Istio integration does not exist in product", "Unsubstantiated performance claim ('60%')"],
      verdict: "BLOCKED → SME review required",
    },
    metaTitle: "Bookbag for Sequencing Platforms | AI Quality Gate",
    metaDescription: "Bookbag adds human-authority QA to AI-powered sales sequences. Catch risky messages before they ship and generate training data from corrections.",
    painPoints: [
      { title: "The 20% that kills deals", description: "Your AI writes 'I saw you spoke at Dreamforce' to someone who's never been. Or claims compatibility with a product you don't support. One wrong detail torpedoes credibility with the entire account." },
      { title: "Deliverability is your product's lifeline", description: "A single batch of spammy AI-generated sequences can blacklist customer domains and unravel months of warmup. Your customers don't blame Gmail — they blame you." },
      { title: "Spot-checking is a liability dressed as a process", description: "You're reviewing 50 out of 5,000 messages and calling it QA. The other 4,950 ship unchecked. It only takes one hallucinated claim in the wrong inbox to trigger a cancellation." },
    ],
    howItHelps: [
      { title: "Zero bad messages ship", description: "Every AI-generated sequence step gets a verdict — safe_to_deploy, needs_fix, or blocked — before it enters your send queue. The 20% that would have hurt you gets caught and fixed." },
      { title: "Sender reputation stays intact", description: "The AI Production Gate flags spammy language, missing unsubscribe compliance, and tone violations before they trigger spam filters. Your customers' domains stay clean." },
      { title: "Your AI gets smarter with every correction", description: "Every human correction exports as SFT and DPO training pairs. Your personalization engine improves continuously from real human authority signals — not just prompt tweaks." },
    ],
    bestFor: [
      "Sales engagement platforms with AI-generated sequence steps",
      "Multi-channel outreach tools (email + LinkedIn + SMS)",
      "Platforms adding AI features to existing sequencing products",
    ],
    notFor: [
      "Manual-only sequencing tools with no AI generation",
      "Platforms with fewer than 500 AI-generated messages per month",
    ],
    faqs: [
      { question: "Does this slow down sequence delivery?", answer: "Not in any way your customers will notice. Safe messages clear instantly — zero human touch. Only the flagged ones hit the review queue. After the first calibration cycle, most platforms see 70-85% auto-approve, so throughput barely changes while quality goes through the roof." },
      { question: "Can we gate only the AI-generated steps?", answer: "Absolutely. You control what enters the AI Production Gate. Most sequencing platforms route only AI-generated personalization and follow-up steps through Bookbag. Manually written templates skip the gate entirely." },
      { question: "How does training data export work?", answer: "Every human correction — rewrites, fixes, rationale — exports as SFT pairs, DPO preference data, or ranking signals. You own the data. Plug it directly into your fine-tuning pipeline and watch your model's safe_to_deploy rate climb with every batch." },
    ],
    relatedPersonas: ["ai-sdr-vendors", "email-coaching-platforms", "revops"],
    relatedGlossary: ["needs-fix", "sft-export", "dpo-training-data"],
    relatedComparison: "bookbag-vs-prompt-engineering",
    relatedIntegration: "salesloft",
  },

  "cold-email-infrastructure": {
    type: "company",
    badge: "Cold Email Infrastructure",
    title: "AI Production Gate for Cold Email Infrastructure",
    subtitle: "One bad AI campaign blacklists a domain and torches months of warmup. Bookbag gates every message before it ships.",
    problemNarrative: "Your customer's AI generated 2,000 cold emails overnight. Forty of them contained 'guaranteed ROI' claims and missing unsubscribe links. Gmail flagged the domain, deliverability cratered, and your customer is blaming your platform in a public LinkedIn post. You didn't write the copy — but you sent it.",
    exampleMessage: {
      text: "\"Quick question — are you the right person to talk to about cutting your cloud costs by 50%? We've helped 200+ companies eliminate waste. Just reply YES and I'll send over a case study.\"",
      flags: ["Unsubstantiated cost reduction claim ('50%')", "Missing unsubscribe/opt-out mechanism", "'200+ companies' unverifiable without source", "Reply-bait pattern correlated with spam triggers"],
      verdict: "BLOCKED → needs_fix: add opt-out, substantiate claims",
    },
    metaTitle: "Bookbag for Cold Email Infrastructure | AI Gate",
    metaDescription: "Bookbag prevents AI-generated cold emails from damaging deliverability. Gate every message through safe/fix/block routing with human authority and audit trails.",
    painPoints: [
      { title: "One bad batch kills a domain", description: "Your customer's AI writes 2,000 emails that 'look fine' to a human skimming them. But 15% contain spam-trigger phrases, missing opt-outs, or hallucinated claims. Gmail flags the domain. Months of warmup — gone in an afternoon." },
      { title: "Gmail and Yahoo bulk sender rules changed the game", description: "Post-2024 enforcement means AI copy that 'looks fine' can still trip spam signals. Your customers don't understand why their deliverability tanked. They just know it happened on your platform." },
      { title: "Customers blame the infrastructure", description: "When AI emails land in spam or contain hallucinations, your customer doesn't blame the AI model — they blame you. Your churn is someone else's bad prompt." },
    ],
    howItHelps: [
      { title: "Every message gated before it sends", description: "The AI Production Gate routes every AI-generated email through safe_to_deploy / needs_fix / blocked routing before it enters the send queue. Spam triggers, tone violations, and compliance gaps get caught — not delivered." },
      { title: "Deliverability risk flagged at the copy level", description: "Language patterns correlated with spam filters, excessive links, missing CAN-SPAM elements, reply-bait tactics — all flagged before the email touches your sending infrastructure." },
      { title: "Approved copy library grows with every correction", description: "Every human-corrected message becomes a verified template. Over time, your customers' AI generates fewer flagged messages because the training data keeps improving." },
    ],
    bestFor: [
      "Cold email sending platforms (Smartlead, Instantly, etc.)",
      "Email infrastructure providers adding AI generation features",
      "Deliverability-focused tools that need to protect sender reputation",
    ],
    notFor: [
      "Transactional email providers (receipts, notifications)",
      "Newsletter platforms with editorial review already in place",
    ],
    faqs: [
      { question: "How does Bookbag protect deliverability?", answer: "At the copy level, before anything sends. The AI Production Gate flags language patterns correlated with spam triggers, checks for missing CAN-SPAM elements — unsubscribe, sender ID, honest subject lines — and catches hallucinated claims that generate complaints. Your sending infrastructure only sees clean messages." },
      { question: "Can Bookbag handle high volume?", answer: "It's built for it. Safe messages auto-approve instantly with zero human touch. Only flagged items hit the review queue. At enterprise tier, we gate millions of messages per month. The bottleneck is never the gate — it's the 15-20% that need human authority." },
      { question: "What about CAN-SPAM compliance?", answer: "Configure CAN-SPAM rubrics that check for physical address, unsubscribe mechanism, and honest subject lines. Missing a required element? That's an automatic blocked verdict — it never touches the send queue until a human fixes it and signs off." },
    ],
    relatedPersonas: ["deliverability-agencies", "ai-sdr-vendors", "compliance-officer"],
    relatedGlossary: ["outbound-deliverability-risk", "can-spam-ai-messaging", "ai-brand-safety"],
    relatedComparison: "quality-gate-vs-deliverability-tooling",
    relatedIntegration: "smartlead",
  },

  "email-coaching-platforms": {
    type: "company",
    badge: "Email Coaching Platforms",
    title: "AI Production Gate for Email Coaching Platforms",
    subtitle: "Your AI coaches reps on what to write. Bookbag makes sure the suggestions don't teach bad habits.",
    problemNarrative: "Your coaching AI suggested a rep open with 'I noticed your company is struggling with retention' — to a CHRO who just won a Best Places to Work award. The rep sent it. The prospect screenshotted it and posted it on LinkedIn. That's not a coaching failure — it's a trust failure in your product.",
    exampleMessage: {
      text: "\"Try this instead: 'With your team doubling in size this year, onboarding is probably your biggest headache right now. We've helped companies like Stripe and Notion cut ramp time by 40%.'\"",
      flags: ["Headcount claim unverifiable", "Customer name-dropping without approval (Stripe, Notion)", "Unsubstantiated performance claim ('40%')"],
      verdict: "needs_fix → remove customer names, substantiate claim",
    },
    metaTitle: "Bookbag for Email Coaching Platforms | AI Quality Gate",
    metaDescription: "Bookbag adds human authority to AI email coaching. Verify suggestions, build approved messaging libraries, and generate training data from expert corrections.",
    painPoints: [
      { title: "Your AI coaches reps into compliance landmines", description: "The coaching model suggests 'guaranteed results' phrasing because it tested well in A/B. But it violates FTC guidelines. Your user doesn't know that — they just hit send because your product told them to." },
      { title: "No gate between suggestion and send", description: "Your users take AI suggestions at face value. There's no checkpoint, no verification, no human authority between 'the AI said so' and a message landing in someone's inbox." },
      { title: "Without corrections, your model flatlines", description: "Coaching AI needs structured human feedback to improve. Without a correction loop, your model plateaus — giving the same mediocre suggestions while competitors pull ahead with better training data." },
    ],
    howItHelps: [
      { title: "Every suggestion verified by human authority", description: "AI coaching suggestions route through the AI Production Gate before users see them. Verified suggestions get a safe_to_deploy stamp. Bad ones get gold-standard rewrites that show the model what 'good' actually looks like." },
      { title: "Continuous improvement from real corrections", description: "Every expert correction becomes SFT and DPO training data. Your coaching model gets smarter with every batch — fixing specific weaknesses with real human preference signals, not guesswork." },
      { title: "Ship 'Human-Verified AI Coaching' as your moat", description: "Every competitor has an AI that suggests copy. None of them can say every suggestion passed through human authority with an immutable audit trail. That's a positioning advantage you can sell." },
    ],
    bestFor: [
      "AI email coaching tools (tone, personalization, subject lines)",
      "Writing assistants for sales teams",
      "Platforms that suggest AI rewrites or improvements",
    ],
    notFor: [
      "Grammar-only checkers",
      "Platforms with no AI-generated content output",
    ],
    faqs: [
      { question: "How is this different from A/B testing?", answer: "A/B testing tells you what happened after a message was sent. The AI Production Gate catches what should never have been sent in the first place. You're gating quality before it reaches the inbox, not measuring damage after the fact." },
      { question: "Can we feed corrections back into our coaching model?", answer: "That's the whole point. Every expert correction exports as SFT pairs, DPO preference data, and ranking signals. Plug them into your fine-tuning pipeline. Your coaching model gets measurably better with every calibration cycle." },
      { question: "What does 'verified coaching' look like in practice?", answer: "An expert reviews AI suggestions against your rubrics — tone, accuracy, compliance, brand. Approved suggestions get safe_to_deploy. Flagged ones get a gold-standard rewrite with documented rationale explaining exactly why the original failed and what the fix addresses." },
    ],
    relatedPersonas: ["sequencing-platforms", "ai-sdr-vendors", "sales-enablement"],
    relatedGlossary: ["gold-standard-rewrites", "preference-ranking-data", "qa-review-workflow"],
    relatedComparison: "rewrite-workflow-vs-prompt-tweaks",
    relatedIntegration: "lavender",
  },

  "deliverability-agencies": {
    type: "company",
    badge: "Deliverability Agencies",
    title: "AI Production Gate for Deliverability Agencies",
    subtitle: "You audit deliverability for a living. Bookbag lets you scale copy review across every client without hiring another reviewer.",
    problemNarrative: "Your senior reviewer caught a client's AI writing 'act now before this exclusive offer expires' in 300 cold emails — classic spam trigger language. But your junior reviewer approved the same pattern for another client last week, and now that domain is on a blocklist. You can't scale quality if your standards live in people's heads.",
    exampleMessage: {
      text: "\"URGENT: Limited-time partnership opportunity — we've reserved a slot for your team. Click here to claim your spot before Friday.\"",
      flags: ["Urgency/scarcity language correlated with spam triggers ('URGENT', 'limited-time', 'before Friday')", "Deceptive framing ('reserved a slot' implies prior relationship)", "High spam-score link pattern"],
      verdict: "BLOCKED → rewrite required: remove urgency triggers, honest framing",
    },
    metaTitle: "Bookbag for Deliverability Agencies | AI Quality Gate",
    metaDescription: "Bookbag gives deliverability agencies a scalable QA engine for AI outbound. Audit copy, flag compliance issues, and deliver evidence-based reports.",
    painPoints: [
      { title: "Manual review collapses at 10 clients", description: "You're reviewing AI-generated copy by hand. At three clients, it's manageable. At ten, your reviewers are skimming, inconsistencies multiply, and you're shipping audits you're not confident in." },
      { title: "Turnaround speed is your competitive edge — and it's slipping", description: "Clients expect deliverability audits in hours, not days. But your copy review queue is a bottleneck. Every hour of delay is a client considering a faster agency." },
      { title: "Quality standards live in your reviewers' heads", description: "Your best reviewer catches spam triggers your junior misses. There's no codified rubric, no version control, no way to guarantee consistency across 15 client accounts." },
    ],
    howItHelps: [
      { title: "Scale to 50 clients without hiring", description: "Route every client's AI-generated copy through the AI Production Gate. Same rubrics, same verdicts, same quality — regardless of who's reviewing or how many accounts you manage." },
      { title: "Ship audit reports your clients actually trust", description: "Export immutable audit trails with verdicts, failure categories, evidence quotes, and recommendations. These aren't summary reports — they're forensic-grade deliverables that justify your retainer." },
      { title: "Your standards codified and version-stamped", description: "Turn your deliverability expertise into machine-enforced rubrics. Every reviewer applies the same rules. When you update a standard, every client project inherits it automatically." },
    ],
    bestFor: [
      "Email deliverability consulting firms",
      "Outbound agencies managing AI copy for multiple clients",
      "Cold email specialists who audit AI-generated campaigns",
    ],
    notFor: [
      "Agencies that only handle manual, non-AI copy",
      "Solo consultants with low volume",
    ],
    faqs: [
      { question: "Can we use Bookbag across multiple clients?", answer: "Each client gets a fully isolated project — its own rubrics, reviewers, and immutable audit trail. No cross-client data exposure. You see aggregate metrics across your book of business, but each client's data stays siloed." },
      { question: "Can we brand the reports?", answer: "You get the structured data — verdicts, failure categories, gold-standard rewrites, evidence quotes, recommendations. Package it in your own templates, under your own brand. Your clients see your expertise, backed by forensic-grade evidence." },
      { question: "How does pricing work for agencies?", answer: "Credits pool at the organization level. Allocate them across client projects as the work demands. Most agencies start on a Growth plan, prove the model with 3-5 clients, and scale from there." },
    ],
    relatedPersonas: ["cold-email-infrastructure", "revops", "head-of-cs"],
    relatedGlossary: ["audit-ready-review", "taxonomy-config", "rubric-versioning"],
    relatedComparison: "bookbag-vs-manual-review",
    relatedIntegration: "instantly",
  },

  // ── Industry ──────────────────────────────────────────────────
  "finserv": {
    type: "industry",
    badge: "Financial Services",
    title: "AI Production Gate for Financial Services",
    subtitle: "Your AI just promised a prospect '12% annual returns.' FINRA doesn't care that a model wrote it. Bookbag catches it before it ships.",
    problemNarrative: "Your AI outbound engine sent 500 prospect emails last week. Three of them contained projected returns without risk disclosures. One used the word 'guaranteed.' FINRA 2210 doesn't have a carve-out for 'the AI did it.' You're looking at a per-message fine, a supervision deficiency, and a conversation with your CCO you don't want to have.",
    exampleMessage: {
      text: "\"Hi David, with markets showing strong momentum this quarter, our managed portfolio strategy has consistently delivered 8-12% annual returns. I'd love to show you how we can protect and grow your retirement savings.\"",
      flags: ["Projected returns without required risk disclosure (FINRA 2210)", "Promissory language ('protect and grow')", "Past performance presented as forward-looking guarantee", "Missing 'past performance does not guarantee future results' disclaimer"],
      verdict: "BLOCKED → compliance SME authority escalation required",
    },
    metaTitle: "Bookbag for Financial Services | AI Quality Gate",
    metaDescription: "Bookbag gates AI financial services outbound with human authority and audit trails. Catch FINRA violations, prohibited claims, and missing disclosures.",
    painPoints: [
      { title: "FINRA 2210 doesn't care who wrote the message", description: "Your AI generated a prospect email with projected returns and no risk disclosure. That's a per-message fine, a supervision deficiency finding, and a conversation with your CCO. 'The AI did it' is not a defense." },
      { title: "Compliance review costs $300-$600 per filing — and AI is 10x the volume", description: "Your compliance team was already bottlenecked reviewing human-written communications. Now AI is generating 10x the volume. You can't review every message manually, but you can't skip review either." },
      { title: "Regulators expect documented supervision of AI outputs", description: "When the examiner asks 'How do you supervise AI-generated client communications?', the answer can't be 'We spot-check.' They want an immutable audit trail, rubric-based enforcement, and evidence of human authority over every message." },
    ],
    howItHelps: [
      { title: "FINRA-aligned rubrics enforced on every message", description: "Configure your compliance policies as machine-enforced rubrics. Every AI-generated message gets evaluated against FINRA 2210 rules — performance claims, promissory language, missing disclosures — before it can send." },
      { title: "Authority escalation with full evidence", description: "Blocked messages route to your compliance SMEs with the flagged text, the specific rubric violation, evidence quotes, and recommended corrections. Your team makes the call — with everything they need in front of them." },
      { title: "Examination-ready immutable audit trail", description: "Every verdict, correction, and approval is timestamped, attributable, and version-stamped against the rubric that applied. When the examiner asks, you hand them an export — not a narrative." },
    ],
    bestFor: [
      "Broker-dealers using AI for prospect outreach",
      "Investment advisory firms with AI-generated client communications",
      "FinServ marketing teams using AI personalization at scale",
    ],
    notFor: [
      "Internal-only financial communications",
      "Teams not subject to FINRA or SEC advertising rules",
    ],
    faqs: [
      { question: "Does Bookbag replace FINRA compliance review?", answer: "No — and you wouldn't want it to. Your compliance team retains final human authority over every blocked message. What Bookbag does is give them a systematic AI Production Gate that catches violations before they need to, enforces your rubrics consistently, and documents every decision in an immutable audit trail. They review less, catch more." },
      { question: "What types of violations does it catch?", answer: "Whatever you configure. Performance guarantees, promissory language, missing risk disclosures, unsubstantiated claims, forward-looking statements without disclaimers — all standard FINRA 2210 territory. You define the rubrics; the gate enforces them on every message, every time." },
      { question: "How does this compare to existing compliance review costs?", answer: "FINRA standard review is $300 per filing, expedited is $600. The AI Production Gate costs a fraction of that per message — and it runs continuously, not as a spot-check. Safe messages auto-approve. Your compliance team only touches the ones that actually need human authority." },
      { question: "Is the audit trail examination-ready?", answer: "Every decision includes: who reviewed, when, which rubric version applied, the verdict, the rationale, and any corrections made. Exports are immutable and tenant-isolated. It's built for the examiner's desk, not just your dashboard." },
    ],
    relatedPersonas: ["compliance-officer", "insurance", "lending"],
    relatedGlossary: ["finra-ai-compliance", "ai-audit-trail", "sme-escalation"],
    relatedComparison: "ai-outbound-compliance-vs-legal-review",
    relatedIntegration: "salesloft",
  },

  "insurance": {
    type: "industry",
    badge: "Insurance",
    title: "AI Production Gate for Insurance Marketing",
    subtitle: "Your AI just told a prospect their claim would be covered. It won't be. Bookbag catches misleading coverage language before it ships.",
    problemNarrative: "Your marketing AI generated a lead-gen email that said 'comprehensive coverage starting at $29/month with no exclusions.' The actual policy has 14 exclusions and the $29 rate is for a 22-year-old non-smoker in Iowa. A state AG investigator is now asking for every communication your company sent in the last 12 months. One AI-generated email just became a market conduct examination.",
    exampleMessage: {
      text: "\"Great news — based on your profile, you qualify for our Premium Health Plan with full coverage, no waiting periods, and rates as low as $49/month. Let's get you protected today.\"",
      flags: ["'Full coverage' is misleading — policy contains exclusions", "'No waiting periods' contradicts actual policy terms", "'$49/month' rate not guaranteed without underwriting", "Missing licensing disclosure required in 38 states"],
      verdict: "BLOCKED → compliance SME authority escalation required",
    },
    metaTitle: "Bookbag for Insurance Marketing | AI Quality Gate",
    metaDescription: "Bookbag prevents AI insurance outbound from including prohibited claims or missing disclosures. Human authority, audit trails, and compliance rubrics.",
    painPoints: [
      { title: "Your AI promises coverage that doesn't exist", description: "The model generated 'comprehensive coverage with no exclusions' — but the actual policy has 14 exclusions. Your prospect relied on that email. Now you've got an E&O claim and a state AG inquiry. AI hallucinations in insurance aren't embarrassing — they're actionable." },
      { title: "50 states, 50 rule sets, zero margin for error", description: "Insurance advertising rules vary by state, line of business, and distribution channel. Your AI doesn't know that Texas requires different disclosures than California. It writes one version for everyone, and the wrong version in the wrong state is a $50,000-per-violation problem." },
      { title: "FTC and state AG enforcement is accelerating", description: "Deceptive insurance marketing penalties exceed $50,000 per violation. State AGs are explicitly targeting AI-generated communications. One bad campaign doesn't just create exposure — it creates a market conduct examination." },
    ],
    howItHelps: [
      { title: "Every coverage claim verified against approved terms", description: "The AI Production Gate flags benefit descriptions, rate references, and coverage language that doesn't match your actual policy terms. Your AI can't promise what your product doesn't deliver." },
      { title: "Required disclosures enforced on every message", description: "Licensing disclosures, limitations language, state-specific disclaimers — all checked automatically. Missing a required element triggers a blocked verdict. The message doesn't move until a human fixes it." },
      { title: "Supervision documented for every AI communication", description: "Every review decision lands in an immutable audit trail — verdict, reviewer, timestamp, rubric version. When the state examiner asks how you supervise AI marketing, you hand them an export, not an explanation." },
    ],
    bestFor: [
      "Insurance carriers using AI for marketing and lead generation",
      "Insurance marketing agencies with AI-powered campaigns",
      "InsurTech platforms with AI-generated customer communications",
    ],
    notFor: [
      "Internal-only policy administration communications",
      "Claims processing without customer-facing output",
    ],
    faqs: [
      { question: "Can Bookbag handle state-specific insurance rules?", answer: "That's exactly what rubric configuration is for. Create state-specific projects — Texas disclosures, California rate rules, New York licensing requirements — each with their own rubrics, reviewers, and immutable audit trail. One platform, 50 rule sets, zero gaps." },
      { question: "What about multi-channel insurance marketing?", answer: "Email, SMS, scripted calls — the AI Production Gate applies the same rubrics regardless of channel. A misleading coverage claim is blocked whether it's in an email body or an SMS template. Channel-agnostic compliance enforcement." },
      { question: "How quickly can we launch?", answer: "Most insurance teams are live in under two weeks. We provide rubric templates for common insurance compliance scenarios — coverage claims, rate advertising, disclosure requirements — that you customize to your specific policies and state footprint." },
    ],
    relatedPersonas: ["finserv", "healthcare", "compliance-officer"],
    relatedGlossary: ["ai-outbound-compliance", "blocked-verdict", "audit-ready-review"],
    relatedComparison: "ai-outbound-compliance-vs-legal-review",
    relatedIntegration: "hubspot-sales-hub",
  },

  "lending": {
    type: "industry",
    badge: "Lending",
    title: "AI Production Gate for Lending & Collections",
    subtitle: "Your AI just quoted a borrower 3.9% APR. Your actual rate is 6.2%. Bookbag catches rate hallucinations before they become TILA violations.",
    problemNarrative: "Your AI outreach tool sent 800 pre-qualification emails to borrowers last Tuesday. Twelve of them quoted APR ranges that don't match any product you offer. Three promised 'no hidden fees' on a product with origination fees. A borrower screenshotted one and filed a CFPB complaint. TILA doesn't distinguish between a human typo and an AI hallucination — it's a violation either way.",
    exampleMessage: {
      text: "\"Congratulations! You've been pre-approved for a personal loan up to $25,000 at a fixed rate of 3.9% APR with no origination fees. Apply now — this offer expires Friday.\"",
      flags: ["APR does not match any current product parameters (actual range: 5.99-24.99%)", "'No origination fees' contradicts product terms (2-6% origination fee)", "'Pre-approved' language without required Reg B disclosures", "Artificial urgency ('expires Friday') may violate UDAP standards"],
      verdict: "BLOCKED → compliance SME authority escalation required",
    },
    metaTitle: "Bookbag for Lending & Collections | AI Quality Gate",
    metaDescription: "Bookbag gates AI lending and collections outbound for compliance. Catch rate misrepresentations, missing disclosures, and prohibited language.",
    painPoints: [
      { title: "Your AI hallucinates rates that don't exist", description: "The model quoted 3.9% APR. Your actual rate floor is 5.99%. A borrower relied on that number, applied, got a different rate, and filed a CFPB complaint. TILA doesn't have an 'AI made a mistake' exception. That's a violation." },
      { title: "TCPA exposure multiplies with AI volume", description: "AI-generated texts to borrowers must comply with consent rules, timing windows, and required identification. Your AI doesn't know it's 9:15 PM in the borrower's time zone. One wrong text is a $500-$1,500 per-message statutory damage." },
      { title: "Collections language the AI doesn't know is illegal", description: "FDCPA prohibits threatening, harassing, or deceptive language. Your AI writes 'failure to respond may result in further action' — which reads like a threat to a consumer and a violation to a regulator. The AI thinks it sounds professional." },
    ],
    howItHelps: [
      { title: "Every rate and term checked against your actual products", description: "The AI Production Gate flags APR claims, fee references, and term descriptions against your approved product parameters. If the AI quotes a rate you don't offer, it's blocked before it reaches the borrower." },
      { title: "TCPA-aware gating for every text and script", description: "AI-generated texts and call scripts are evaluated for consent compliance, timing rules, and required identification. Violations trigger a blocked verdict with authority escalation to your compliance team." },
      { title: "FDCPA compliance baked into every collection message", description: "Prohibited language patterns — threats, harassment indicators, deceptive phrasing — are caught by the AI Production Gate. Blocked items route to compliance SMEs with evidence and recommended corrections." },
    ],
    bestFor: [
      "Consumer lending platforms using AI for borrower outreach",
      "Mortgage companies with AI-generated marketing",
      "Collections agencies deploying AI-assisted communications",
    ],
    notFor: [
      "B2B lending with no consumer-facing AI communications",
      "Internal loan processing without customer touchpoints",
    ],
    faqs: [
      { question: "Does Bookbag verify actual loan terms?", answer: "You define the approved parameters — rate ranges, fee structures, term lengths, product names. The AI Production Gate flags anything the AI generates that falls outside those parameters. If your AI quotes a rate you don't offer, it's blocked. If it omits a required disclosure, it's blocked. Your rubrics, your rules, enforced on every message." },
      { question: "How does this work for collections?", answer: "Configure FDCPA-aligned rubrics that catch threatening language, harassment patterns, deceptive phrasing, and time-of-day violations. Blocked items route to compliance SMEs with the flagged text, the specific violation, and recommended corrections. Every decision hits the immutable audit trail." },
      { question: "What about state-specific lending rules?", answer: "Create state-specific projects with rubrics matching local regulations — usury caps, required disclosures, prohibited language. Each project maintains its own audit trail and rubric versioning. One platform, every jurisdiction." },
    ],
    relatedPersonas: ["finserv", "collections", "compliance-officer"],
    relatedGlossary: ["tcpa-ai-compliance", "ai-audit-trail", "sme-escalation"],
    relatedComparison: "bookbag-vs-manual-review",
    relatedIntegration: "apollo",
  },

  "collections": {
    type: "industry",
    badge: "Collections",
    title: "AI Production Gate for Collections",
    subtitle: "Your AI just told a debtor 'failure to respond will result in legal action.' That's an FDCPA violation. Bookbag catches it before delivery.",
    problemNarrative: "Your AI collections engine sent 1,200 payment reminder texts last night. Fourteen of them contained 'further action will be taken' — language the CFPB considers an implied threat. Eight were sent after 9 PM in the consumer's time zone. You find out Monday morning when a consumer attorney files a class action citing your AI-generated messages as exhibits.",
    exampleMessage: {
      text: "\"FINAL NOTICE: Your account is seriously past due. If we do not receive payment within 48 hours, we will be forced to escalate this matter and report to all three credit bureaus. Call immediately to avoid further consequences.\"",
      flags: ["Implied threat of action ('forced to escalate') violates FDCPA §806", "'FINAL NOTICE' framing may constitute deceptive practice under FDCPA §807", "'Report to all three credit bureaus' — threatening action not yet authorized", "Urgency language ('48 hours', 'immediately') designed to pressure consumer"],
      verdict: "BLOCKED → compliance SME authority escalation required",
    },
    metaTitle: "AI Production Gate for Collections | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI collections communications for FDCPA compliance. Catch prohibited language, harassment, and deceptive practices before delivery.",
    painPoints: [
      { title: "Your AI writes threats it thinks sound professional", description: "The model generated 'failure to respond may result in further action.' To the AI, that's firm but polite. To a consumer attorney, it's an FDCPA §806 violation — an implied threat of action not authorized or intended. One text becomes Exhibit A in a class action." },
      { title: "Timing and frequency rules your AI doesn't track", description: "Collections outreach has strict rules: no contact before 8 AM or after 9 PM in the consumer's time zone, no more than 7 calls in 7 days per account. Your AI doesn't know any of this. It just sends when the queue tells it to." },
      { title: "The CFPB is explicitly targeting AI-generated collections", description: "The CFPB has stated that AI-generated communications are subject to the same FDCPA and UDAP standards as human-written ones. They're not writing new rules — they're enforcing existing ones on a channel that has zero supervision." },
    ],
    howItHelps: [
      { title: "Every threatening or deceptive pattern caught before delivery", description: "The AI Production Gate flags implied threats, harassment indicators, deceptive framing, and prohibited language patterns. Your AI can't send 'further action will be taken' because that phrase triggers a blocked verdict before it leaves the queue." },
      { title: "Over-contact and timing violations prevented at the gate", description: "Track communication patterns and flag potential frequency violations before messages send. Time-of-day rules are enforced per consumer time zone. The message doesn't move until it's compliant." },
      { title: "Every collection communication documented in an immutable audit trail", description: "Every AI-generated message, its verdict, any corrections, and the reviewer's identity — all timestamped and version-stamped. When the CFPB examiner asks for your supervision records, you export a file, not a story." },
    ],
    bestFor: [
      "Debt collection agencies using AI-assisted outreach",
      "FinTech platforms with automated collection workflows",
      "Collections departments at lending institutions",
    ],
    notFor: [
      "B2B collections (typically fewer regulatory constraints)",
      "Teams not using AI to generate collection communications",
    ],
    faqs: [
      { question: "Can Bookbag prevent FDCPA violations?", answer: "The AI Production Gate catches prohibited language patterns — implied threats, harassment, deceptive framing — before they reach consumers. It doesn't replace your compliance program, but it systematically eliminates the most common FDCPA violations from AI-generated output. Your rubrics define what's prohibited; the gate enforces it on every message." },
      { question: "How does this handle call scripts?", answer: "Same as emails and texts. AI-generated call scripts enter the gate, receive a safe_to_deploy / needs_fix / blocked verdict, and get gold-standard corrections if needed. Every decision lands in the immutable audit trail. The channel doesn't matter — the compliance standard does." },
      { question: "What about state-specific collection rules?", answer: "Create state-specific projects with rubrics matching local collection laws. Some states have stricter harassment definitions, different statute of limitations rules, or additional disclosure requirements. Each project enforces its own rules with its own immutable audit trail." },
    ],
    relatedPersonas: ["lending", "finserv", "compliance-officer"],
    relatedGlossary: ["ai-outbound-compliance", "blocked-verdict", "rubric-versioning"],
    relatedComparison: "ai-outbound-compliance-vs-legal-review",
    relatedIntegration: "outreach",
  },

  "healthcare": {
    type: "industry",
    badge: "Healthcare",
    title: "AI Production Gate for Healthcare Marketing",
    subtitle: "Your AI just told a patient your treatment 'eliminates chronic pain.' The FTC calls that an unsubstantiated health claim. Bookbag catches it first.",
    problemNarrative: "Your AI patient outreach tool sent 600 appointment reminder emails that included 'our treatment has a 95% success rate.' That number came from nowhere — your actual published outcomes data shows 67% improvement at 6 months. A patient who didn't improve is now citing that email in a complaint to your state medical board. The FTC Health Claims Act requires 'competent and reliable scientific evidence' for every claim. Your AI just made one up.",
    exampleMessage: {
      text: "\"Hi Jennifer, based on your recent consultation, our advanced therapy program can significantly reduce your symptoms within 2-3 weeks. 94% of our patients report complete relief. Schedule your first session today — your insurance is pre-verified for full coverage.\"",
      flags: ["Unsubstantiated efficacy claim ('94% complete relief') — no clinical evidence cited", "Outcome guarantee ('significantly reduce symptoms within 2-3 weeks')", "Insurance coverage claim without verification ('pre-verified for full coverage')", "Missing required disclaimers for health outcome claims"],
      verdict: "BLOCKED → clinical SME authority escalation required",
    },
    metaTitle: "Bookbag for Healthcare Marketing | AI Quality Gate",
    metaDescription: "Bookbag gates AI healthcare marketing for compliance. Catch prohibited health claims, misleading outcomes, and ensure communications meet standards.",
    painPoints: [
      { title: "Your AI fabricates clinical outcomes", description: "The model wrote '95% success rate' when your actual published data shows 67% improvement at 6 months. A patient cited that email in a state medical board complaint. The FTC requires 'competent and reliable scientific evidence' for health claims — and your AI just invented a statistic." },
      { title: "FTC Health Claims Act enforcement is aggressive and specific", description: "The FTC doesn't just require that health claims be true — they require that you have substantiation before you make the claim. AI-generated content almost never meets this standard. Every unsubstantiated efficacy claim is a potential enforcement action." },
      { title: "One misleading message destroys years of patient trust", description: "Patients trust healthcare communications differently than marketing. When your AI promises outcomes your practice can't deliver, the damage isn't just legal — it's reputational. That patient tells their network, leaves a review, and files a complaint." },
    ],
    howItHelps: [
      { title: "Every health claim checked against your approved clinical language", description: "The AI Production Gate flags treatment efficacy claims, outcome promises, and health benefit descriptions against your approved clinical language library. If the AI invents a statistic or overpromises an outcome, it's blocked." },
      { title: "FTC and state medical advertising rules enforced on every message", description: "Configure rubrics aligned with FTC health claims requirements, state medical advertising rules, and your organization's clinical communication policies. Every AI-generated message passes through the same compliance gate." },
      { title: "Blocked messages route to clinical SMEs with full evidence", description: "Flagged messages go to your clinical reviewers with the specific claim, the rubric it violated, evidence quotes, and recommended corrections. Human authority makes the final call — with the context they need to do it quickly and accurately." },
    ],
    bestFor: [
      "Healthcare marketing agencies using AI content generation",
      "HealthTech platforms with AI-generated patient outreach",
      "Telehealth companies using AI for appointment scheduling and follow-ups",
    ],
    notFor: [
      "Clinical communication systems (EHR messaging, care coordination)",
      "Internal healthcare operations without patient-facing AI output",
    ],
    faqs: [
      { question: "Does Bookbag handle HIPAA compliance?", answer: "Bookbag gates AI-generated marketing content for claims accuracy, disclosure requirements, and clinical language compliance. For HIPAA-specific data handling and PHI requirements, that's your compliance team's domain. Our role is ensuring no AI-generated message makes a health claim your organization can't substantiate." },
      { question: "Can clinical SMEs review blocked messages?", answer: "That's exactly how authority escalation works. Blocked messages route to your designated clinical reviewers with the flagged claim, the rubric it violated, evidence quotes, and recommended corrections. Your clinical experts make the final call. Every decision is documented in the immutable audit trail." },
      { question: "What about different specialties?", answer: "Create specialty-specific projects — dental, mental health, general practice, orthopedics — each with their own rubrics, approved clinical language libraries, and reviewer pools. A dermatology claim gets evaluated against dermatology standards, not general practice rules. Each project maintains its own immutable audit trail." },
    ],
    relatedPersonas: ["insurance", "finserv", "compliance-officer"],
    relatedGlossary: ["ai-hallucination-detection", "sme-escalation", "ai-brand-safety"],
    relatedComparison: "human-review-vs-automated-qa",
    relatedIntegration: "hubspot-sales-hub",
  },

  "b2b-saas": {
    type: "industry",
    badge: "B2B SaaS",
    title: "AI Production Gate for B2B SaaS",
    subtitle: "Your AI told a prospect you integrate with Snowflake. You don't. Bookbag catches hallucinated features before they become broken promises.",
    problemNarrative: "Your AI SDR told a VP of Engineering at a Series D company that your product has a native Snowflake integration and SOC 2 Type II certification. You have neither. The prospect brought it up on the demo call. Your AE had to backpedal in front of the entire buying committee. That deal is dead, and the prospect's CISO just told three other CISOs in their Slack community.",
    exampleMessage: {
      text: "\"Hi Rachel, I see Meridian just migrated to Snowflake — great move. Our platform integrates natively with Snowflake and can cut your data pipeline latency by 70%. We're SOC 2 Type II certified, so your security team will love us. Free to chat Thursday?\"",
      flags: ["Snowflake integration does not exist in current product", "SOC 2 Type II certification claim is false (currently Type I only)", "Unsubstantiated performance claim ('70% latency reduction')", "Snowflake migration claim unverifiable"],
      verdict: "BLOCKED → SME review required",
    },
    metaTitle: "AI Production Gate for B2B SaaS | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI B2B SaaS outbound for quality and brand safety. Catch hallucinated features, inaccurate claims, and off-brand messaging before it ships.",
    painPoints: [
      { title: "Your AI sells features you don't have", description: "The model told a prospect you integrate with Snowflake. You don't. It claimed SOC 2 Type II. You're Type I. These aren't minor inaccuracies — they surface on demo calls, in security reviews, and in procurement questionnaires. One hallucinated feature tanks the deal and poisons the account." },
      { title: "50 reps, 3 AI tools, zero brand consistency", description: "Each rep uses AI differently. The messaging that ships from your org sounds like it was written by 50 different companies. No single source of truth for approved positioning, competitive claims, or product language." },
      { title: "Bad personalization is worse than no personalization", description: "Your AI writes 'I saw you're expanding into APAC' to a company that just laid off their APAC team. The prospect doesn't think 'bad AI' — they think 'this company doesn't care enough to get the basics right.' Pipeline quality tanks." },
    ],
    howItHelps: [
      { title: "Every product claim checked against your actual feature set", description: "The AI Production Gate flags integration references, feature claims, certification mentions, and pricing against your approved product facts. If the AI hallucinates a feature, it's blocked before it ships." },
      { title: "Brand voice enforced across every rep and tool", description: "Define tone, terminology, competitive positioning, and messaging standards in your rubrics. Every AI-generated message — regardless of which rep or tool produced it — passes through the same gate. One voice, every time." },
      { title: "A growing library of messages that actually convert", description: "Every human correction becomes an approved template. Over time, your approved messaging library grows with verified, on-brand, high-converting examples. Your AI references these — and your safe_to_deploy rate climbs." },
    ],
    bestFor: [
      "B2B SaaS companies using AI for sales outreach",
      "Product-led growth teams with AI-generated user communications",
      "SaaS marketing teams running AI-powered campaigns",
    ],
    notFor: [
      "B2B SaaS with no AI-generated customer communications",
      "Early-stage startups without established brand guidelines",
    ],
    faqs: [
      { question: "Can Bookbag check product accuracy?", answer: "That's one of the core use cases. Load your approved product facts — feature list, integration catalog, pricing, certifications — into the rubric. The AI Production Gate flags anything that contradicts your facts or claims something that doesn't exist. Hallucinated features get a blocked verdict before they reach a prospect's inbox." },
      { question: "How does this help with brand consistency?", answer: "You define tone, terminology, competitive positioning, and messaging rules in your rubrics. Every AI-generated message passes through the same gate regardless of which rep or tool produced it. Corrections build an approved language library that becomes your single source of truth. Consistency at scale." },
      { question: "What's the actual ROI?", answer: "Three places. First, higher conversion rates because prospects receive accurate, on-brand messages instead of hallucinated nonsense. Second, fewer blown deals from false feature claims surfacing on demo calls. Third, your AI improves faster because every correction exports as training data. The safe_to_deploy rate climbs with every calibration cycle." },
    ],
    relatedPersonas: ["ai-sdr-vendors", "revops", "sales-enablement"],
    relatedGlossary: ["ai-message-quality", "gold-standard-rewrites", "taxonomy-config"],
    relatedComparison: "bookbag-vs-prompt-engineering",
    relatedIntegration: "apollo",
  },

  // ── Role ──────────────────────────────────────────────────────
  "vp-product": {
    type: "role",
    badge: "VP of Product",
    title: "Bookbag for VPs of Product",
    subtitle: "Enterprise wants audit trails, governance, and human oversight. Build it yourself in 6 months — or ship it next quarter with Bookbag.",
    problemNarrative: "Your biggest enterprise prospect just told your AE: 'We love the product, but our CISO needs to see documented human oversight of every AI-generated message before we can sign.' You don't have that. Building it means pulling 3 engineers off your core roadmap for two quarters. Your competitor ships it next month. That's not a feature gap — it's a deal-losing, roadmap-destroying emergency.",
    exampleMessage: {
      text: "\"Hi Lisa, I noticed DataStream just completed their Series B — congrats! Our AI-powered analytics platform can help you scale your data infrastructure 5x faster than building in-house. We're already helping companies like Stripe process 10M+ events daily.\"",
      flags: ["Series B claim unverifiable", "Unsubstantiated performance claim ('5x faster')", "Customer name-dropping without approval (Stripe)", "Specific metric ('10M+ events') unverified for named customer"],
      verdict: "BLOCKED → SME review required",
    },
    metaTitle: "AI Production Gate for VPs of Product | Bookbag Intelligence",
    metaDescription: "Bookbag gives VPs of Product an enterprise-ready AI governance layer. Ship audit trails, quality controls, and compliance gating as product capabilities.",
    painPoints: [
      { title: "Enterprise procurement kills deals you should be closing", description: "The product is ready. The champion is sold. Then procurement asks: 'Show us your audit trail for AI-generated communications. Show us the human oversight documentation.' You have nothing. The deal stalls for 6 months while you build what should already exist." },
      { title: "Building review infrastructure devours your roadmap", description: "Standing up annotators, calibration workflows, rubric versioning, and an authority escalation lane takes 3 engineers, two quarters, and a budget your CFO hasn't approved. That's time and money not spent on your core product." },
      { title: "Your competitors are shipping quality controls — you're not", description: "The vendor who can say 'every AI message passes through human authority with an immutable audit trail' wins the enterprise deal. The one who says 'we're working on it' loses. Quality controls are the new table stakes." },
    ],
    howItHelps: [
      { title: "Enterprise-ready in weeks, not quarters", description: "Ship an immutable audit trail, authority escalation to SMEs, and evidence-based safe_to_deploy / needs_fix / blocked verdicts as product capabilities — without pulling a single engineer off your core roadmap." },
      { title: "Turn quality into revenue with a premium SKU", description: "Package the AI Production Gate as 'Certified Outbound' or 'Enterprise QA.' Your customers pay for it. You get expansion revenue and a moat your competitors can't replicate with prompt engineering." },
      { title: "Structured training data that makes your AI smarter", description: "Every human correction exports as ML-ready datasets — SFT pairs, DPO preference data, ranking signals. Your AI models improve continuously with real human authority signals, not synthetic data." },
    ],
    bestFor: [
      "Product leaders at AI outbound/SDR vendors",
      "VPs building enterprise-ready AI products",
      "Product teams that need quality infrastructure fast",
    ],
    notFor: [
      "Product teams with no AI-generated customer-facing output",
      "Teams that already have mature internal QA operations",
    ],
    faqs: [
      { question: "How long does integration take?", answer: "Most teams start with a batch upload pilot — days, not weeks. The integration is content in, verdicts out. No deep engineering required for the initial setup. You can be running AI-generated messages through the gate before your next sprint planning." },
      { question: "Can we make this part of our product?", answer: "That's the play. Package Bookbag's output — verdicts, immutable audit trails, quality metrics — as features within your own product under your own brand. You own the data and the customer relationship. We're the infrastructure; you're the product." },
      { question: "What about our engineering roadmap?", answer: "That's the whole point. Bookbag handles the review infrastructure — annotators, calibration, rubric versioning, authority escalation — so your engineering team stays on your core product. You don't build a QA pipeline from scratch. You plug into one." },
    ],
    relatedPersonas: ["ai-sdr-vendors", "head-of-cs", "sequencing-platforms"],
    relatedGlossary: ["ai-production-gate", "safe-to-deploy", "sft-export"],
    relatedComparison: "bookbag-vs-internal-qa",
    relatedIntegration: "outreach",
  },

  "head-of-cs": {
    type: "role",
    badge: "Head of CS",
    title: "Bookbag for Heads of Customer Success",
    subtitle: "Your biggest customer just threatened to churn because AI damaged their sender reputation. Bookbag gives you the data to prevent that — and the proof to save the account.",
    problemNarrative: "Your $180K ARR customer's AI-generated sequences blacklisted two of their sending domains last month. They're on a call with your CS lead right now, asking what you're going to do about it. Your CS lead has no data — no record of what was caught, what slipped through, or what's improving. The customer asks 'How do I know this won't happen again?' and the honest answer is: you don't.",
    exampleMessage: {
      text: "\"Hey Tom, saw that CloudScale just got hit with layoffs — tough times. On the bright side, companies going through transitions like yours see massive ROI from our automation platform. Want to chat about how we can help you do more with less?\"",
      flags: ["Insensitive reference to layoffs", "Exploitative framing of company difficulty", "Unsubstantiated ROI claim", "Tone violation: opportunistic during negative event"],
      verdict: "BLOCKED → needs_fix: rewrite with appropriate tone, remove layoff reference",
    },
    metaTitle: "Bookbag for Customer Success Leaders | AI Quality Gate",
    metaDescription: "Bookbag helps CS teams reduce AI-driven churn. Provide customers with quality proof, escalation lanes, and evidence their AI outbound is monitored.",
    painPoints: [
      { title: "AI quality failures are your #1 churn driver and you can't see them coming", description: "A customer's AI outbound blacklists their domain, or sends an embarrassing hallucinated message to a key account. You find out when they schedule a cancellation call. By then, trust is already gone." },
      { title: "Customers ask 'what did you catch?' and you have nothing to show", description: "When a customer complains about AI quality, you have no data — no record of what was flagged, what was fixed, what slipped through. You're defending the product with anecdotes instead of evidence." },
      { title: "Quality escalations live in Slack threads that nobody can find", description: "Customer reports a bad AI message. It goes to a Slack channel. Someone says they'll look into it. Three days later, nobody did. No triage, no tracking, no resolution documentation. The customer follows up and you're scrambling." },
    ],
    howItHelps: [
      { title: "Turn retention calls into expansion conversations", description: "Show customers exactly what the AI Production Gate caught and fixed — safe_to_deploy / needs_fix / blocked rates, failure categories, and quality improvements over time. When you can prove their block rate dropped from 22% to 4%, that's a QBR win, not a churn risk." },
      { title: "See quality problems before customers feel them", description: "Monitor quality trends across your customer base in real time. Spot a spike in hallucination rates or tone violations before any customer notices. Address it proactively — and tell the customer you already fixed it." },
      { title: "Replace Slack chaos with a documented escalation lane", description: "Quality issues follow a structured path: flagged by the AI Production Gate, routed to authority escalation, reviewed by an SME, resolved with documented evidence. Every step is tracked in an immutable audit trail. No more lost threads." },
    ],
    bestFor: [
      "CS leaders at AI outbound vendors",
      "Customer success teams managing AI product quality",
      "Heads of CS dealing with AI-driven churn pressure",
    ],
    notFor: [
      "CS teams at companies without AI-generated customer output",
      "Support roles focused on product bugs rather than content quality",
    ],
    faqs: [
      { question: "How does this actually reduce churn?", answer: "Two ways. First, the AI Production Gate catches quality issues before they reach your customers' recipients — so the deliverability damage and embarrassing messages never happen. Second, when you can show a customer their safe_to_deploy rate improved from 70% to 92%, the retention conversation becomes an expansion conversation. Proof beats promises." },
      { question: "What reports can I show customers?", answer: "Export audit reports with safe_to_deploy / needs_fix / blocked distribution, top failure categories, quality trends over time, and the specific improvements made. These aren't just dashboards — they're QBR materials that prove the value of your AI quality controls in hard numbers." },
      { question: "How does the escalation workflow change?", answer: "Completely. Instead of a Slack message that disappears into a thread, quality issues follow a structured authority escalation path: flagged by the gate, routed to the right SME, reviewed with full evidence, resolved with documented rationale. Every step hits the immutable audit trail. Your CS team can trace any issue from flag to resolution." },
    ],
    relatedPersonas: ["vp-product", "revops", "ai-sdr-vendors"],
    relatedGlossary: ["needs-fix", "blocked-verdict", "ai-message-quality"],
    relatedComparison: "bookbag-vs-manual-review",
    relatedIntegration: "gong",
  },

  "revops": {
    type: "role",
    badge: "RevOps",
    title: "Bookbag for Revenue Operations",
    subtitle: "Your CRO wants to 10x AI outbound. Your CEO wants proof it's safe. Bookbag gives you the controls and dashboards to say yes to both.",
    problemNarrative: "Three teams are using three different AI tools with zero shared quality standards. One team's AI claimed a competitor integration that doesn't exist. Another team's AI is triggering spam filters with aggressive CTAs. You found out about both from customer complaints, not from any system you control. Leadership wants to expand AI outbound, but you can't even tell them the current quality baseline.",
    exampleMessage: {
      text: "\"Hi Alex, I noticed your team uses Salesforce — our native integration syncs in real-time and most teams see a 45% reduction in manual data entry within the first month. Happy to show you a quick demo?\"",
      flags: ["'Native integration' claim needs verification against approved product facts", "Unsubstantiated performance claim ('45% reduction')", "'Most teams' framing implies statistical evidence that may not exist"],
      verdict: "needs_fix → verify integration claim, substantiate or remove metric",
    },
    metaTitle: "AI Production Gate for RevOps Teams | Bookbag Intelligence",
    metaDescription: "Bookbag gives RevOps teams standardized quality controls for AI outbound. Dashboards, audit trails, and repeatable review processes across programs.",
    painPoints: [
      { title: "Three teams, three AI tools, zero quality standards", description: "SDR team uses one AI tool, marketing uses another, partnerships uses a third. Each produces wildly different quality. You have no shared rubrics, no consistent review process, and no way to measure what 'good' even means across the org." },
      { title: "Leadership wants to scale AI but needs proof it's safe", description: "Your CRO wants to 10x outbound volume with AI. Your CEO read an article about AI hallucinations and wants controls. You need data — not a pitch deck — to make the case that expanding AI outbound won't blow up in everyone's face." },
      { title: "Spot-checking 50 messages out of 10,000 isn't a process", description: "At 100 AI messages a week, manual review works. At 10,000 a month across multiple teams and tools, you're reviewing 0.5% and hoping for the best. That's not quality assurance — it's a prayer." },
    ],
    howItHelps: [
      { title: "One gate, one standard, every team", description: "Every AI-generated message — regardless of which rep, tool, or team produced it — passes through the same AI Production Gate with the same rubrics. Consistent safe_to_deploy / needs_fix / blocked verdicts across the entire org." },
      { title: "The dashboards that get AI outbound approved", description: "Safe_to_deploy rates, failure categories, quality trends over time, reviewer performance, SLA adherence — the exact data your CRO and CEO need to feel confident expanding AI usage. Exportable for executive reporting." },
      { title: "Human authority where it matters, auto-approve where it doesn't", description: "Safe messages clear instantly. Human reviewers focus only on needs_fix and blocked items — the ones that actually need attention. You scale to 100K messages without scaling your review team proportionally." },
    ],
    bestFor: [
      "RevOps teams managing AI outbound across multiple tools or reps",
      "Operations leaders building the case for AI outbound expansion",
      "Teams that need reporting and controls for AI-generated content",
    ],
    notFor: [
      "Single-rep teams with low AI message volume",
      "Teams looking for a CRM or sequencing tool (Bookbag is a quality gate, not a sending tool)",
    ],
    faqs: [
      { question: "What dashboards does Bookbag provide?", answer: "Everything you need to make the case to leadership: safe_to_deploy / needs_fix / blocked rates across projects, top failure categories, quality trends over time, reviewer performance, and SLA adherence. All exportable. These are the numbers that get AI outbound expansion approved." },
      { question: "How does this integrate with our existing stack?", answer: "The AI Production Gate sits between generation and sending. Upload messages from any tool — Apollo, Outreach, Salesloft, custom scripts — receive verdicts, and route approved messages back to your sending infrastructure. It's tool-agnostic by design." },
      { question: "Can I set different standards for different teams?", answer: "Absolutely. Create separate projects with different rubrics — SDR team gets one standard, marketing gets another, partnerships gets a third. Each team or program gets its own quality rules while you see aggregate metrics across the entire org. One dashboard, differentiated standards." },
    ],
    relatedPersonas: ["sales-enablement", "compliance-officer", "b2b-saas"],
    relatedGlossary: ["qa-review-workflow", "taxonomy-config", "safe-to-deploy"],
    relatedComparison: "bookbag-vs-internal-qa",
    relatedIntegration: "apollo",
  },

  "compliance-officer": {
    type: "role",
    badge: "Compliance Officer",
    title: "Bookbag for Compliance Officers",
    subtitle: "The examiner asks: 'How do you supervise AI-generated communications?' Bookbag gives you an answer that isn't 'we spot-check.'",
    problemNarrative: "Your sales team deployed an AI outbound tool three months ago. It's sent 15,000 messages. You've reviewed none of them systematically. When the examiner asks for supervision documentation of AI-generated client communications, you're going to hand them Slack screenshots and a spreadsheet your associate built last week. That's not a compliance program — that's a finding waiting to happen.",
    exampleMessage: {
      text: "\"Dear Mr. Chen, as a valued client, I wanted to personally inform you about our new tax-advantaged investment vehicle that offers guaranteed principal protection with above-market returns. Based on your portfolio profile, this could save you $40,000+ annually in tax liability.\"",
      flags: ["'Guaranteed principal protection' — promissory language (FINRA 2210)", "'Above-market returns' without risk disclosure", "Specific tax savings claim ('$40,000+') without basis", "'Based on your portfolio profile' implies suitability analysis without documentation"],
      verdict: "BLOCKED → compliance SME authority escalation required",
    },
    metaTitle: "Bookbag for Compliance Officers | AI Quality Gate",
    metaDescription: "Bookbag gives compliance officers systematic AI outbound supervision. Audit trails, SME escalation, evidence-based verdicts, and rubric-driven enforcement.",
    painPoints: [
      { title: "15,000 AI messages shipped with zero documented supervision", description: "Your sales team deployed an AI outbound tool. It's been sending for months. You've reviewed none of it systematically. When the examiner asks for supervision records, the answer can't be 'we trusted the AI.' That's a finding — and it's yours." },
      { title: "You can't review 10,000 messages a month manually — but you can't skip it", description: "Your compliance team reviews 200 communications a month. AI just made it 10,000. You can't hire 50x the reviewers. But skipping review on AI-generated output is a supervision deficiency the moment a regulator looks at it." },
      { title: "Your audit trail is Slack threads and email chains", description: "Someone approved something in a Slack thread last Tuesday. Which version? Which rubric? Who signed off? Nobody knows. When the examiner asks for documented, timestamped, attributable supervision records, you have nothing that qualifies." },
    ],
    howItHelps: [
      { title: "Every AI message documented with full supervision evidence", description: "Every message gets a verdict, reviewer identity, timestamp, rubric version, and rationale — automatically. The immutable audit trail proves you supervised every AI-generated communication, not just the ones someone happened to spot-check." },
      { title: "Risk-based review that actually scales", description: "Safe messages auto-approve — no human touch needed. Your compliance team focuses exclusively on needs_fix and blocked items: the messages that actually carry risk. You review 100% of output while touching only 15-30% manually." },
      { title: "Your compliance policies become machine-enforced rubrics", description: "Turn your policies into rubrics that run on every message, every time. Version-stamped, auditable, consistently applied. When you update a policy, the new rubric version applies to all future messages — and the old version is preserved for historical examination." },
    ],
    bestFor: [
      "Compliance officers at regulated financial institutions",
      "Supervision leads responsible for AI communication oversight",
      "Risk and controls teams implementing AI governance",
    ],
    notFor: [
      "Legal teams reviewing contracts (Bookbag focuses on outbound communications)",
      "IT security teams (Bookbag is a content quality gate, not a security tool)",
    ],
    faqs: [
      { question: "Is the audit trail examination-ready?", answer: "Every decision includes: reviewer identity, timestamp, rubric version used, verdict, rationale, and any corrections. Exports are immutable and tenant-isolated. It's built for the examiner's desk — not just your internal dashboard. Consult your legal team on specific regulatory requirements for your jurisdiction." },
      { question: "Can we define our own compliance rubrics?", answer: "That's the foundation. The taxonomy system lets you codify your exact compliance policies — required disclosures, prohibited language, approval thresholds, escalation triggers. Every rubric is version-stamped, so you can trace exactly which rules applied to each decision at the moment it was made." },
      { question: "How does authority escalation work?", answer: "Messages classified as blocked route to your designated compliance SMEs with full context: the original message, the specific flagged issues, rubric citations, and evidence quotes. Your SME makes the final call — approve, fix, or permanently block — with documented rationale. Human authority is never bypassed." },
      { question: "What about multi-channel compliance?", answer: "Email, SMS, call scripts — the AI Production Gate applies the same rubrics and generates the same immutable audit trail regardless of channel. A prohibited claim is blocked whether it's in an email body, a text message, or a call script. One standard, every channel." },
    ],
    relatedPersonas: ["finserv", "insurance", "lending"],
    relatedGlossary: ["ai-audit-trail", "finra-ai-compliance", "rubric-versioning"],
    relatedComparison: "ai-outbound-compliance-vs-legal-review",
    relatedIntegration: "gong",
  },

  "sales-enablement": {
    type: "role",
    badge: "Sales Enablement",
    title: "Bookbag for Sales Enablement",
    subtitle: "Your reps have AI writing their outbound. Nobody has defined what 'good' looks like. Bookbag builds the approved messaging library from every correction.",
    problemNarrative: "A new rep used AI to personalize outbound to 200 accounts last week. Twelve messages claimed a feature you deprecated in Q3. Eight referenced a competitor comparison your legal team explicitly banned. You found out when a prospect forwarded one to your AE with 'Is this real?' Nobody is coaching the AI — and nobody is coaching the reps on what the AI gets wrong.",
    exampleMessage: {
      text: "\"Hi Jordan, I know managing a distributed sales team is challenging — especially with the pressure to hit Q4 numbers. Our platform helped Gong's team increase their outbound efficiency by 35% last quarter. Would love to show you how we could do the same for your team.\"",
      flags: ["Customer name-dropping without approval (Gong)", "Unsubstantiated performance claim ('35% outbound efficiency')", "'Last quarter' specificity implies access to non-public data", "Promissory framing ('do the same for your team')"],
      verdict: "needs_fix → remove customer name, substantiate or remove metric",
    },
    metaTitle: "Bookbag for Sales Enablement | AI Quality Gate",
    metaDescription: "Bookbag helps sales enablement teams build approved messaging libraries from AI corrections. Ensure on-brand, accurate outbound across your sales org.",
    painPoints: [
      { title: "AI gives reps the power to go off-brand at scale", description: "Before AI, a rep could write one bad email. Now they can write 200 in an afternoon — with hallucinated features, banned competitor comparisons, and off-brand positioning that you don't see until a prospect complains." },
      { title: "There's no single source of truth for 'good AI outbound'", description: "Every rep has their own definition of what good AI-generated messaging looks like. There's no approved library, no reference examples, no standard. You're enablement without the materials." },
      { title: "You find out about bad messages after they've done damage", description: "A prospect forwards a message claiming a feature you deprecated. An AE screenshots a competitor comparison your legal team banned. You're always reacting — never preventing. By the time you know, the damage is done." },
    ],
    howItHelps: [
      { title: "An approved messaging library that builds itself", description: "Every human correction through the AI Production Gate becomes a before/after pair. The corrected versions become your approved messaging library — searchable, categorized, and continuously growing. Reps and AI models reference real examples of what 'good' looks like." },
      { title: "Bad messages caught before they ship, not after they embarrass", description: "The AI Production Gate evaluates every AI-generated message against your rubrics before it enters the send queue. Off-brand tone, hallucinated features, banned claims — all caught and corrected proactively. You stop firefighting." },
      { title: "Real coaching material from real failures", description: "Export failure patterns, common AI mistakes, and expert corrections as training materials. Show reps the exact difference between what the AI generated and what the SME approved. That's not a slide deck — it's a specific, actionable coaching conversation." },
    ],
    bestFor: [
      "Sales enablement teams managing AI-assisted outbound",
      "Enablement leaders building messaging standards for AI tools",
      "Teams creating content libraries for sales AI",
    ],
    notFor: [
      "Teams managing only manually written sales collateral",
      "Enablement focused solely on product training (not messaging)",
    ],
    faqs: [
      { question: "How does the approved messaging library work?", answer: "Every correction through the AI Production Gate creates a before/after pair — the original AI output and the gold-standard rewrite. These accumulate into a searchable, categorized library of approved messaging. Reps reference it for examples. AI models reference it for training data. It grows with every batch and never goes stale." },
      { question: "Can we use corrections for sales training?", answer: "That's one of the highest-value outputs. Export real failure patterns — 'here's what the AI wrote about our Salesforce integration, here's what was wrong, here's what the SME approved instead.' That's not generic training. That's a specific coaching conversation a manager can have in a 1:1." },
      { question: "Does this replace sales enablement platforms?", answer: "No, and it's not trying to. The AI Production Gate focuses on message quality — catching what's wrong before it ships and building a library of what's right. It complements your enablement platform by providing the quality layer that ensures AI-generated content actually meets the standards you've defined." },
    ],
    relatedPersonas: ["revops", "b2b-saas", "vp-product"],
    relatedGlossary: ["gold-standard-rewrites", "annotator-calibration", "ai-message-quality"],
    relatedComparison: "rewrite-workflow-vs-prompt-tweaks",
    relatedIntegration: "salesloft",
  },
}

export function getPersona(slug) {
  return personas[slug] || null
}

export function getAllPersonaSlugs() {
  return Object.keys(personas)
}
