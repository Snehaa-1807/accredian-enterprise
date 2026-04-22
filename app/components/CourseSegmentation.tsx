import {
 MonitorCheck,
 MonitorX,
 GraduationCap,
 BriefcaseBusiness
} from "lucide-react";

const audiences = [
  {
    icon: MonitorCheck,
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    icon: MonitorX,
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: GraduationCap,
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
  },
];
const segments = [
  {
    img: "/images/Program.jpg",
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    img: "/images/Industry.jpg",
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    img: "/images/topic.jpg",
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    img: "/images/level.jpg",
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];


export default function CourseSegmentation() {
  return (
    <>
     <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
      Tailored <span className="text-blue-600">Course Segmentation</span>
    </h2>

    <p className="text-center text-lg text-gray-600 mb-12">
      Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
      Designed to Address Every Professional Focus
    </p>

    <div className="grid md:grid-cols-4 gap-6">
      {segments.map((s) => (
        <div
          key={s.title}
          className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          {/* Image */}
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-5 text-center">
            <h3 className="text-blue-600 text-xl font-bold mb-3">
              {s.title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              {s.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

     {/* Strategic Skill Enhancement */}
<section className="py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="bg-blue-600 rounded-2xl px-10 py-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Left */}
        <div>
          <p className="text-white text-base mb-2 font-medium">
            Who Should Join?
          </p>

          <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5">
            Strategic Skill Enhancement
          </h3>

          {/* smaller people image */}
          <img
            src="/images/professionals.png"
            alt="Professionals"
            className="w-[220px] md:w-[260px] object-contain"
          />
        </div>


        {/* Right */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {audiences.map((a) => {
            const Icon = a.icon;

            return (
              <div key={a.title}>
                <Icon
                  size={34}
                  strokeWidth={2.2}
                  className="text-white mb-3"
                />

                <h4 className="text-white text-lg font-bold mb-2">
                  {a.title}
                </h4>

                <p className="text-blue-100 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}
