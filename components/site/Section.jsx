import { cn } from "@/lib/utils"

export function Section({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 relative",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}
