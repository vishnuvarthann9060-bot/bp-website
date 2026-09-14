import { useState } from 'react'
import { 
  TreePine, 
  Calculator, 
  PhoneCall, 
  MessageSquare, 
  Truck, 
  Ruler, 
  ShieldCheck, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react'

export default function App() {
  // Timber Volume Calculator State (Length in ft, Width in inches, Thickness in inches)
  const [calcLength, setCalcLength] = useState<number>(10)
  const [calcWidth, setCalcWidth] = useState<number>(6)
  const [calcThickness, setCalcThickness] = useState<number>(2)
  const [calcQuantity, setCalcQuantity] = useState<number>(1)

  // Cubic feet formula: (Length (ft) * Width (in) * Thickness (in) / 144) * Quantity
  const cubicFeet = ((calcLength * calcWidth * calcThickness) / 144) * calcQuantity

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
                BP Saw Mill
              </span>
              <span className="text-xs text-amber-400 font-medium tracking-wide uppercase">
                Wood & Timber Industries
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#calculator"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-lg"
            >
              <Calculator className="w-4 h-4" />
              Volume Calculator
            </a>
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
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <Calculator className="w-5 h-5" />
                Calculate Timber Volume
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

        {/* Interactive Wood Volume Calculator */}
        <section id="calculator" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-amber-400 text-xs font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5" />
              Free Tool for Contractors & Builders
            </div>
            <h2 className="text-3xl font-bold text-white">Timber Volume Estimator</h2>
            <p className="text-stone-400 text-sm mt-2">
              Instantly calculate the total cubic feet (CFT) for your timber batch.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <label className="block text-xs font-medium text-stone-300 uppercase mb-2">
                  Length (Feet)
                </label>
                <input
                  type="number"
                  min="1"
                  value={calcLength}
                  onChange={(e) => setCalcLength(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 uppercase mb-2">
                  Width (Inches)
                </label>
                <input
                  type="number"
                  min="1"
                  value={calcWidth}
                  onChange={(e) => setCalcWidth(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 uppercase mb-2">
                  Thickness (Inches)
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={calcThickness}
                  onChange={(e) => setCalcThickness(Math.max(0.5, Number(e.target.value) || 0))}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 uppercase mb-2">
                  Quantity (Pieces)
                </label>
                <input
                  type="number"
                  min="1"
                  value={calcQuantity}
                  onChange={(e) => setCalcQuantity(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 bg-stone-950/60 p-6 rounded-2xl">
              <div>
                <span className="text-xs text-stone-400 uppercase tracking-wider block">Estimated Total Volume</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-amber-400">
                    {cubicFeet.toFixed(2)}
                  </span>
                  <span className="text-stone-300 font-semibold">Cubic Feet (CFT)</span>
                </div>
                <span className="text-xs text-stone-500 block mt-1">
                  ≈ {(cubicFeet * 0.0283168).toFixed(3)} Cubic Meters (CBM)
                </span>
              </div>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hi, I want a quote for: ${calcQuantity} pcs of ${calcLength}ft x ${calcWidth}in x ${calcThickness}in (Total: ${cubicFeet.toFixed(2)} CFT).`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.02]"
              >
                <span>Send Spec for Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-amber-500" />
            <span className="font-semibold text-stone-200">BP Saw Mill</span>
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

