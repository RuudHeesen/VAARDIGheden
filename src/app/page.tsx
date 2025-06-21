import TestChatBot from '@/components/TestChatBot'

export default function CurriculumAnalysePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            CURRICULUM ANALYSE
          </h1>
          
          <p className="text-xl text-gray-700 font-medium mb-8 max-w-4xl mx-auto">
            Expert AI-assistent voor curriculumontwerp en didactiek. Upload je syllabus of examenprogramma en krijg een gedetailleerde analyse volgens het pedagogische raamwerk van kennissoorten en vaardighedentypen.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-blue-200">
              <span className="text-blue-600 font-semibold">📚 Kennisanalyse</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-purple-200">
              <span className="text-purple-600 font-semibold">🎯 Vaardighedenstructuur</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">📈 Didactische Inzichten</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-orange-200">
              <span className="text-orange-600 font-semibold">🏆 Lespraktijk Tips</span>
            </div>
          </div>
        </div>

        {/* Raamwerk Overzicht */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Soorten Kennis */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Soorten Kennis</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-700 mb-1">Feitenkennis</h3>
                <p className="text-sm text-gray-600">Specifieke informatie-eenheden: namen, data, definities, formules</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-indigo-700 mb-1">Conceptuele Kennis</h3>
                <p className="text-sm text-gray-600">Relaties en verbanden: principes, theorieën, modellen, 'grote ideeën'</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-700 mb-1">Procedurele Kennis</h3>
                <p className="text-sm text-gray-600">Hoe-kennis: methoden, technieken, stappenplannen, algoritmes</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-pink-700 mb-1">Metacognitieve Kennis</h3>
                <p className="text-sm text-gray-600">Kennis over eigen denken: strategieën, zelfregulatie, reflectie</p>
              </div>
            </div>
          </div>

          {/* Soorten Vaardigheden */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Soorten Vaardigheden</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700 mb-1">Leervoorwaardelijke vaardigheden</h3>
                <p className="text-sm text-gray-600">Sociaal handelen, samenwerken, leervaardigheden, plannen</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-teal-700 mb-1">Basisvaardigheden</h3>
                <p className="text-sm text-gray-600">Taal, rekenen, burgerschap, digitale geletterdheid</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-orange-700 mb-1">Vakspecifieke vaardigheden</h3>
                <p className="text-sm text-gray-600">Unieke praktische vaardigheden per vak</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700 mb-1">Denkvaardigheden</h3>
                <p className="text-sm text-gray-600">Analytisch, kritisch en creatief denken</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-700 mb-1">Samengestelde vaardigheden</h3>
                <p className="text-sm text-gray-600">Complexe, overkoepelende competenties</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Curriculum Analist */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                AI Curriculum Analist
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Upload je syllabus of examenprogramma en krijg een gedetailleerde analyse volgens het pedagogische raamwerk. De AI categoriseert alle inhoud en geeft praktische tips voor je lespraktijk.
              </p>
            </div>

            {/* Instructies */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">📋</span>
                </span>
                Hoe gebruik je de Curriculum Analist?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="text-blue-600 font-bold mb-2">1. Upload</div>
                  <p className="text-sm text-gray-600">Upload je syllabus, examenprogramma of curriculumdocument (PDF, Word, of tekst)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="text-purple-600 font-bold mb-2">2. Analyseer</div>
                  <p className="text-sm text-gray-600">De AI analyseert volgens het raamwerk van kennissoorten en vaardighedentypen</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-green-600 font-bold mb-2">3. Implementeer</div>
                  <p className="text-sm text-gray-600">Krijg een overzichtelijke tabel met praktische tips voor je lespraktijk</p>
                </div>
              </div>
            </div>

            {/* Voorbeeldprompts */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                💡 Voorbeeldvragen voor curriculum analyse:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <span className="text-blue-600 font-medium">"Analyseer mijn syllabus volgens het kennisraamwerk"</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <span className="text-purple-600 font-medium">"Welke vaardighedentypen komen voor in dit examenprogramma?"</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <span className="text-green-600 font-medium">"Maak een overzichtelijke tabel voor mijn lespraktijk"</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <span className="text-orange-600 font-medium">"Welke metacognitieve kennis zit er in mijn curriculum?"</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <span className="text-red-600 font-medium">"Hoe kan ik denkvaardigheden beter integreren?"</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-yellow-200">
                    <span className="text-yellow-600 font-medium">"Geef tips voor het onderwijzen van procedurele kennis"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Systeem Prompt Info */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🤖 AI Expert Configuratie</h3>
              <p className="text-blue-700 text-sm mb-3">
                De AI is geconfigureerd als expert in curriculumontwerp en didactiek, gespecialiseerd in pedagogiek, didactiek en psychologie van het leren. 
                Het systeem gebruikt het vaststaande raamwerk van kennissoorten en vaardighedentypen volgens SLO 2023.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  <strong>Systeem Prompt:</strong> "Je bent een expert in curriculumontwerp en didactiek, met een specialisatie in de pedagogiek, didactiek en psychologie van het leren. 
                  Analyseer de bijgevoegde syllabus/examenprogramma en categoriseer de inhoud volgens het raamwerk van Soorten Kennis (Feitenkennis, Conceptuele Kennis, Procedurele Kennis, Metacognitieve Kennis) 
                  en Soorten Vaardigheden (Leervoorwaardelijke, Basis-, Vakspecifieke, Denk-, en Samengestelde vaardigheden). 
                  Presenteer de analyse in een overzichtelijke tabel met drie kolommen: Soort Kennis/Vaardigheid, Voorbeelden uit de Syllabus, en Toelichting voor de Leraar."
                </p>
              </div>
            </div>

            {/* AI Chat Interface */}
            <TestChatBot />
          </div>
        </div>

        {/* Methodologie */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📚 Methodologische Basis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Kennisraamwerk</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Gebaseerd op de taxonomie van Anderson & Krathwohl (2001), die onderscheid maakt tussen verschillende kennistypen 
                  en hun rol in het leerproces.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Factual Knowledge (Feitenkennis)</li>
                  <li>• Conceptual Knowledge (Conceptuele kennis)</li>
                  <li>• Procedural Knowledge (Procedurele kennis)</li>
                  <li>• Metacognitive Knowledge (Metacognitieve kennis)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Vaardighedenraamwerk</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Volgens het document 'Vaardigheden in het landelijke curriculum' (SLO, 2023), 
                  dat een systematische indeling geeft van verschillende vaardighedentypen.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Leervoorwaardelijke vaardigheden</li>
                  <li>• Basisvaardigheden (incl. burgerschap & digitale geletterdheid)</li>
                  <li>• Vakspecifieke vaardigheden</li>
                  <li>• Denkvaardigheden (analytisch, kritisch, creatief)</li>
                  <li>• Samengestelde vaardigheden</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <span>🎓</span>
            <span className="font-medium">Professionele Curriculum Analyse met AI</span>
            <span>🎓</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Curriculum Analist • Powered by Gemini AI • Gebaseerd op SLO 2023 & Anderson-Krathwohl Taxonomie
          </p>
        </div>
      </div>
    </div>
  )
}