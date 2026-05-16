import { researchAreas, fundedProjects } from '../data/index.js'
import { Shield, Lock, Network, Cpu, Brain, Atom } from 'lucide-react'

const researchIcons = { 1: Shield, 2: Lock, 3: Network, 4: Cpu, 5: Brain, 6: Atom }

export default function ResearchPage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Research & Innovation <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display text-5xl text-white mb-4">Research</h1>
          <p className="text-white/60 max-w-xl mx-auto">Our research spans the full spectrum of secure systems — from silicon-level hardware to application-layer protocols.</p>
        </div>
      </div>
      <section className="py-16 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchAreas.map((area) => {
              const Icon = researchIcons[area.id] || Shield
              return (
                <div key={area.id} className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-6 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0f2044]/5 dark:bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#0f2044]/50 dark:text-white/30" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0f2044] dark:text-white mb-2">{area.title}</h3>
                      <p className="text-sm text-[#6b7a94] dark:text-white/50 leading-relaxed mb-3">{area.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {area.keywords?.map((kw) => (
                          <span key={kw} className="text-xs px-2.5 py-0.5 rounded-full bg-[#0f2044]/5 dark:bg-white/5 text-[#0f2044]/50 dark:text-white/40 border border-[#0f2044]/8 dark:border-white/10">{kw}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-[#0d1426]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-[#0f2044] dark:text-white mb-3">Funded Projects & Collaborations</h2>
          <p className="text-[#6b7a94] dark:text-white/50 mb-10 max-w-xl mx-auto">Our research is supported by prestigious national and international funding agencies and industry partners.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {fundedProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-6 text-center min-w-[220px] max-w-xs hover:shadow-md transition-all">
                <div className="font-bold text-[#0f2044] dark:text-white text-xl mb-2">{project.funder}</div>
                <p className="text-sm text-[#6b7a94] dark:text-white/50 leading-relaxed mb-3">{project.title}</p>
                {project.projectNo && <p className="text-xs text-[#6b7a94]/60 dark:text-white/30 mb-2">Project No: {project.projectNo}</p>}
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#39e07a]/10 text-[#39e07a] font-semibold border border-[#39e07a]/20">{project.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
