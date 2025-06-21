import TestChatBot from '@/components/TestChatBot'

export default function VaardighedenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            VAARDIGHEDEN
          </h1>
          
          <p className="text-xl text-gray-700 font-medium mb-8 max-w-3xl mx-auto">
            Ontwikkel je vaardigheden met AI-ondersteuning. Upload bestanden, stel vragen, en krijg gepersonaliseerde feedback om je competenties te versterken.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-blue-200">
              <span className="text-blue-600 font-semibold">📚 Leren</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-purple-200">
              <span className="text-purple-600 font-semibold">🎯 Oefenen</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">📈 Verbeteren</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-orange-200">
              <span className="text-orange-600 font-semibold">🏆 Excelleren</span>
            </div>
          </div>
        </div>

        {/* Vaardigheden Categorieën */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Communicatie */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Communicatie</h3>
            <p className="text-gray-600 mb-4">Verbeter je mondelinge en schriftelijke communicatievaardigheden</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Presenteren</li>
              <li>• Schrijfvaardigheid</li>
              <li>• Luistervaardigheden</li>
              <li>• Feedback geven</li>
            </ul>
          </div>

          {/* Kritisch Denken */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Kritisch Denken</h3>
            <p className="text-gray-600 mb-4">Ontwikkel analytische en probleemoplossende vaardigheden</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Analyse</li>
              <li>• Probleemoplossing</li>
              <li>• Logisch redeneren</li>
              <li>• Besluitvorming</li>
            </ul>
          </div>

          {/* Creativiteit */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Creativiteit</h3>
            <p className="text-gray-600 mb-4">Stimuleer innovatief denken en creatieve oplossingen</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Brainstorming</li>
              <li>• Innovatie</li>
              <li>• Design thinking</li>
              <li>• Artistieke expressie</li>
            </ul>
          </div>

          {/* Samenwerking */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Samenwerking</h3>
            <p className="text-gray-600 mb-4">Leer effectief samen te werken in teams</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Teamwork</li>
              <li>• Leiderschap</li>
              <li>• Conflictoplossing</li>
              <li>• Netwerken</li>
            </ul>
          </div>

          {/* Digitale Vaardigheden */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Digitale Vaardigheden</h3>
            <p className="text-gray-600 mb-4">Beheers moderne technologieën en tools</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• AI & Automatisering</li>
              <li>• Data-analyse</li>
              <li>• Programmeren</li>
              <li>• Cybersecurity</li>
            </ul>
          </div>

          {/* Zelfmanagement */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Zelfmanagement</h3>
            <p className="text-gray-600 mb-4">Ontwikkel persoonlijke effectiviteit en groei</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Timemanagement</li>
              <li>• Stressmanagement</li>
              <li>• Zelfreflectie</li>
              <li>• Doelgericht werken</li>
            </ul>
          </div>
        </div>

        {/* AI Vaardighedencoach */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                AI Vaardighedencoach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Upload je werk, stel vragen over vaardigheden, of vraag om feedback. De AI helpt je bij het ontwikkelen van je competenties met gepersonaliseerde begeleiding.
              </p>
            </div>

            {/* Voorbeeldvragen */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                💡 Voorbeeldvragen om te stellen:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <span className="text-blue-600 font-medium">"Hoe kan ik mijn presentatievaardigheden verbeteren?"</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <span className="text-purple-600 font-medium">"Geef feedback op mijn geschreven rapport"</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <span className="text-green-600 font-medium">"Help me een creatieve oplossing bedenken"</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <span className="text-orange-600 font-medium">"Hoe werk ik effectiever in teams?"</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-indigo-200">
                    <span className="text-indigo-600 font-medium">"Welke digitale tools kan ik gebruiken?"</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <span className="text-red-600 font-medium">"Help me mijn tijd beter in te delen"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Chat Interface */}
            <TestChatBot />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <span>🚀</span>
            <span className="font-medium">Ontwikkel je vaardigheden met AI-ondersteuning</span>
            <span>🚀</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Vaardigheden Platform • Powered by Gemini AI • Gemaakt door Tom Naberink
          </p>
        </div>
      </div>
    </div>
  )
}