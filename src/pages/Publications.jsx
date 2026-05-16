import { useState } from 'react'
import { publications } from '../data/index.js'
import { BookOpen, ExternalLink } from 'lucide-react'

const filters = ['All', 'Journal', 'Conference', 'Workshop']

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = publications.filter(
    (p) => activeFilter === 'All' || p.type === activeFilter.toLowerCase()
  )
  const byYear = filtered.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || []
    acc[pub.year].push(pub)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Research Output <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-body font-bold text-5xl text-white mb-4">Publications</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Peer-reviewed papers published in top venues in security, cryptography,
            and systems research.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-[#0d1426] border-b border-gray-100 dark:border-white/10 sticky top-16 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-[#0f2044] dark:bg-[#39e07a] text-white dark:text-[#0f2044]'
                  : 'text-[#6b7a94] dark:text-white/50 hover:text-[#0f2044] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              {f} Publications
            </button>
          ))}
        </div>
      </div>
      <section className="py-12 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-body font-bold text-2xl text-[#0f2044] dark:text-white">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                <span className="text-xs text-[#6b7a94] dark:text-white/30">
                  {byYear[year].length} paper{byYear[year].length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="space-y-3">
                {byYear[year].map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-[#0f2044]/5 dark:bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen
                          className="w-4 h-4 text-[#0f2044]/40 dark:text-white/30"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="font-body font-semibold text-[#0f2044] dark:text-white text-sm leading-snug">
                            {pub.title}
                          </h3>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full border flex-shrink-0 font-medium ${
                              pub.type === 'journal'
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800'
                                : 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800'
                            }`}
                          >
                            {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                          </span>
                        </div>
                        <p className="text-xs text-[#6b7a94] dark:text-white/40 mb-1">
                          {pub.authors.join(', ')}
                        </p>
                        <p className="text-xs font-medium text-[#0f2044]/60 dark:text-white/40 mb-2">
                          {pub.venue}
                        </p>
                        {pub.abstract && (
                          <p className="text-xs text-[#6b7a94] dark:text-white/40 leading-relaxed mb-2">
                            {pub.abstract}
                          </p>
                        )}
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#39e07a] hover:underline"
                          >
                            <ExternalLink className="w-3 h-3" /> DOI: {pub.doi}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}