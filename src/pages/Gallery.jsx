import { useState } from 'react'
import { galleryImages } from '../data/index.js'
import { ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Lab', 'Events', 'Infrastructure', 'Campus']
const placeholderColors = {
  Lab: '#0f2044',
  Events: '#1a3a5c',
  Infrastructure: '#0d3320',
  Campus: '#2d1f0f',
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filtered = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  )

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1))

  const goNext = () =>
    setSelectedIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1))

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goPrev()
    if (e.key === 'ArrowRight') goNext()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label justify-center mb-4">
            <div className="w-8 h-px bg-[#39e07a]" /> Visual Archive{' '}
            <div className="w-8 h-px bg-[#39e07a]" />
          </div>
          <h1 className="font-display italic text-5xl text-white mb-4">Gallery</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Moments from our research activities, lab events, workshops, and campus
            life at PRISM Lab.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white dark:bg-[#0d1426] border-b border-gray-100 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#0f2044] dark:bg-[#39e07a] text-white dark:text-[#0f2044]'
                  : 'text-[#6b7a94] dark:text-white/50 hover:text-[#0f2044] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 bg-[#f4f6f8] dark:bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, index) => (
              <div
                key={img.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all aspect-video cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${placeholderColors[img.category] || '#0f2044'} 0%, ${placeholderColors[img.category] || '#0f2044'}cc 100%)`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                      <ImageIcon className="w-6 h-6 text-white/40" />
                    </div>
                    <p className="text-white/60 text-xs text-center px-4">{img.caption}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#0f2044]/0 group-hover:bg-[#0f2044]/50 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center px-4">
                    <div className="text-2xl mb-1">🔍</div>
                    <p className="text-sm font-medium">{img.caption}</p>
                    <span className="text-xs text-white/60">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#6b7a94] dark:text-white/40">
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {filtered[selectedIndex].src ? (
              <img
                src={filtered[selectedIndex].src}
                alt={filtered[selectedIndex].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            ) : (
              <div
                className="w-96 h-64 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${placeholderColors[filtered[selectedIndex].category] || '#0f2044'} 0%, ${placeholderColors[filtered[selectedIndex].category] || '#0f2044'}cc 100%)`,
                }}
              >
                <ImageIcon className="w-16 h-16 text-white/30" />
              </div>
            )}
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{filtered[selectedIndex].caption}</p>
              <p className="text-white/50 text-sm mt-1">{filtered[selectedIndex].category}</p>
              <p className="text-white/30 text-xs mt-1">{selectedIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
            onClick={(e) => { e.stopPropagation(); goNext() }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}