const edgeItems = [
  {
    icon: "💡",
    label: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    top: true,
  },
  {
    icon: "⚙️",
    label: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    top: true,
  },
  {
    icon: "🌐",
    label: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    top: true,
  },
  {
    icon: "📦",
    label: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    top: true,
  },
  {
    icon: "🧑‍💼",
    label: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    top: false,
  },
  {
    icon: "🖥️",
    label: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    top: false,
  },
  {
    icon: "✅",
    label: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    top: false,
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          The <span className="text-blue-500">Accredian Edge</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          Key Aspects of <span className="text-blue-500">Our Strategic Training</span>
        </p>

        {/* Top row labels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {edgeItems.filter((e) => e.top).map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs font-bold text-gray-800 mb-1">† {item.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Icon circles row */}
        <div className="relative flex items-center justify-center gap-0 mb-4 overflow-x-auto py-4">
          {edgeItems.map((item, i) => (
            <div key={item.label} className="flex items-center shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl shadow-md border-4 border-white">
                  {item.icon}
                </div>
              </div>
              {i < edgeItems.length - 1 && (
                <div className="w-8 h-0.5 bg-blue-200 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom row labels */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {edgeItems.filter((e) => !e.top).map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs font-bold text-gray-800 mb-1">{item.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
