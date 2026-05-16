import { director } from '../data/index.js'
import { Mail, Phone } from 'lucide-react'

export default function PeoplePage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Principal Investigator <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display italic text-5xl text-white mb-4">Lab Director</h1>
        </div>
      </div>
      <section className="py-20 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-[#0d1a2e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-[#0f2044]/5 dark:bg-white/5 flex-shrink-0 flex items-center justify-center">
              <img src={director.photo} alt={director.name} className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<span class="font-display italic text-5xl text-[#0f2044]/20 dark:text-white/20">SD</span>` }} />
            </div>
            <div className="flex-1">
              <h2 className="font-display italic text-4xl text-[#0f2044] dark:text-white mb-1">{director.name}</h2>
              <p className="font-semibold text-[#0f2044] dark:text-white mb-0.5">{director.title}</p>
              <p className="font-semibold text-[#0f2044]/60 dark:text-white/40 mb-5">{director.department}</p>
              <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed mb-6">{director.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {director.expertise.map((e) => (
                  <span key={e} className="text-xs px-3 py-1 rounded-full border border-[#0f2044]/15 dark:border-white/15 text-[#0f2044]/60 dark:text-white/50">{e}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-[#6b7a94] dark:text-white/50">
                <a href={`tel:${director.phone}`} className="flex items-center gap-2 hover:text-[#0f2044] dark:hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#39e07a]" /> {director.phone}
                </a>
                <a href={`mailto:${director.email}`} className="flex items-center gap-2 hover:text-[#0f2044] dark:hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#39e07a]" /> {director.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
