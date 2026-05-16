import { infrastructure } from '../data/index.js'
import { Server, Cpu, Monitor, Code, Radio } from 'lucide-react'

const categoryIcons = { Hardware: Cpu, Computing: Server, Networking: Monitor, Embedded: Code, Software: Monitor, Wireless: Radio }

export default function InfrastructurePage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Facilities <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display text-5xl text-white mb-4">Infrastructure</h1>
          <p className="text-white/60 max-w-xl mx-auto">State-of-the-art research infrastructure enabling cutting-edge work in hardware security, cryptography, and cybersecurity.</p>
        </div>
      </div>
      <section className="py-16 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {infrastructure.map((item) => {
              const Icon = categoryIcons[item.category] || Server
              return (
                <div key={item.id} className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0f2044]/5 dark:bg-white/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0f2044]/50 dark:text-white/30" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold text-[#6b7a94] dark:text-white/40 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="font-semibold text-[#0f2044] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6b7a94] dark:text-white/50 leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#6b7a94] dark:text-white/40">
                        <div className="w-1 h-1 rounded-full bg-[#39e07a]" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-[#0d1426]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-[#0f2044] dark:text-white mb-4">Access & Collaboration</h2>
          <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed mb-6">PRISM Lab infrastructure is available to all lab members and affiliated researchers. For equipment access or collaborative research opportunities, please contact the lab.</p>
          <a href="mailto:prism-lab@iitg.ac.in" className="inline-flex items-center bg-[#0f2044] dark:bg-[#39e07a] text-white dark:text-[#0f2044] font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-all">Request Access</a>
        </div>
      </section>
    </div>
  )
}
