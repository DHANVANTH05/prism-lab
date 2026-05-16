import { alumni, students } from '../data/index.js'
import { GraduationCap, Mail } from 'lucide-react'

export default function AlumniPage() {
  const internAlumni = students.filter((s) => s.isAlumni === true)
  const allAlumni = [...alumni, ...internAlumni]

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Alumni <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display text-5xl text-white mb-4">Alumni Network</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            PRISM Lab alumni information will be updated as students graduate.
          </p>
        </div>
      </div>
      <section className="py-20 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto px-4">
          {allAlumni.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#0f2044]/8 dark:bg-white/5 flex items-center justify-center mx-auto mb-5">
                <GraduationCap className="w-9 h-9 text-[#0f2044]/40 dark:text-white/20" />
              </div>
              <h2 className="font-display text-3xl text-[#0f2044] dark:text-white mb-4">
                No Alumni Yet
              </h2>
              <p className="text-[#6b7a94] dark:text-white/40 max-w-md mx-auto leading-relaxed">
                PRISM Lab is a newly established research laboratory at IIT Guwahati. Alumni
                records will be added as research scholars complete their programs.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {allAlumni.map((a) => (
                <div
                  key={a.id}
                  className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="w-full aspect-square bg-[#0f2044]/8 dark:bg-white/5">
                    {a.photo ? (
                      <img
                        src={a.photo}
                        alt={a.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#0f2044] dark:text-white font-semibold text-3xl">
                        {a.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#0f2044] dark:text-white mb-1">
                      {a.name}
                    </h3>
                    <p className="text-xs text-[#6b7a94] dark:text-white/40 mb-1">
                      {a.type || a.program}
                    </p>
                    {a.researchArea && (
                      <p className="text-xs text-[#6b7a94] dark:text-white/30 mb-1">
                        {a.researchArea}
                      </p>
                    )}
                    {a.currentPosition && (
                      <p className="text-xs text-[#39e07a] font-medium mb-1">
                        {a.currentPosition}
                      </p>
                    )}
                    {a.email && (
                      <a
                        href={`mailto:${a.email}`}
                        className="flex items-center gap-1.5 text-xs text-[#6b7a94] dark:text-white/40 hover:text-[#0f2044] dark:hover:text-white transition-colors mt-1"
                      >
                        <Mail className="w-3.5 h-3.5" /> {a.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}