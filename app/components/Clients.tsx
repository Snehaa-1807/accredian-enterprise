const clients = [
  { name: "Reliance", sub: "Industries Limited", color: "text-red-700", bg: "bg-red-50" },
  { name: "HCL", sub: "", color: "text-blue-700", bg: "bg-blue-50" },
  { name: "IBM", sub: "", color: "text-blue-900", bg: "bg-blue-50" },
  { name: "CRIF", sub: "higher the next level", color: "text-orange-600", bg: "bg-orange-50" },
  { name: "ADP", sub: "", color: "text-red-600", bg: "bg-red-50" },
  { name: "BAYER", sub: "", color: "text-green-700", bg: "bg-green-50" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Our Proven <span className="text-blue-500">Partnerships</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Successful Collaborations With the <span className="text-blue-500">Industry's Best</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className={`${c.bg} ${c.color} rounded-xl px-6 py-4 flex flex-col items-center justify-center min-w-[100px] shadow-sm border border-gray-100`}
            >
              <span className="text-xl font-black">{c.name}</span>
              {c.sub && <span className="text-[9px] font-medium mt-0.5 opacity-70">{c.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
