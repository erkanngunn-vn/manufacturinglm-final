// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ManufacturingLM | AI Copilot for Manufacturing</title>
      </head>
      <body className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b shadow-sm px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Manufacturing<span className="text-blue-600">LM</span>
                </h1>
                <p className="text-sm text-gray-600">AI Copilot for Manufacturing Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                🚀 Investor Demo
              </span>
            </div>
          </div>
        </header>

        {/* Main 3-Panel Layout */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Panel 1: Sources */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">📁</span> Sources
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  + Add
                </button>
              </div>
              <div className="space-y-3">
                <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📊</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Q3 Production Data</p>
                      <p className="text-xs text-gray-500">CSV • Updated 2h ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">📄</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Machine Manuals</p>
                      <p className="text-xs text-gray-500">PDF • Technical Specs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: AI Assistant */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🤖</span> AI Assistant
                </h2>
                <p className="text-sm text-gray-600">Ask questions about production data</p>
              </div>
              <div className="space-y-4">
                {children}
              </div>
            </div>

            {/* Panel 3: Design Studio */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🎨</span> Design Studio
                </h2>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">4 Tools</span>
              </div>
              <div className="space-y-3">
                <button className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  <p className="font-medium text-gray-800">📊 A3 Report Generator</p>
                  <p className="text-sm text-gray-600">Structured problem-solving document</p>
                </button>
                <button className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors">
                  <p className="font-medium text-gray-800">🔍 5-Why Analysis</p>
                  <p className="text-sm text-gray-600">Root cause investigation</p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
