import { PortfolioSection } from '@/components/portfolio-section'

const skills = ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'Git']

const contacts = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thomas-carsonn' },
  { label: 'GitHub', href: 'https://github.com/CharlieH1102' },
  { label: 'Email', href: 'mailto:alexander26th@outlook.com' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#071633] text-slate-100">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="pb-10">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Thomas A. Carson
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-300">
            Computer Science student at the University of Houston&ndash;Clear
            Lake with experience in Java, Python, SQL, HTML, and CSS.
          </p>
        </header>

        <PortfolioSection id="about" title="About">
          <p className="leading-relaxed text-slate-300">
            I&apos;m interested in software engineering and artificial
            intelligence. I enjoy building practical applications and am
            currently developing my skills in machine learning, data analysis,
            and full-stack development.
          </p>
        </PortfolioSection>

        <PortfolioSection id="skills" title="Skills">
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-sky-300/30 bg-white/5 px-4 py-1.5 text-sm text-slate-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </PortfolioSection>

        <PortfolioSection id="contact" title="Contact">
          <ul className="flex flex-wrap gap-3">
            {contacts.map((contact) => {
              const isExternal = contact.href.startsWith('http')
              return (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-block rounded-md bg-sky-300 px-5 py-2 text-sm font-semibold text-[#071633] transition-colors hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                  >
                    {contact.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </PortfolioSection>
      </div>
    </main>
  )
}
