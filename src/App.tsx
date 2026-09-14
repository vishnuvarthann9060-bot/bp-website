import { 
  TreePine, 
  PhoneCall, 
  MessageSquare, 
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-700/20 font-black">
              <TreePine className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 block leading-tight font-heading">
                Sree Ambika Saw Mill
              </span>
              <span className="text-xs text-amber-700 font-semibold tracking-wider uppercase">
                Wood & Timber Industries
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
              <a href="#products" className="hover:text-stone-900 transition-colors">Products</a>
              <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
              <a href="#highlights" className="hover:text-stone-900 transition-colors">Why Us</a>
            </nav>
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
        <section className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-amber-50/50 via-white to-stone-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-8 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              Direct From The Mill • Wholesale & Custom Cuts
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-6 font-heading">
              We don't just supply timber. <br />
              <span className="text-amber-800">
                We build your structural foundation.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Precision log breakdown, high-grade structural wood, and customized planks cut to your exact bill of quantities for construction and carpentry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Instant WhatsApp Quote</span>
              </a>
              <a
                href="tel:"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold px-8 py-3.5 rounded-xl shadow-xs transition-all"
              >
                <PhoneCall className="w-5 h-5 text-amber-700" />
                <span>Call Mill Directly</span>
              </a>
            </div>
          </div>
        </section>

        {/* Value Highlights with 01, 02, 03 editorial styling */}
        <section id="highlights" className="py-20 border-y border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-amber-700 mb-4 block">01</span>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-heading tracking-tight">
                  Adapts to Your Dimensions
                </h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Every construction and woodwork project has unique sizing requirements. Our heavy-duty band saws cut logs to precision lengths, widths, and thicknesses without compromise.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-amber-700 mb-4 block">02</span>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-heading tracking-tight">
                  Precision at Core
                </h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Equipped with seasoned sawyers and true-running blades that deliver clean surface cuts, tight tolerances, and uniform plank sizing job after job.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-amber-700 mb-4 block">03</span>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-heading tracking-tight">
                  A Partnership, Not a Sale
                </h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  Our relationship begins when your order is placed. Direct site delivery, transparent cubic volume measurements, and prompt restocking keep your job sites moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Catalog Section */}
        <section id="products" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              What We Supply
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading">Timber & Wood Products</h2>
            <p className="text-stone-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Sourced from verified quality logs and precision sawed to meet the exacting standards of builders and craftsmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {item.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 font-heading tracking-tight">{item.title}</h3>
                  <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-100">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Hi Sree Ambika Saw Mill, I am interested in inquiring about ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-900 group"
                  >
                    <span>Request price for this</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Capabilities Banner */}
        <section id="services" className="bg-stone-900 text-white py-20 px-4 sm:px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Have Specific Cutting Measurements?</h2>
            <p className="text-stone-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
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


