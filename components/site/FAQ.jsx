import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ({ faqs }) {
  const defaultFaqs = [
    {
      question: "What do you mean by production gate?",
      answer:
        "A production gate is a checkpoint between AI generation and deployment. Before any message ships to a customer, it passes through Bookbag's evaluation engine. We route outputs to three lanes: safe_to_deploy (auto-approved), needs_fix (QA review), and blocked (SME decision with evidence). This creates an audit trail and prevents risky outputs from reaching customers.",
    },
    {
      question: "Do you replace compliance teams?",
      answer:
        "No. Bookbag supports compliance review workflows—we don't replace them. We provide the authority layer, evidence trails, and human-in-the-loop tooling that compliance teams need to supervise AI-generated outbound at scale.",
    },
    {
      question: "What channels do you support (email/SMS/voice script)?",
      answer:
        "We support all text-based outbound channels: email, SMS, and voice call scripts. Upload any text-based message to your Bookbag project, and our expert reviewers will evaluate it against your rubrics and return a verdict with reasoning. The workflow is channel-agnostic.",
    },
    {
      question: "How do you generate training data?",
      answer:
        "Every human correction in Bookbag becomes a training datapoint. When QA rewrites a message or an SME provides feedback, we export that as preference pairs (DPO), supervised fine-tuning examples (SFT), or ranking data. You own all exports and can use them to retrain your models.",
    },
    {
      question: "Can we use our own reviewers/SMEs?",
      answer:
        "Yes. Bookbag is a workflow platform. You assign your own team members to Worker, QA, and SME roles. We provide the queue, routing logic, and audit trail—you provide the human authority and domain expertise.",
    },
    {
      question: "How fast can we launch?",
      answer:
        "Most teams launch a pilot in under 2 weeks. The setup is straightforward—create your project, configure rubrics, and start uploading messages. The time to launch depends on how quickly you define your rubrics and assign reviewers. We provide templates for common use cases (FinServ, insurance, SaaS outbound).",
    },
  ]

  const displayFaqs = faqs || defaultFaqs

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {displayFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
