const segments = [
  {
    img: "📋",
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    bg: "bg-blue-100",
  },
  {
    img: "🏭",
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    bg: "bg-purple-100",
  },
  {
    img: "🧠",
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    bg: "bg-pink-100",
  },
  {
    img: "🎯",
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    bg: "bg-yellow-100",
  },
];

const audiences = [
  {
    icon: "💻",
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    color: "text-blue-600",
  },
  {
    icon: "❌",
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    color: "text-red-500",
  },
  {
    icon: "🎓",
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    color: "text-green-600",
  },
  {
    icon: "💼",
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    color: "text-purple-600",
  },
];

export default function CourseSegmentation() {
  return (
    <>
      {/* Tailored Course Segmentation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Tailored <span className="text-blue-500">Course Segmentation</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Explore <span className="text-blue-500">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {segments.map((s) => (
              <div key={s.title} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${s.bg} h-28 flex items-center justify-center text-5xl`}>
                  {s.img}
                </div>
                <div className="p-4">
                  <p className="text-blue-600 font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-gray-500 text-xs leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Skill Enhancement */}
      <section className="py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-600 rounded-2xl overflow-hidden">
            <div className="grid sm:grid-cols-3 items-center">
              {/* Left text */}
              <div className="p-8 sm:col-span-1">
                <p className="text-blue-200 text-xs font-semibold mb-1">Who Should Join?</p>
                <h3 className="text-white text-2xl font-black leading-tight">Strategic Skill Enhancement</h3>
                {/* Person illustration */}
                <div className="mt-6 flex justify-start gap-3">
                  <div className="w-16 h-24 bg-blue-500/50 rounded-t-full flex flex-col items-center justify-start pt-3">
                    <div className="w-8 h-8 rounded-full bg-blue-300 mb-1" />
                    <div className="w-10 h-10 bg-blue-400/50 rounded" />
                  </div>
                  <div className="w-14 h-20 bg-blue-400/40 rounded-t-full flex flex-col items-center justify-start pt-3">
                    <div className="w-7 h-7 rounded-full bg-blue-200 mb-1" />
                  </div>
                </div>
              </div>
              {/* Right grid */}
              <div className="sm:col-span-2 grid grid-cols-2 gap-0 p-6">
                {audiences.map((a) => (
                  <div key={a.title} className="p-4 border-b border-r border-white/10 last:border-r-0">
                    <div className={`text-2xl mb-2 ${a.color}`}>{a.icon}</div>
                    <p className="text-white font-bold text-sm mb-1">{a.title}</p>
                    <p className="text-blue-100 text-xs leading-snug">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
