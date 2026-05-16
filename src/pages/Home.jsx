import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Lock, Network, Cpu, Brain, Atom, ChevronRight } from 'lucide-react'
import { director, stats, newsItems, researchAreas } from '../data/index.js'

const researchIcons = { 1: Shield, 2: Lock, 3: Network, 4: Cpu, 5: Brain, 6: Atom }

export default function HomePage() {
  const latestNews = newsItems.slice(0, 3)
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center text-white relative overflow-hidden bg-[#0f2044]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0f2044]/60 z-0" />
        <div className="text-center relative z-10 mb-4">
          <div className="inline-flex items-center gap-2 border border-[#39e07a]/40 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-[#39e07a] mb-8 uppercase">
            IIT Guwahati · Department of CSE
          </div>
        </div>
        <h1
          className="font-body font-bold text-white leading-none text-center relative z-10 mb-5"
          style={{ fontSize: 'clamp(8rem, 28vw, 32rem)', width: '100%', letterSpacing: '0em' }}
        >
          PRISM
        </h1>
        <div className="text-center relative z-10 px-4">
          <p className="text-white/70 text-2xl mb-3 font-medium">
            Power-aware Resilient Intelligent Secure Machines
          </p>
          <p className="text-white/50 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Designing intelligent, secure, and energy-aware systems for the next generation of computing
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/research"
              className="bg-[#39e07a] text-[#0f2044] font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#39e07a]/90 transition-all flex items-center gap-2"
            >
              Explore Research <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/publications"
              className="border border-[#39e07a]/50 text-white font-semibold px-7 py-3 rounded-full text-sm hover:border-[#39e07a] hover:bg-[#39e07a]/10 transition-all"
            >
              View Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-[#0d1426] border-b border-gray-100 dark:border-white/10 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-body font-bold text-4xl text-[#0f2044] dark:text-white mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-[#6b7a94] dark:text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Research Areas */}
      <section className="py-20 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-3">
                <div className="w-8 h-px bg-[#39e07a]" /> About the Lab
              </div>
              <h2 className="font-body font-bold text-4xl text-[#0f2044] dark:text-white mb-5">
                Advancing Secure Systems Research
              </h2>
              <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed mb-4">
                PRISM Lab focuses on the design of next-generation computing systems that
                are energy-efficient, secure, resilient, and intelligent by construction.
                We conduct research at the intersection of computer architecture, embedded
                systems, reconfigurable computing, AI acceleration, edge intelligence,
                hardware security, and cyber-physical systems.
              </p>
              <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed mb-4">
                Our work aims to develop computing platforms that efficiently support modern
                AI workloads while ensuring robustness against failures, attacks, and
                real-world deployment constraints. We explore innovations across the full
                system stack from hardware architecture and compiler support to secure
                deployment, intelligent sensing, and trustworthy edge AI.
              </p>
              <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed mb-6">
                The broader vision of PRISM Lab is to enable sustainable, dependable, and
                secure intelligent machines for applications in healthcare, agriculture,
                autonomous systems, IoT, cybersecurity, and next-generation AI infrastructure.
              </p>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 border border-[#0f2044]/30 dark:border-white/20 text-[#0f2044] dark:text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#0f2044]/5 dark:hover:bg-white/5 transition-all"
              >
                Our Research Areas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {researchAreas.slice(0, 6).map((area) => {
                const Icon = researchIcons[area.id] || Shield
                return (
                  <div
                    key={area.id}
                    className="bg-white dark:bg-[#0d1a2e] rounded-2xl p-4 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0f2044]/5 dark:bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#39e07a]/10 transition-colors">
                      <Icon className="w-4 h-4 text-[#0f2044]/60 dark:text-white/40" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm font-semibold text-[#0f2044] dark:text-white">
                      {area.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-20 bg-white dark:bg-[#0d1426]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-3">
              <div className="w-8 h-px bg-[#39e07a]" /> Principal Investigator{' '}
              <div className="w-8 h-px bg-[#39e07a]" />
            </div>
            <h2 className="font-body font-bold text-4xl text-[#0f2044] dark:text-white">
              Lab Director
            </h2>
          </div>
          <div className="bg-white dark:bg-[#0d1a2e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-36 h-36 rounded-2xl overflow-hidden bg-[#0f2044]/5 dark:bg-white/5 flex-shrink-0 flex items-center justify-center">
              <img
                src={director.photo}
                alt={director.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<span class="font-bold text-4xl text-[#0f2044]/30 dark:text-white/20">SD</span>`
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-body font-bold text-3xl text-[#0f2044] dark:text-white mb-1">
                {director.name}
              </h3>
              <p className="font-semibold text-[#0f2044] dark:text-white text-sm mb-0.5">
                {director.title}
              </p>
              <p className="font-semibold text-[#0f2044]/70 dark:text-white/40 text-sm mb-4">
                {director.department}
              </p>
              <p className="text-[#6b7a94] dark:text-white/50 text-sm leading-relaxed mb-5">
                {director.bio}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {director.expertise.map((e) => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1 rounded-full border border-[#0f2044]/15 dark:border-white/15 text-[#0f2044]/60 dark:text-white/50"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-[#6b7a94] dark:text-white/50">
                <a
                  href={`tel:${director.phone}`}
                  className="flex items-center gap-1.5 hover:text-[#0f2044] dark:hover:text-white transition-colors"
                >
                  📞 {director.phone}
                </a>
                <a
                  href={`mailto:${director.email}`}
                  className="flex items-center gap-1.5 hover:text-[#0f2044] dark:hover:text-white transition-colors"
                >
                  ✉️ {director.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="section-label mb-2">
                <div className="w-8 h-px bg-[#39e07a]" /> Latest Updates
              </div>
              <h2 className="font-body font-bold text-3xl text-[#0f2044] dark:text-white">
                News & Announcements
              </h2>
            </div>
            <Link
              to="/news"
              className="flex items-center gap-1 text-sm font-semibold text-[#0f2044] dark:text-white hover:text-[#39e07a] transition-colors"
            >
              All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {latestNews.map((item) => {
              const d = new Date(item.date)
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-6 flex gap-5"
                >
                  <div className="text-center min-w-[52px]">
                    <div className="font-body font-bold text-2xl text-[#0f2044] dark:text-white leading-none">
                      {d.getDate()}
                    </div>
                    <div className="text-xs text-[#6b7a94] dark:text-white/40 uppercase mt-0.5">
                      {d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-gray-100 dark:border-white/10 pl-5">
                    <h3 className="font-semibold text-[#0f2044] dark:text-white text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#6b7a94] dark:text-white/40 text-xs leading-relaxed mb-3">
                      {item.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-[#0f2044]/6 dark:bg-white/8 text-[#0f2044]/60 dark:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2044]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🎓 📖</div>
          <h2 className="font-body font-bold text-4xl text-white mb-4">
            Join the PRISM Family
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            We welcome motivated students from CSE, ECE, and EEE backgrounds. Openings
            available for B.Tech projects, M.Tech theses, and PhD positions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/students"
              className="bg-[#39e07a] text-[#0f2044] font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-[#39e07a]/90 transition-all"
            >
              Meet Our Team
            </Link>
            <a
              href="mailto:prism-lab@iitg.ac.in"
              className="border border-[#39e07a]/50 text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:border-[#39e07a] transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}