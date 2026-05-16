import { students } from '../data/index.js'
import { BookOpen, GraduationCap, Mail } from 'lucide-react'

const programColors = {
  PhD: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800',
  MTech: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800',
  Intern: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800',
}

export default function StudentsPage() {
  const phd = students.filter((s) => s.program === 'PhD' && !s.isAlumni)
  const mtech = students.filter((s) => s.program === 'MTech' && !s.isAlumni)
  const interns = students.filter((s) => s.program === 'Intern' && !s.isAlumni)
  const groups = [
    { label: 'PhD Scholars', data: phd },
    { label: 'M.Tech Students', data: mtech },
    { label: 'Interns', data: interns },
  ]

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> People <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display italic text-5xl text-white mb-4">Current Students</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Our talented team of researchers driving innovation in cybersecurity
            and secure systems design.
          </p>
        </div>
      </div>
      <section className="py-16 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          {groups.map((group) =>
            group.data.length > 0 ? (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-7">
                  <GraduationCap className="w-5 h-5 text-[#0f2044] dark:text-white" />
                  <h2 className="font-display italic text-2xl text-[#0f2044] dark:text-white">
                    {group.label}
                  </h2>
                  <span className="text-xs font-semibold bg-[#0f2044]/8 dark:bg-white/10 text-[#0f2044]/60 dark:text-white/50 px-2.5 py-0.5 rounded-full">
                    {group.data.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.data.map((student) => (
                    <div
                      key={student.id}
                      className="bg-white dark:bg-[#0d1a2e] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="w-full aspect-square bg-[#0f2044]/8 dark:bg-white/5">
                        {student.photo ? (
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#0f2044] dark:text-white font-semibold text-3xl">
                            {student.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-[#0f2044] dark:text-white">
                            {student.name}
                          </h3>
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full border font-medium flex-shrink-0 ${programColors[student.program] || ''}`}
                          >
                            {student.type || student.program}
                            {student.year ? ` · Y${student.year}` : ''}
                          </span>
                        </div>
                        {student.researchArea && (
                          <div className="flex items-start gap-1.5 text-xs text-[#6b7a94] dark:text-white/40 mb-3">
                            <BookOpen className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#39e07a]" />
                            <span className="leading-snug">{student.researchArea}</span>
                          </div>
                        )}
                        {student.email && (
                          <a
                            href={`mailto:${student.email}`}
                            className="flex items-center gap-1.5 text-xs text-[#6b7a94] dark:text-white/40 hover:text-[#0f2044] dark:hover:text-white transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" /> {student.email}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>
    </div>
  )
}