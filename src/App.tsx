import { useState, useMemo } from 'react'
import { 
  TreePine, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock,
  Layers,
  Sparkles,
  CheckCircle2,
  Search,
  ChevronDown,
  X,
  Send,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-react'

interface ProductItem {
  id: string
  title: string
  category: 'structural' | 'planks' | 'packaging' | 'hardwood'
  desc: string
  tag: string
  popularSpecs: string
  bestFor: string
}

export default function App() {
  // Interactive Filter & Search States
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  // Interactive Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalProduct, setModalProduct] = useState<string>('General Timber Inquiry')
  const [modalWoodType, setModalWoodType] = useState<string>('Teak Wood')
  const [modalDimensions, setModalDimensions] = useState<string>('')
  const [modalNotes, setModalNotes] = useState<string>('')

  // Interactive FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const products: ProductItem[] = [
    {
      id: 'structural-beams',
      title: 'Structural Beams & Pillars',
      category: 'structural',
      desc: 'Heavy-duty structural timbers capable of bearing immense loads for roofing, joists, foundation posts, and framing.',
      tag: 'Heavy Duty',
      popularSpecs: 'Lengths up to 20ft • Sizes: 4x4", 6x6", 8x8"',
      bestFor: 'Building construction, roof trusses, verandas',
    },
    {
      id: 'custom-planks',
      title: 'Precision Sawn Planks & Battens',
      category: 'planks',
      desc: 'Uniformly sliced planks cut to high tolerance thickness and width. Clean surface finish ready for carpentry.',
      tag: 'Custom Sized',
      popularSpecs: 'Thickness: 1", 1.5", 2" • Widths: 4" to 12"',
      bestFor: 'Furniture, door frames, window shutters, shelving',
    },
    {
      id: 'packaging-wood',
      title: 'Industrial Packaging & Pallet Wood',
      category: 'packaging',
      desc: 'Economical, strong runner timber and cut-to-size slats designed specifically for shipping crates and cargo pallets.',
      tag: 'Wholesale',
      popularSpecs: 'Standard Pallet Sizes • Heat/Chemical Treated on request',
      bestFor: 'Export factories, warehouse crates, industrial packaging',
    },
    {
      id: 'premium-teak',
      title: 'First-Grade Teak Timber',
      category: 'hardwood',
      desc: 'Authentic seasoned teak logs and planks renowned for termite resistance, natural grain beauty, and decades-long durability.',
      tag: 'Premium Grade',
      popularSpecs: 'Natural Grains • Kiln dried / seasoned options',
      bestFor: 'Luxury main doors, pooja units, heritage furniture',
    },
    {
      id: 'shuttering-planks',
      title: 'Concrete Shuttering Timber',
      category: 'structural',
      desc: 'Rough-sawn durable construction wood engineered for repetitive concrete formwork, slab centering, and scaffolding.',
      tag: 'Construction',
      popularSpecs: 'Standard 8ft x 1ft or custom widths',
      bestFor: 'Civil contractors, RCC slab casting, scaffolding',
    },
    {
      id: 'country-hardwood',
      title: 'Selected Country Hardwood Logs',
      category: 'hardwood',
      desc: 'Tough native hardwood species (Neem, Sal, Rubberwood, Babool) processed for rugged structural utility and framing.',
      tag: 'All-Weather',
      popularSpecs: 'High density logs sawed to custom BOQ specifications',
      bestFor: 'Window frames, truck body building, farm implements',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Timber' },
    { id: 'structural', label: 'Construction & Beams' },
    { id: 'planks', label: 'Planks & Sawn Lumber' },
    { id: 'hardwood', label: 'Hardwood & Teak' },
    { id: 'packaging', label: 'Industrial & Packaging' },
  ]

  const services = [
    'Log Breakdown & Precision Band-Saw Cutting',
    'Custom Sizing as per Bill of Quantities (BOQ)',
    'On-Site Loading & Prompt Transport Dispatch',
    'Bulk Orders for Contractors & Furniture Factories',
  ]

  const faqs = [
    {
      q: 'Can I bring my own wood logs for custom cutting?',
      a: 'Yes! We offer on-demand contract sawing. You can bring your own logs, and our sawyers will mill them to your specified plank or beam dimensions with minimal wastage.',
    },
    {
      q: 'Do you deliver directly to construction sites and factories?',
      a: 'Absolutely. We organize transport vehicle dispatch directly from our mill yard to your site across neighboring districts for bulk and medium orders.',
    },
    {
      q: 'How do I get a price quote for custom cut sizes?',
      a: 'Simply click "Request Quote" or message us on WhatsApp with your required dimensions (Length x Width x Thickness) and quantity. We will calculate the total volume and send you the best factory-direct price.',
    },
    {
      q: 'What wood species do you usually have ready in stock?',
      a: 'We routinely stock Teak, Country Hardwood, Pine, Sal, Rubberwood, and diverse industrial packaging timbers. Custom species can also be sourced on request.',
    },
  ]

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
      const matchesSearch = 
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, searchQuery])

  // Open modal with specific product
  const handleOpenQuoteModal = (productTitle: string) => {
    setModalProduct(productTitle)
    setIsModalOpen(true)
  }

  // Generate WhatsApp link from modal
  const handleSendModalQuote = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi Sree Ambika Saw Mill,\n\nI would like a quote for:\n• Product: ${modalProduct}\n• Preferred Wood: ${modalWoodType}\n• Dimensions/Quantity: ${modalDimensions || 'Standard'}\n${modalNotes ? `• Notes: ${modalNotes}\n` : ''}\nPlease let me know pricing and availability.`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
    setIsModalOpen(false)
  }

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
              <a href="#highlights" className="hover:text-stone-900 transition-colors">Why Us</a>
              <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
              <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
            </nav>
            <button
              onClick={() => handleOpenQuoteModal('General Timber Inquiry')}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/15 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-amber-50/50 via-white to-stone-50">
          <div className="max-w-4xl mx-auto text-center">
            
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
              <button
                onClick={() => handleOpenQuoteModal('Instant Wood Inquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Instant WhatsApp Quote</span>
              </button>
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

        {/* Rich Interactive Products Catalog Section */}
        <section id="products" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              Interactive Timber Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading">
              Explore Our Timber Stock
            </h2>
            <p className="text-stone-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Filter by timber category or search for specific woods and dimensions.
            </p>
          </div>

          {/* Interactive Search & Filter Bar */}
          <div className="mb-10 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by wood type, application, or size..."
                className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-amber-800 text-white shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-400 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Result count indicator */}
            <div className="text-center text-xs text-stone-500">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item) => (
                <div 
                  key={item.id} 
                  className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {item.tag}
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 font-heading tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-stone-100 text-xs text-stone-500">
                      <div><strong className="text-stone-700">Specs:</strong> {item.popularSpecs}</div>
                      <div><strong className="text-stone-700">Best for:</strong> {item.bestFor}</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <button
                      onClick={() => handleOpenQuoteModal(item.title)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-emerald-600 hover:text-white text-stone-800 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer group"
                    >
                      <span>Inquire This Product</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <SlidersHorizontal className="w-8 h-8 text-stone-400 mx-auto mb-3" />
              <p className="text-stone-700 font-semibold">No wood types matched your search.</p>
              <p className="text-stone-500 text-xs mt-1">Try clearing filters or search for another term.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery('') }}
                className="mt-4 px-4 py-2 bg-amber-100 text-amber-900 rounded-xl text-xs font-bold hover:bg-amber-200 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Services & Capabilities Banner */}
        <section id="services" className="bg-stone-900 text-white py-20 px-4 sm:px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Have Specific Cutting Measurements?</h2>
            <p className="text-stone-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Send us your log cutting requirements, plank dimensions, or order specifications directly on WhatsApp for an immediate quotation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-10">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleOpenQuoteModal('Custom Log Cutting Request')}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-stone-950" />
              <span>Request Custom Cut Quote</span>
            </button>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section id="faq" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading">
              Clear Answers for Buyers
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Common questions from builders, carpenters, and packaging contractors.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-stone-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <span className="font-heading text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>

      {/* Interactive Quick Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <h3 className="font-heading text-xl font-bold text-stone-900">Request Timber Quote</h3>
                <p className="text-xs text-stone-500 mt-0.5">Quick specs to generate your WhatsApp inquiry.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendModalQuote} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                  Selected Item
                </label>
                <input
                  type="text"
                  value={modalProduct}
                  onChange={(e) => setModalProduct(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm font-medium focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                  Preferred Wood Species
                </label>
                <select
                  value={modalWoodType}
                  onChange={(e) => setModalWoodType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm font-medium focus:outline-none focus:border-amber-600 cursor-pointer"
                >
                  <option value="Teak Wood">Teak Wood (1st / 2nd Quality)</option>
                  <option value="Country Hardwood">Country Hardwood / Native Wood</option>
                  <option value="Pine Wood">Pine Wood (Imported / Standard)</option>
                  <option value="Sal / Neem Wood">Sal / Neem / Tough Hardwood</option>
                  <option value="Industrial Packaging Wood">Industrial Pallet & Packaging Wood</option>
                  <option value="Other / Need Recommendation">Other / Need Recommendation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                  Required Dimensions / Approximate Quantity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 pcs of 10ft x 5in x 3in or 50 CFT"
                  value={modalDimensions}
                  onChange={(e) => setModalDimensions(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm font-medium focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                  Additional Notes (Delivery location, custom sawing, etc.)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need delivery to site in Salem next week..."
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm font-medium focus:outline-none focus:border-amber-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch WhatsApp Quote</span>
                </button>
                <p className="text-center text-xs text-stone-400 mt-2">
                  Direct connection with mill management • No spam or commission.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

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



