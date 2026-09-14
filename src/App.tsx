import { 
  TreePine, 
  PhoneCall, 
  MessageSquare, 
  Truck, 
  Ruler, 
  ShieldCheck, 
  MapPin, 
  Clock,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react'

export default function App() {
  const products = [
    {
      title: 'Structural Construction Timber',
      desc: 'High-strength beams, joists, pillars, and rafters for residential & commercial building projects.',
      tag: 'Heavy Duty',
    },
    {
      title: 'Custom Planks & Sawn Lumber',
      desc: 'Precision saw cut to your exact length, thickness, and width specifications for furniture and carpentry.',
      tag: 'Custom Sized',
    },
    {
      title: 'Industrial & Packaging Wood',
      desc: 'Durable pallets, packing crates, boxes, and industrial runner wood at competitive bulk wholesale rates.',
      tag: 'Wholesale',
    },
    {
      title: 'Premium Hardwood & Teak',
      desc: 'Selected seasoned teak and native hardwood timber logs ready for high-end woodwork and architectural fittings.',
      tag: 'Premium Grade',
    },
  ]

  const services = [
    'Log Breakdown & Precision Band-Saw Cutting',
    'Custom Sizing as per Bill of Quantities (BOQ)',
    'On-Site Loading & Prompt Transport Dispatch',
    'Bulk Orders for Contractors & Furniture Factories',
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Top Announcement Bar */}
      <div className="bg-amber-100/80 border-b border-amber-200/80 text-xs py-2 px-4 text-center text-amber-950 font-medium">
        🌲 Sree Ambika Saw Mill • Quality Timber Supplies & Custom Wood Sawing
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-stone-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-700/20 font-black">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 block leading-tight">
                Sree Ambika Saw Mill
              </span>
              <span className="text-xs text-amber-700 font-semibold tracking-wide uppercase">
                Wood & Timber Industries
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-amber-50/60 via-white to-stone-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              Direct From The Mill • Wholesale & Custom Cuts
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight mb-6">
              Precision Timber Sawing & <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent">
                High-Grade Wood Supplies
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We process high-strength timber logs into customized planks, beams, rafters, and packaging lumber for construction contractors, carpenters, and manufacturing units.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                Get Instant WhatsApp Quote
              </a>
              <a
                href="tel:"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold px-8 py-3.5 rounded-xl shadow-xs transition-all"
              >
                <PhoneCall className="w-5 h-5 text-amber-700" />
                Call Mill Directly
              </a>
            </div>
          </div>
        </section>

        {/* Value Highlights */}
        <section className="py-14 border-y border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Custom Dimensions</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">Accurate precision sawing cut to your exact bill of quantities and measurements.</p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Multiple Species</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">Hardwood, softwood, teak, pine, and structural commercial timber options.</p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Direct Site Delivery</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">Reliable vehicle dispatch directly to construction sites and commercial factories.</p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Transparent Pricing</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">Honest cubic measurement and transparent wholesale mill pricing with no middlemen.</p>
            </div>
          </div>
        </section>

        {/* Products Catalog Section */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              What We Supply
            </div>
            <h2 className="text-3xl font-extrabold text-stone-900">Timber & Wood Products</h2>
            <p className="text-stone-600 text-base mt-2 max-w-xl mx-auto">
              Sourced from verified quality logs and sawed to meet the demands of builders and craftsmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {item.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Hi Sree Ambika Saw Mill, I am interested in inquiring about ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900 hover:underline"
                  >
                    <span>Request price for this</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Capabilities Banner */}
        <section className="bg-amber-900 text-white py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Specific Cutting Measurements?</h2>
            <p className="text-amber-200 text-base mb-8 max-w-2xl mx-auto">
              Send us your log cutting requirements, plank dimensions, or order specifications directly on WhatsApp for an immediate quotation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-8">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-amber-950/40 p-3 rounded-xl border border-amber-800/60 text-sm text-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 text-stone-950" />
              <span>Connect on WhatsApp Now</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-amber-700" />
            <span className="font-bold text-stone-900">Sree Ambika Saw Mill</span>
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


