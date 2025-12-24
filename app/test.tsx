// Test Tailwind - if this styles, Tailwind works
export default function TailwindTest() {
  return (
    <div className="p-8">
      <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">
        <p className="font-bold">Tailwind Test:</p>
        <p>If this box is blue with rounded corners, Tailwind is working.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-100 rounded">Green box</div>
        <div className="p-4 bg-red-100 rounded">Red box</div>
      </div>
    </div>
  );
}
