import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f2044] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#39e07a]/20 flex items-center justify-center">
                <span className="text-[#39e07a] font-display italic font-bold text-sm">P</span>
              </div>
              <div>
                <div className="font-display italic text-lg text-white leading-tight">PRISM Lab</div>
                <div className="text-xs text-white/50 leading-tight">IIT Guwahati</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Power-aware Resilient Intelligent Secure Machines — advancing research in cybersecurity, cryptography, and secure hardware systems.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#39e07a] mb-4">Contact</div>
            <div className="space-y-2 text-sm text-white/70">
              <div className="font-semibold text-white">Dr. Satyajit Das</div>
              <div className="text-white/60">Assistant Professor</div>
              <a href="tel:XXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> XXXXXXX
              </a>
              <a href="mailto:prism-lab@iitg.ac.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> prism-lab@iitg.ac.in
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Dept. of CSE, IIT Guwahati, Assam – 781039</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#39e07a] mb-4">Quick Links</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-white/60">
              {[
                { label: 'Home', href: '/' },
                { label: 'Research', href: '/research' },
                { label: 'Students', href: '/students' },
                { label: 'Publications', href: '/publications' },
                { label: 'Alumni', href: '/alumni' },
                { label: 'News', href: '/news' },
                { label: 'Infrastructure', href: '/infrastructure' },
                { label: 'Gallery', href: '/gallery' },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.iitg.ac.in/cse/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors col-span-2"
              >
                <ExternalLink className="w-3 h-3" /> IIT Guwahati CSE Department
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} PRISM Lab, IIT Guwahati. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
