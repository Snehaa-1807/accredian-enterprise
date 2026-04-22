const domains = [
  { icon: "💡", label: "Product & Innovation Hub" },
  { icon: "🤖", label: "Gen-AI Mastery" },
  { icon: "👥", label: "Leadership Elevation" },
  { icon: "📊", label: "Tech & Data Insights" },
  { icon: "⚙️", label: "Operations Excellence" },
  { icon: "🌐", label: "Digital Enterprise" },
  { icon: "💳", label: "Fintech Innovation Lab" },
];

export default function DomainExpertise() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Our <span className="text-blue-500">Domain Expertise</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          <span className="text-blue-500">Specialized Programs</span> Designed to Fuel Innovation
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {domains.map((d) => (
            <div
              key={d.label}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-2xl transition-colors">
                {d.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
