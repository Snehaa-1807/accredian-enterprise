import {
Lightbulb,
Cog,
Wrench,
BarChart3,
MonitorCheck,
Package
} from "lucide-react";
const catItems = [
  {
    icon: Lightbulb,
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
  },
  {
    icon: Cog,
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
  },
  {
    icon: Wrench,
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
  },
];

const steps = [
  {
    num: "1",
    icon: BarChart3,
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    num: "2",
    icon: MonitorCheck,
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    num: "3",
    icon: Package,
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];


export default function CATFramework() {
  return (
    <>
      {/* CAT Framework */}
      <section id="cat" className="py-16 bg-gradient-to-r from-slate-100 to-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
      The <span className="text-blue-600">CAT Framework</span>
    </h2>

    <p className="text-center text-gray-600 text-lg mb-16">
      Our Proven Approach to{" "}
      <span className="text-blue-600">Learning Excellence</span>
    </p>

    <div className="hidden md:flex justify-center items-center -space-x-8">

      {catItems.map((item, i) => (
        <div key={item.title} className="relative">

          {/* loop circles */}
          <div className="w-[320px] h-[320px] rounded-full border-[6px] border-blue-500 bg-transparent flex items-center justify-center relative">

            {/* connector dots */}
            {i !== 2 && (
              <div className="absolute right-[-16px] top-16 w-5 h-5 bg-blue-500 rounded-full"></div>
            )}

            {i !== 0 && (
              <div className="absolute left-[-16px] bottom-16 w-5 h-5 bg-blue-500 rounded-full"></div>
            )}

            {/* content */}
            <div className="text-center px-8">
              <div className="mb-5 flex justify-center">
  <item.icon
    size={56}
    strokeWidth={2}
    className="text-blue-600"
  />
</div>

              <h3 className="text-4xl font-bold mb-5 text-black">
                {item.title}
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

    {/* mobile fallback */}
    <div className="md:hidden grid gap-8">
      {catItems.map((item) => (
        <div
          key={item.title}
          className="w-72 h-72 mx-auto rounded-full border-[5px] border-blue-500 flex items-center justify-center"
        >
          <div className="text-center px-8">
<div className="mb-4 flex justify-center">
  <item.icon
    size={48}
    strokeWidth={2}
    className="text-blue-600"
  />
</div>            <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
            <p className="text-base text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* How We Deliver Results */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            How We <span className="text-blue-500">Deliver Results</span> That Matter?
          </h2>

          <p className="text-center text-gray-500 text-base mb-12">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-500">Skill Development</span>
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.title}
                className="border border-blue-100 rounded-2xl p-8 relative hover:shadow-md transition-shadow"
              >
                <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-black flex items-center justify-center">
                  {s.num}
                </div>

                <div className="mt-8 mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
  <s.icon
    size={34}
    strokeWidth={2.2}
    className="text-blue-600"
  />
</div>

                <p className="font-bold text-gray-900 text-lg mb-3">
                  {s.title}
                </p>

                <p className="text-gray-500 text-sm leading-7">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}