// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-4">
      {/* Welcome Message */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-blue-800 font-medium">
          💡 <strong>Try asking:</strong> "Why did OEE drop in November?"
        </p>
        <p className="text-sm text-blue-700 mt-1">
          The AI will analyze production data and identify conveyor jams as the root cause.
        </p>
      </div>

      {/* AI Response Example */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-800">
              Based on the Q3 production data, OEE dropped to <strong>68% in November</strong> 
              due to frequent conveyor jams (error code <code className="bg-gray-200 px-1 rounded">ERR-S92</code>).
            </p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                📊 Show Analysis
              </button>
              <button className="px-3 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50">
                🔍 5-Why Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
