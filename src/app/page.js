"use client";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 min-h-screen overflow-x-hidden text-white">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 -top-48 -left-48 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-600 top-96 -right-48 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-600 bottom-0 left-1/2 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section - CLEAR MESSAGING */}
        <div className="container mx-auto px-6 pt-20 pb-16">
          
          {/* Problem Statement Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 inline-flex items-center gap-2 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">For chronic illness warriors</span>
            </div>
          </div>

          {/* Clear Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Track Health Symptoms<br/>
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                By Just Talking
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
              Speak your symptoms. AI logs everything. Predicts flare-ups before they happen.
            </p>

            {/* Value Props in One Line */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">🎤 Voice Logging</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">🏷️ Auto-Tagging</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">🔮 Pattern Detection</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">⚡ Flare-up Predictions</span>
            </div>
          </div>

          {/* CTA with Clear Action - FIXED */}
          <div className="flex flex-col items-center gap-4 mb-20">
            <a 
              href="#waitlist" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Start Tracking Symptoms Free →
            </a>
            <p className="text-gray-400 text-sm">No typing required • Works when you&apos;re in pain</p>
          </div>

          {/* How It Works - Super Clear */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              How <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">HealthLog</span> Works
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 - FIXED */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Speak Symptoms</h3>
                <p className="text-gray-400 text-sm">{`"Migraine started after lunch, neck pain level 7"`}</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">AI Auto-Tags</h3>
                <p className="text-gray-400 text-sm">#migraine #neck-pain #afternoon #severe</p>
              </div>

              {/* Step 3 - FIXED */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Find Patterns</h3>
                <p className="text-gray-400 text-sm">{`"Migraines happen 2 days after poor sleep"`}</p>
              </div>

              {/* Step 4 - FIXED */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Predict &amp; Prevent</h3>
                <p className="text-gray-400 text-sm">{`"Flare-up likely tomorrow. Rest today."`}</p>
              </div>
            </div>
          </div>

          {/* 3 Main Features - SPECIFIC */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Voice Symptom Logging - FIXED */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur rounded-3xl p-8 border border-purple-800/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-3">Voice Symptom Diary</h3>
              <p className="text-gray-300 mb-4">Can&apos;t type when symptoms are bad? Just talk. AI understands medical terms, severity, location.</p>
              <div className="text-purple-400 text-sm">
                ✓ {`"Stabbing pain left temple"`}<br/>
                ✓ {`"Brain fog since morning"`}<br/>
                ✓ {`"Fatigue level 8 out of 10"`}
              </div>
            </div>

            {/* Smart Tagging */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur rounded-3xl p-8 border border-purple-800/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="text-5xl mb-4">🏷️</div>
              <h3 className="text-2xl font-bold mb-3">Automatic Tagging</h3>
              <p className="text-gray-300 mb-4">AI categorizes everything: symptoms, triggers, time, severity. No manual logging.</p>
              <div className="text-purple-400 text-sm">
                ✓ Time patterns tracked<br/>
                ✓ Trigger identification<br/>
                ✓ Severity monitoring
              </div>
            </div>

            {/* Prediction */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur rounded-3xl p-8 border border-purple-800/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Flare-up Predictions</h3>
              <p className="text-gray-300 mb-4">AI learns your patterns and warns you before symptoms worsen. Prevention beats treatment.</p>
              <div className="text-purple-400 text-sm">
                ✓ 3-day forecasts<br/>
                ✓ Trigger warnings<br/>
                ✓ Prevention tips
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases - SPECIFIC CONDITIONS */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Built for People With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Chronic Pain</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Fibromyalgia</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Migraines</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Autoimmune</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">ME/CFS</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">POTS</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Long COVID</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Mental Health</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Any Chronic Condition</span>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">30 sec</div>
              <p className="text-gray-300">Daily logging time</p>
            </div>
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">85%</div>
              <p className="text-gray-300">Prediction accuracy</p>
            </div>
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">Free</div>
              <p className="text-gray-300">No credit card</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="waitlist" className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-10 border border-purple-700/50">
              
              <h2 className="text-3xl font-black text-center mb-3">
                Start Tracking Symptoms
              </h2>
              <p className="text-gray-400 text-center mb-8">
                Join 100+ people already using voice AI for health tracking
              </p>
              
              <form action="https://formspree.io/f/xblkqozj" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-lg focus:outline-none focus:border-purple-400 transition mb-6"
                />
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 rounded-2xl text-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
                >
                  Get Early Access →
                </button>
              </form>
              
              <p className="text-center text-gray-500 text-sm mt-6">
                ✓ Free forever for first 100 users<br/>
                ✓ No credit card required<br/>
                ✓ Your data stays private
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center">
          <p className="text-gray-500">
            HealthLog GPT - Voice-powered symptom tracking &amp; prediction
          </p>
        </footer>
      </div>
    </div>
  );
}