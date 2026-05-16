import { newsItems } from '../data/index.js'
import { Calendar, Tag } from 'lucide-react'

export default function NewsPage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Latest Updates <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display text-5xl text-white mb-4">News & Events</h1>
          <p className="text-white/60 max-w-xl mx-auto">Stay updated on our latest research milestones, awards, events, and lab announcements.</p>
        </div>
      </div>
      <section className="py-16 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-7 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 text-xs text-[#6b7a94] dark:text-white/40 mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <h2 className="font-semibold text-[#0f2044] dark:text-white text-lg leading-snug mb-3">{item.title}</h2>
              <p className="text-[#6b7a94] dark:text-white/50 leading-relaxed text-sm mb-4">{item.summary}</p>
              {item.tags?.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-3.5 h-3.5 text-[#6b7a94] dark:text-white/30" />
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#0f2044]/6 dark:bg-white/8 text-[#0f2044]/60 dark:text-white/50 border border-[#0f2044]/8 dark:border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
