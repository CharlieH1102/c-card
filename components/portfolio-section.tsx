type PortfolioSectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export function PortfolioSection({ id, title, children }: PortfolioSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-white/10 py-10"
    >
      <h2
        id={`${id}-heading`}
        className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300"
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
