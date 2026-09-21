import React, { useState } from 'react';

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  // Sample pages user might be searching for
  const availablePages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Support', path: '/support' },
    { name: 'Settings', path: '/settings' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchMessage('');

    setTimeout(() => {
      setIsSearching(false);
      const query = searchQuery.toLowerCase().trim();
      const match = availablePages.find((p) => p.name.toLowerCase().includes(query));

      if (match) {
        setSearchMessage(`Found matching page: "${match.name}". Navigating...`);
      } else {
        setSearchMessage(`No exact matches for "${searchQuery}". Try exploring the links below!`);
      }
    }, 500);
  };

  const quickLinks = [
    {
      title: 'Back to Home',
      desc: 'Return to the main landing page and start fresh.',
      path: '/',
      tag: 'Primary',
      svgIcon: (
        <svg className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'System Dashboard',
      desc: 'Access core platform overview, analytics, and metrics.',
      path: '/dashboard',
      tag: 'App',
      svgIcon: (
        <svg className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Documentation',
      desc: 'Read developer guides, API references, and tutorials.',
      path: '/docs',
      tag: 'Help',
      svgIcon: (
        <svg className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Contact Support',
      desc: 'Get in touch with our support team for resolution.',
      path: '/support',
      tag: '24/7 Support',
      svgIcon: (
        <svg className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-175 h-[500px] sm:h-[700px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] pointer-events-none z-0" 
      />

      {/* Main Container */}
      <main className="container mx-auto px-4 py-12 sm:py-16 grow flex flex-col items-center justify-center relative z-10 max-w-4xl">
        
        {/* Animated 404 Hero Header */}
        <div className="relative mb-6 text-center">
          <div className="relative inline-block">
            {/* Main 404 Gradient Text */}
            <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 select-none animate-pulse">
              404
            </h1>

            {/* Floating Compass / Planet Badge */}
            <div className="absolute -top-3 -right-4 sm:-top-5 sm:-right-8 bg-slate-900/90 p-2.5 sm:p-3.5 rounded-2xl border border-indigo-500/30 shadow-xl shadow-indigo-500/10 backdrop-blur-md animate-bounce">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed in the first place.
          </p>
        </div>

        {}
        <div className="w-full max-w-md mb-8">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination page..."
              className="w-full pl-11 pr-24 py-3 bg-slate-900/90 border border-slate-800 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 text-sm shadow-inner"
            />
            {/* Inline Search SVG Icon */}
            <svg className="w-5 h-5 text-slate-500 absolute left-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-lg text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
            >
              {isSearching ? (
                <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                'Search'
              )}
            </button>
          </form>

          {searchMessage && (
            <div className="mt-2 text-center text-xs text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 py-2 px-3 rounded-lg">
              {searchMessage}
            </div>
          )}
        </div>

        {}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>

          <a
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-lg shadow-indigo-600/25"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
            </svg>
            Take Me Home
          </a>
        </div>

        {/* Quick Suggestions Cards */}
        {/* <div className="w-full max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Or visit one of these popular pages
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="group relative p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 backdrop-blur-sm flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 group-hover:bg-indigo-600 transition-colors duration-200 shrink-0">
                  {item.svgIcon}
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div> */}
      </main>

      <footer className="py-4 text-center text-xs text-slate-600 border-t border-slate-900/80">
        <p>HTTP 404 • Resource Not Available</p>
      </footer>
    </div>
  );
}