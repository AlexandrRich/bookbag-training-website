export const personas = {
  // ── Company Type ──────────────────────────────────────────────
  "ai-sdr-vendors": {
    type: "company",
    badge: "AI SDR Vendors",
    title: "AI Production Gate for AI SDR Vendors",
    subtitle: "Reduce churn, unlock enterprise trust, and ship a \"Certified Outbound\" SKU — without building workforce ops in-house.",
    metaTitle: "AI Production Gate for AI SDR Vendors | Bookbag Intelligence",
    metaDescription: "Bookbag gates every AI-generated outbound message before it ships. Reduce customer churn, protect deliverability, and add an enterprise-grade quality layer to your AI SDR platform.",
    painPoints: [
      { title: "Customer churn from bad output", description: "When AI messages hurt deliverability or trigger spam signals, customers blame the vendor and cancel." },
      { title: "Enterprise buyers demand controls", description: "Procurement asks for audit trails, governance policies, and proof of human oversight before signing." },
      { title: "No internal workforce ops", description: "Building a review team, calibration system, and QA pipeline from scratch is expensive and slow." },
    ],
    howItHelps: [
      { title: "New revenue SKU", description: "Package Bookbag as \"Certified Outbound\" — a premium tier your customers pay for." },
      { title: "Churn reduction", description: "Catch hallucinations, spammy tone, and risky claims before they damage your customers' sender reputation." },
      { title: "Enterprise readiness", description: "Ship an audit trail, SME escalation lane, and evidence-based verdicts — the controls story enterprises need." },
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
      { question: "Can we white-label Bookbag for our customers?", answer: "Bookbag provides the quality gate infrastructure. You can package the outputs (verdicts, rewrites, audit trails) as a premium feature or SKU within your own product." },
      { question: "How does this reduce customer churn?", answer: "By catching hallucinations, tone issues, and compliance violations before they ship, your customers experience fewer deliverability incidents and fewer embarrassing messages — the top drivers of churn for AI outbound vendors." },
      { question: "What does the integration look like?", answer: "You send AI-generated messages to Bookbag via upload or API. We return verdicts (safe/fix/block), gold rewrites, and audit trails. Most vendors start with a batch upload pilot before moving to continuous gating." },
      { question: "How fast is turnaround?", answer: "Standard SLA is 24–48 hours depending on your plan tier. Safe messages are auto-approved. Only needs_fix and blocked items require human review time." },
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
    subtitle: "Add an enterprise-grade quality layer to AI-generated sequences without slowing down your product.",
    metaTitle: "AI Production Gate for Sequencing Platforms | Bookbag Intelligence",
    metaDescription: "Bookbag adds human-authority QA to AI-powered sales sequences. Catch risky messages before they ship, protect sender reputation, and generate training data from corrections.",
    painPoints: [
      { title: "AI sequence quality varies wildly", description: "Personalization engines produce great output 80% of the time — but the other 20% includes hallucinations, wrong tone, or risky claims." },
      { title: "Sender reputation at stake", description: "Bad AI-generated sequences damage deliverability scores and get domains blacklisted." },
      { title: "No systematic review process", description: "Most teams rely on spot-checking or customer complaints to catch quality issues." },
    ],
    howItHelps: [
      { title: "Pre-send quality gate", description: "Every AI-generated sequence step passes through safe/fix/block routing before it reaches the send queue." },
      { title: "Deliverability protection", description: "Flag spammy language, missing unsubscribe compliance, and tone violations before they trigger spam filters." },
      { title: "Continuous improvement", description: "Corrections become training data. Export SFT and DPO pairs to retrain your models with human-approved quality signals." },
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
      { question: "Does Bookbag slow down sequence delivery?", answer: "Safe messages are auto-approved with no delay. Only messages flagged as needs_fix or blocked enter the review queue. Most teams see 70-85% auto-approval rates after initial calibration." },
      { question: "Can we use Bookbag on just the AI-generated steps?", answer: "Yes. You control what enters the gate. Most sequencing platforms route only AI-generated personalization and follow-up steps through Bookbag, not manually written templates." },
      { question: "How does training data export work?", answer: "Every human correction (rewrites, fixes, feedback) is exportable as SFT pairs, DPO preference data, or ranking signals. You own the exports and can use them to fine-tune your models." },
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
    subtitle: "Protect sender reputation and inbox placement by gating AI-generated cold emails before they ship.",
    metaTitle: "AI Production Gate for Cold Email Infrastructure | Bookbag Intelligence",
    metaDescription: "Bookbag prevents AI-generated cold emails from damaging deliverability. Gate every message through safe/fix/block routing with human authority and audit trails.",
    painPoints: [
      { title: "Deliverability is existential", description: "One bad campaign can blacklist domains and destroy months of warmup work. AI-generated content adds unpredictability." },
      { title: "Spam filter evolution", description: "Gmail and Yahoo bulk sender rules made bad outbound financially dangerous. AI copy that \"looks fine\" can still trigger spam signals." },
      { title: "Customer trust erosion", description: "When AI emails land in spam or contain hallucinations, customers blame the infrastructure provider." },
    ],
    howItHelps: [
      { title: "Pre-send gating", description: "Route every AI-generated email through Bookbag before it enters the send queue. Catch spam triggers, tone issues, and compliance violations." },
      { title: "Deliverability scoring", description: "Flag language patterns known to hurt inbox placement — spammy phrases, excessive links, missing compliance elements." },
      { title: "Approved copy library", description: "Build a library of human-approved email variations. Use these as training signals to improve AI generation over time." },
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
      { question: "How does Bookbag protect deliverability?", answer: "We flag language patterns that correlate with spam filter triggers, check for missing compliance elements (unsubscribe, sender identification), and catch hallucinated claims that could generate complaints. All before the email is sent." },
      { question: "Can Bookbag handle high volume?", answer: "Yes. The gate is designed for scale. Safe messages auto-approve instantly. Only flagged items enter the human review queue. We support millions of messages per month at the enterprise tier." },
      { question: "What about CAN-SPAM compliance?", answer: "Bookbag can be configured with CAN-SPAM rubrics that check for required elements (physical address, unsubscribe mechanism, honest subject lines). Missing elements are flagged as needs_fix or blocked depending on severity." },
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
    subtitle: "Turn AI coaching suggestions into verified, human-approved messaging standards your customers can trust.",
    metaTitle: "AI Production Gate for Email Coaching Platforms | Bookbag Intelligence",
    metaDescription: "Bookbag adds human authority to AI email coaching. Verify suggestions, build approved messaging libraries, and generate training data from expert corrections.",
    painPoints: [
      { title: "AI suggestions aren't always right", description: "Coaching models can suggest phrasing that sounds good but violates industry norms, brand guidelines, or compliance rules." },
      { title: "No verification layer", description: "Users take AI suggestions at face value. There's no checkpoint between suggestion and send." },
      { title: "Hard to improve without feedback loops", description: "Without structured human corrections, coaching models plateau in quality." },
    ],
    howItHelps: [
      { title: "Verified coaching standards", description: "Route AI-generated suggestions through expert review. Build a library of verified, approved messaging patterns." },
      { title: "Structured feedback loops", description: "Expert corrections become training data. Fix model weaknesses with real human preference signals." },
      { title: "Differentiated quality story", description: "\"Human-verified AI coaching\" is a stronger positioning than generic AI suggestions." },
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
      { question: "How is this different from A/B testing?", answer: "A/B testing measures outcomes after sending. Bookbag catches problems before sending. We gate the quality of AI suggestions, not just their performance metrics." },
      { question: "Can we feed corrections back into our coaching model?", answer: "Yes. Every expert correction is exportable as training data in SFT, DPO, and ranking formats. This creates a continuous improvement loop for your coaching AI." },
      { question: "What does 'verified coaching' look like in practice?", answer: "An expert reviews AI suggestions against your rubrics (tone, accuracy, compliance). Approved suggestions get a quality stamp. Rejected ones get a corrected version plus rationale." },
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
    subtitle: "Scale your deliverability audits and copy reviews with an AI production gate that provides evidence-based verdicts.",
    metaTitle: "AI Production Gate for Deliverability Agencies | Bookbag Intelligence",
    metaDescription: "Bookbag gives deliverability agencies a scalable QA engine for AI-generated outbound. Audit copy, flag compliance issues, and deliver evidence-based reports to clients.",
    painPoints: [
      { title: "Manual copy review doesn't scale", description: "Reviewing every AI-generated email by hand is slow and inconsistent as client volume grows." },
      { title: "Clients expect fast turnaround", description: "Deliverability audits need to be quick. Waiting days for copy review creates bottlenecks." },
      { title: "Hard to systematize quality standards", description: "Different reviewers apply different standards. No consistent rubric enforcement." },
    ],
    howItHelps: [
      { title: "Scalable QA engine", description: "Route client AI emails through Bookbag for consistent, rubric-based review at any volume." },
      { title: "Client-ready reports", description: "Export audit trails with verdicts, failure categories, and recommendations as deliverables for your clients." },
      { title: "Consistent standards", description: "Codify your deliverability rubrics in Bookbag. Every reviewer applies the same rules, every time." },
    ],
    bestFor: [
      "Email deliverability consulting firms",
      "Outbound agencies managing AI copy for multiple clients",
      "Cold email specialists who audit AI-generated campaigns",
    ],
    notFor: [
      "Agencies that only handle manual, non-AI copy",
      "Solo consultants with very low volume",
    ],
    faqs: [
      { question: "Can we use Bookbag across multiple clients?", answer: "Yes. Each client gets a separate project with its own rubrics, reviewers, and audit trail. Tenant isolation ensures no cross-client data exposure." },
      { question: "Can we brand the reports?", answer: "You receive structured export data (verdicts, failure categories, rewrites, recommendations) that you can incorporate into your own client deliverables and report templates." },
      { question: "How does pricing work for agencies?", answer: "Credits are pooled at the organization level. You allocate credits across client projects as needed. Most agencies start with a Growth plan and scale up." },
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
    subtitle: "FINRA-aware message gating for AI-generated outbound. Catch prohibited claims, missing disclosures, and promissory language before they ship.",
    metaTitle: "AI Production Gate for Financial Services | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI-generated financial services outbound with human authority and audit trails. Catch FINRA violations, prohibited claims, and missing disclosures before delivery.",
    painPoints: [
      { title: "FINRA 2210 compliance exposure", description: "AI-generated messages can include performance claims, guarantees, or omitted risk disclosures — all FINRA violations with serious penalties." },
      { title: "Advertising review bottlenecks", description: "Compliance teams already spend $300–$600 per FINRA review. AI volume multiplies the review burden." },
      { title: "Audit trail requirements", description: "Regulators expect documented supervision of customer communications, including AI-generated ones." },
    ],
    howItHelps: [
      { title: "Policy-driven gating", description: "Configure FINRA-specific rubrics. Every AI message is evaluated against your compliance policies before sending." },
      { title: "SME escalation with evidence", description: "Blocked messages route to compliance SMEs with rationale, evidence quotes, and rubric citations." },
      { title: "Immutable audit trail", description: "Every verdict, correction, and approval is timestamped and attributable. Ready for regulatory examination." },
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
      { question: "Does Bookbag replace FINRA compliance review?", answer: "No. Bookbag supports your compliance workflow by providing a systematic gate, rubric enforcement, and audit trail. Your compliance team retains final authority. We make their job faster and more consistent." },
      { question: "What types of violations does Bookbag catch?", answer: "Configurable rubrics can flag performance guarantees, promissory language, missing risk disclosures, unsubstantiated claims, and other FINRA 2210 violations. You define the rules; Bookbag enforces them." },
      { question: "How does this compare to existing compliance review costs?", answer: "FINRA standard review costs $300 per filing, expedited is $600. Bookbag's per-message cost is significantly lower while providing continuous monitoring rather than spot-check review." },
      { question: "Is the audit trail exportable?", answer: "Yes. Every decision includes who reviewed, when, which rubric version, the verdict, rationale, and any corrections. Exports are immutable and tenant-isolated." },
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
    subtitle: "Gate AI-generated insurance communications for prohibited claims, misleading language, and missing disclosures.",
    metaTitle: "AI Production Gate for Insurance Marketing | Bookbag Intelligence",
    metaDescription: "Bookbag prevents AI-generated insurance outbound from including prohibited claims or missing disclosures. Human authority, audit trails, and compliance rubrics for insurance marketing.",
    painPoints: [
      { title: "Misleading benefit claims", description: "AI can generate coverage promises, rate guarantees, or benefit descriptions that don't match actual policy terms." },
      { title: "State-by-state regulation complexity", description: "Insurance advertising rules vary by state, line of business, and distribution channel. AI doesn't know the nuances." },
      { title: "FTC and state AG enforcement", description: "Penalties for deceptive insurance marketing can exceed $50,000 per violation. One bad campaign creates massive exposure." },
    ],
    howItHelps: [
      { title: "Claims verification", description: "Flag benefit descriptions, rate references, and coverage language that doesn't match approved product terms." },
      { title: "Disclosure enforcement", description: "Ensure required disclaimers, licensing disclosures, and limitations language is present in every AI-generated communication." },
      { title: "Audit-ready supervision", description: "Document every review decision for regulatory examination. Prove you supervised AI-generated marketing communications." },
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
      { question: "Can Bookbag handle state-specific insurance rules?", answer: "Yes. Rubrics are configurable per project. You can create state-specific or line-of-business-specific rubrics that reflect your compliance requirements." },
      { question: "What about multi-channel insurance marketing?", answer: "Bookbag gates text-based content across email, SMS, and scripted communications. The same rubrics apply regardless of channel." },
      { question: "How quickly can we launch?", answer: "Most insurance teams launch a pilot in under 2 weeks. We provide templates for common insurance compliance rubrics that you can customize." },
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
    subtitle: "Prevent TILA, TCPA, and FDCPA violations in AI-generated lending communications before they reach borrowers.",
    metaTitle: "AI Production Gate for Lending & Collections | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI-generated lending and collections outbound for compliance. Catch rate misrepresentations, missing disclosures, and prohibited collection language.",
    painPoints: [
      { title: "Rate and term misrepresentation", description: "AI can hallucinate APRs, fees, or repayment terms that don't match actual loan products." },
      { title: "TCPA exposure", description: "AI-generated text messages and calls to borrowers must comply with strict consent and timing rules." },
      { title: "Collections language violations", description: "FDCPA prohibits threatening, harassing, or deceptive language. AI doesn't understand these boundaries without explicit rules." },
    ],
    howItHelps: [
      { title: "Rate and disclosure verification", description: "Flag rate claims, fee references, and term descriptions against approved product parameters." },
      { title: "TCPA-aware gating", description: "Evaluate AI-generated texts and scripts for consent compliance, timing rules, and required identification." },
      { title: "Collections compliance", description: "Catch prohibited language, threats, and deceptive phrasing in AI-generated collection communications." },
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
      { question: "Does Bookbag verify actual loan terms?", answer: "Bookbag evaluates AI-generated language against your configured rubrics. You define what rate ranges, fee structures, and terms are approved. We flag anything outside those parameters." },
      { question: "How does this work for collections?", answer: "Configure FDCPA-aligned rubrics that flag threatening language, time-of-day violations, and deceptive phrasing. Blocked items route to compliance SMEs for review." },
      { question: "What about state-specific lending rules?", answer: "Rubrics are project-configurable. Create state-specific projects with rules matching local regulations. Each maintains its own audit trail." },
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
    subtitle: "Prevent FDCPA violations and abusive language in AI-generated collection communications.",
    metaTitle: "AI Production Gate for Collections | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI-generated collections communications for FDCPA compliance. Catch prohibited language, harassment, and deceptive practices before they reach consumers.",
    painPoints: [
      { title: "FDCPA violation risk", description: "AI-generated collection messages can include threats, harassment, or deceptive practices that violate federal and state debt collection laws." },
      { title: "Consent and timing rules", description: "Collections outreach has strict rules about when, how, and how often you can contact consumers. AI doesn't track these constraints." },
      { title: "CFPB enforcement", description: "The CFPB actively pursues collection practices that use deceptive or abusive language, including AI-generated communications." },
    ],
    howItHelps: [
      { title: "Language compliance", description: "Flag threatening, harassing, or deceptive language patterns in AI-generated collection communications." },
      { title: "Frequency controls", description: "Track communication patterns and flag potential over-contact violations before messages are sent." },
      { title: "Evidence-based audit trail", description: "Document every AI-generated communication, its review status, and any corrections made — ready for regulatory examination." },
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
      { question: "Can Bookbag prevent FDCPA violations?", answer: "Bookbag evaluates AI-generated messages against your FDCPA-aligned rubrics and flags prohibited language patterns. This significantly reduces violation risk, though compliance ultimately depends on your rubric configuration and review processes." },
      { question: "How does this handle call scripts?", answer: "AI-generated call scripts are treated the same as emails and texts. They enter the gate, receive a verdict, and get corrections if needed — all with an audit trail." },
      { question: "What about state-specific collection rules?", answer: "Create state-specific rubrics within separate projects. Each state's rules are enforced independently with their own audit trail." },
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
    subtitle: "Gate AI-generated healthcare communications for HIPAA considerations, prohibited claims, and misleading health information.",
    metaTitle: "AI Production Gate for Healthcare Marketing | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI-generated healthcare marketing for compliance. Catch prohibited health claims, misleading outcomes, and ensure communications meet regulatory standards.",
    painPoints: [
      { title: "Unsubstantiated health claims", description: "AI can generate efficacy promises, outcome guarantees, or treatment descriptions that aren't clinically supported." },
      { title: "FTC Health Claims Act enforcement", description: "The FTC requires competent and reliable scientific evidence for health claims. AI-generated content rarely meets this standard." },
      { title: "Patient trust and brand safety", description: "Misleading healthcare communications erode patient trust and create liability exposure." },
    ],
    howItHelps: [
      { title: "Claims verification", description: "Flag treatment efficacy claims, outcome promises, and health benefit descriptions against your approved clinical language." },
      { title: "Regulatory rubric enforcement", description: "Configure rubrics aligned with FTC health claims requirements, state medical advertising rules, and your organization's policies." },
      { title: "SME clinical review", description: "Route blocked messages to clinical SMEs who provide medically accurate corrections with documented rationale." },
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
      { question: "Does Bookbag handle HIPAA compliance?", answer: "Bookbag evaluates AI-generated marketing content against your configured rubrics. For HIPAA-specific data handling requirements, consult your compliance team. Bookbag's role is gating message quality and claims accuracy." },
      { question: "Can clinical SMEs review blocked messages?", answer: "Yes. Blocked messages route to your designated SMEs with full context, evidence, and rubric citations. Clinical experts provide the final verdict and corrections." },
      { question: "What about different specialties?", answer: "Create specialty-specific rubrics (dental, mental health, general practice, etc.) within separate projects. Each maintains its own standards and audit trail." },
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
    subtitle: "Gate AI-generated outbound for brand consistency, accuracy, and conversion quality across your sales and marketing teams.",
    metaTitle: "AI Production Gate for B2B SaaS | Bookbag Intelligence",
    metaDescription: "Bookbag gates AI-generated B2B SaaS outbound for quality and brand safety. Catch hallucinated features, inaccurate claims, and off-brand messaging before it ships.",
    painPoints: [
      { title: "Hallucinated product features", description: "AI can claim your product does things it doesn't. Wrong integrations, nonexistent features, or inaccurate pricing create trust damage." },
      { title: "Inconsistent brand voice", description: "AI-generated outbound across multiple reps and tools creates messaging chaos. No single source of truth for approved language." },
      { title: "Conversion quality varies", description: "Some AI-generated messages convert well; others damage pipeline quality with irrelevant or misleading personalization." },
    ],
    howItHelps: [
      { title: "Feature accuracy", description: "Flag product claims, integration references, and pricing mentions against your approved product facts." },
      { title: "Brand consistency", description: "Enforce tone, terminology, and messaging standards across all AI-generated outbound." },
      { title: "Approved messaging library", description: "Build a growing library of human-approved, high-converting messages. Use corrections to continuously improve your AI." },
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
      { question: "Can Bookbag check product accuracy?", answer: "Yes. Configure rubrics with your approved product facts, feature list, and pricing. Bookbag flags AI-generated content that contradicts these facts or claims features that don't exist." },
      { question: "How does this help with brand consistency?", answer: "Define tone, terminology, and messaging rubrics. Every AI-generated message is evaluated against these standards. Corrections build an approved language library your whole team can reference." },
      { question: "What's the ROI for B2B SaaS?", answer: "Teams typically see improved conversion rates (better messaging quality), reduced churn from inaccurate claims, and faster AI improvement through structured training data export." },
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
    subtitle: "Ship enterprise-ready AI controls without building workforce infrastructure. Turn quality gating into a product capability.",
    metaTitle: "AI Production Gate for VPs of Product | Bookbag Intelligence",
    metaDescription: "Bookbag gives VPs of Product an enterprise-ready AI governance layer. Ship audit trails, quality controls, and compliance gating as product capabilities — without building in-house.",
    painPoints: [
      { title: "Enterprise buyers demand controls", description: "Procurement won't sign without audit trails, governance policies, and documented human oversight of AI outputs." },
      { title: "Building workforce ops is expensive", description: "Standing up a review team, QA process, and calibration system takes months and significant investment." },
      { title: "Quality is a product differentiator", description: "Competitors without quality controls lose enterprise deals. But building controls from scratch diverts engineering resources." },
    ],
    howItHelps: [
      { title: "Instant enterprise readiness", description: "Ship audit trails, SME escalation, and evidence-based verdicts as product capabilities without building them yourself." },
      { title: "New premium SKU", description: "Package quality gating as a premium tier — \"Certified Outbound\" or \"Enterprise QA\" — that creates new revenue." },
      { title: "Structured training data", description: "Export corrections as ML-ready datasets (SFT, DPO, ranking) to continuously improve your AI models." },
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
      { question: "How long does integration take?", answer: "Most teams start with a batch upload pilot (days, not weeks). The integration is content-in, verdicts-out. No deep engineering required for the initial setup." },
      { question: "Can we make this part of our product?", answer: "Yes. Many vendors package Bookbag's output (verdicts, audit trails, quality metrics) as features within their own product. You own the data and the customer relationship." },
      { question: "What about our engineering roadmap?", answer: "Bookbag handles workforce ops, QA, and calibration so your engineering team stays focused on product. No need to build review infrastructure from scratch." },
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
    subtitle: "Reduce churn driven by AI quality issues. Give customers proof that their outbound is safe and monitored.",
    metaTitle: "AI Production Gate for Customer Success Leaders | Bookbag Intelligence",
    metaDescription: "Bookbag helps customer success teams reduce AI-driven churn. Provide customers with quality proof, escalation lanes, and evidence that their AI outbound is monitored.",
    painPoints: [
      { title: "Churn from AI quality failures", description: "Customers cancel when AI messages damage their deliverability, trigger spam signals, or embarrass their brand." },
      { title: "No proof to show customers", description: "When customers complain about AI quality, you have no data to show what was caught, fixed, or improved." },
      { title: "Escalation chaos", description: "Quality issues land in Slack, email, and tickets with no systematic triage or resolution tracking." },
    ],
    howItHelps: [
      { title: "Churn prevention data", description: "Show customers exactly what Bookbag caught and fixed — pass/fix/block rates, failure categories, and improvements over time." },
      { title: "Proactive quality monitoring", description: "Identify quality trends before customers notice. Address issues before they become cancellation conversations." },
      { title: "Structured escalation", description: "Replace ad-hoc Slack escalations with a systematic blocked → SME review → evidence trail workflow." },
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
      { question: "How does this reduce churn?", answer: "By catching AI quality issues before they reach your customers' recipients. When you can show customers their pass rate improved from 70% to 92%, retention conversations become expansion conversations." },
      { question: "What reports can I show customers?", answer: "Export audit reports showing: pass/fix/block distribution, top failure categories, quality trends over time, and the specific improvements made. These become QBR materials." },
      { question: "How does the escalation workflow change?", answer: "Instead of random Slack messages, quality issues follow a structured path: flagged → reviewed → fixed or escalated to SME → resolved with evidence. Every step is tracked." },
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
    subtitle: "Standardize AI outbound quality across teams. Get dashboards, controls, and repeatable review processes.",
    metaTitle: "AI Production Gate for RevOps Teams | Bookbag Intelligence",
    metaDescription: "Bookbag gives RevOps teams standardized quality controls for AI outbound. Dashboards, audit trails, and repeatable review processes across all your outbound programs.",
    painPoints: [
      { title: "Inconsistent outbound quality", description: "Different reps, tools, and AI models produce wildly different output quality. No standardization." },
      { title: "Leadership nervous about AI", description: "Executives want controls and reporting before expanding AI outbound. You need proof it's safe." },
      { title: "Review doesn't scale", description: "Manual spot-checking works for 100 messages. At 10,000 per month, you need a system." },
    ],
    howItHelps: [
      { title: "Standardized controls", description: "Every AI message passes through the same gate with the same rubrics. Consistent quality regardless of the source." },
      { title: "Executive dashboards", description: "Pass/fix/block rates, quality trends, failure categories — the data leadership needs to feel confident expanding AI usage." },
      { title: "Scalable review", description: "Auto-approve safe messages. Focus human reviewers on the items that actually need attention." },
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
      { question: "What dashboards does Bookbag provide?", answer: "Quality insights across projects: pass/fix/block rates, top failure categories, quality trends over time, reviewer performance, and SLA adherence. Exportable for executive reporting." },
      { question: "How does this integrate with our existing stack?", answer: "Bookbag sits between AI generation and sending. Upload messages from any tool, receive verdicts, and route approved messages back to your sending infrastructure." },
      { question: "Can I set different standards for different teams?", answer: "Yes. Create separate projects with different rubrics. Each team or program gets its own quality standards while you see aggregate metrics across the organization." },
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
    subtitle: "Systematic supervision of AI-generated communications with audit trails, evidence, and SME authority lanes.",
    metaTitle: "AI Production Gate for Compliance Officers | Bookbag Intelligence",
    metaDescription: "Bookbag gives compliance officers systematic supervision of AI outbound. Audit trails, SME escalation, evidence-based verdicts, and rubric-driven policy enforcement.",
    painPoints: [
      { title: "AI output is unsupervised", description: "AI-generated communications ship without documented review. When regulators ask for supervision proof, there's nothing to show." },
      { title: "Volume exceeds review capacity", description: "Compliance teams can't review every AI message manually. But skipping review creates exposure." },
      { title: "No audit trail", description: "Existing review happens in Slack, email, or ad-hoc meetings. Nothing is documented, timestamped, or attributable." },
    ],
    howItHelps: [
      { title: "Documented supervision", description: "Every AI message has a verdict, reviewer identity, timestamp, rubric version, and rationale. Complete supervision documentation." },
      { title: "Risk-based review", description: "Safe messages auto-approve. Focus compliance review capacity on needs_fix and blocked items — the ones that actually need attention." },
      { title: "Policy codification", description: "Turn your compliance policies into machine-enforced rubrics. Version-stamped, auditable, and consistently applied." },
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
      { question: "Is the audit trail legally defensible?", answer: "Every decision includes: reviewer identity, timestamp, rubric version used, verdict, rationale, and any corrections. Exports are immutable and tenant-isolated. Consult your legal team on specific regulatory requirements." },
      { question: "Can we define our own compliance rubrics?", answer: "Yes. The taxonomy system lets you codify your exact compliance policies — required disclosures, prohibited language, approval thresholds. Rubrics are version-stamped so you can trace which rules applied to each decision." },
      { question: "How does SME escalation work?", answer: "Messages classified as blocked route to designated SMEs with full context: the original message, the flagged issues, rubric citations, and evidence. SMEs provide the final verdict with documented rationale." },
      { question: "What about multi-channel compliance?", answer: "Bookbag gates email, SMS, and scripted communications through the same rubrics and audit trail. Channel-agnostic compliance enforcement." },
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
    subtitle: "Build an approved messaging library from AI corrections. Ensure every rep sends on-brand, accurate outbound.",
    metaTitle: "AI Production Gate for Sales Enablement | Bookbag Intelligence",
    metaDescription: "Bookbag helps sales enablement teams build approved messaging libraries from AI corrections. Ensure on-brand, accurate outbound across your entire sales organization.",
    painPoints: [
      { title: "Reps go off-script", description: "AI gives reps freedom to personalize, but personalization often means inaccurate claims, wrong positioning, or off-brand tone." },
      { title: "No approved messaging library", description: "There's no single source of truth for what \"good\" AI-generated outbound looks like." },
      { title: "Training is reactive", description: "You only find out about bad messages after they've been sent and caused problems." },
    ],
    howItHelps: [
      { title: "Approved messaging library", description: "Every human-corrected message becomes an approved example. Build a growing library of on-brand, accurate outbound templates." },
      { title: "Proactive quality", description: "Catch off-brand or inaccurate messages before they ship, not after they cause damage." },
      { title: "Training data for coaching", description: "Use failure patterns and corrections as coaching material. Show reps the difference between what AI generated and what the expert approved." },
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
      { question: "How does the approved messaging library work?", answer: "Every correction in Bookbag is a before/after pair. The corrected versions become your approved messaging library — searchable, categorized, and continuously growing. Reps and AI models can reference these as examples." },
      { question: "Can we use corrections for sales training?", answer: "Yes. Export failure patterns, common mistakes, and expert corrections as training materials. Show reps real examples of what AI got wrong and how experts fixed it." },
      { question: "Does this replace sales enablement platforms?", answer: "No. Bookbag focuses on AI message quality gating. It complements your enablement platform by providing the quality layer that ensures AI-generated content meets your standards." },
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
