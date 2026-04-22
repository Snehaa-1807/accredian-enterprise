const catItems = [
  {
    icon: "💡",
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
  },
  {
    icon: "⚙️",
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
  },
  {
    icon: "🛠️",
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
  },
];

const steps = [
  {
    num: "1",
    icon: "📊",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    num: "2",
    icon: "🖥️",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    num: "3",
    icon: "📦",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function CATFramework() {
  return (
    <>
      {/* CAT Framework */}
      <section id="cat" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            The <span className="text-blue-500">CAT Framework</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12">
            Our Proven Approach to <span className="text-blue-500">Learning Excellence</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {catItems.map((item, i) => (
              <div key={item.title} className="flex items-center">
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full border-4 border-blue-200 bg-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-3xl mb-1">{item.icon}</span>
                      <p className="font-black text-gray-900 text-sm">{item.title}</p>
                    </div>
                    {/* Connector dot */}
                    {i < catItems.length - 1 && (
                      <div className="absolute top-1/2 -right-3 w-3 h-3 rounded-full bg-blue-400 -translate-y-1/2" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-3 max-w-[120px] leading-snug">{item.desc}</p>
                </div>
                {/* Connector line */}
                {i < catItems.length - 1 && (
                  <div className="w-12 h-0.5 bg-blue-300 mx-0 mt-[-2rem] hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            How We <span className="text-blue-500">Deliver Results</span> That Matter?
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            A Structured Three-Step Approach to <span className="text-blue-500">Skill Development</span>
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.title} className="border border-blue-100 rounded-xl p-6 relative hover:shadow-md transition-shadow">
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                  {s.num}
                </div>
                <div className="mt-6 mb-3 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <p className="font-bold text-gray-900 text-sm mb-2">{s.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
