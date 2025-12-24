export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
          <h1>?? ManufacturingLM</h1>
          <p>AI Copilot for Manufacturing Excellence</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 20, marginTop: 20 }}>
            <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8 }}>?? Sources Panel</div>
            <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8 }}>?? AI Assistant</div>
            <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8 }}>?? Design Studio</div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
