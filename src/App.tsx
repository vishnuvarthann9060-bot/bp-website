import { 
  TreePine, 
  PhoneCall, 
  MessageSquare, 
  Truck, 
  Ruler, 
  ShieldCheck, 
  MapPin, 
  Clock
} from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-900/60 via-stone-900 to-amber-950/60 border-b border-amber-500/20 text-xs py-2 px-4 text-center text-amber-200/90 font-medium">
        🌲 Premium Industrial & Structural Timber Supplies • Custom Log Cutting Available
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-950/80 border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-600/20 font-black">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-tight">
                Sree Ambika Saw Mill
              </span>
              <span className="text-xs text-amber-400 font-medium tracking-wide uppercase">
                Wood & Timber Industries
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/30 via-stone-950 to-stone-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Direct From The Mill • Wholesale & Custom Sizes
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Precision Timber Sawing & <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                High-Quality Wood Supplies
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We process high-strength logs into precise custom planks, beams, rafters, and packaging lumber for construction contractors, carpenters, and industries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-700/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                Get Quote on WhatsApp
              </a>
              <a
                href="tel:"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                Call Mill Directly
              </a>
            </div>
          </div>
        </section>

        {/* Value Highlights */}
        <section className="py-12 border-y border-stone-800/80 bg-stone-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Custom Dimensions</h3>
                <p className="text-xs text-stone-400 mt-1">Accurate precision sawing cut to your exact order requirements.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <TreePine className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Multiple Wood Species</h3>
                <p className="text-xs text-stone-400 mt-1">Hardwood, softwood, teak, pine, and structural commercial timber.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Site Delivery</h3>
                <p className="text-xs text-stone-400 mt-1">Direct vehicle dispatch for construction sites and bulk buyers.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Transparent Volume</h3>
                <p className="text-xs text-stone-400 mt-1">Clear, verifiable cubic-feet calculations and honest pricing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-amber-500" />
            <span className="font-semibold text-stone-200">Sree Ambika Saw Mill</span>
            <span>— Quality Timber & Sawing Services</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-500" /> Mon - Sat: 8:00 AM - 7:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-500" /> Mill Yard
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

