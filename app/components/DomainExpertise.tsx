import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard
} from "lucide-react";

const domains = [
  { icon: Lightbulb, label: "Product & Innovation Hub" },
  { icon: Brain, label: "Gen-AI Mastery" },
  { icon: Users, label: "Leadership Elevation" },
  { icon: BarChart3, label: "Tech & Data Insights" },
  { icon: Settings, label: "Operations Excellence" },
  { icon: Globe, label: "Digital Enterprise" },
  { icon: CreditCard, label: "Fintech Innovation Lab" },
];

export default function DomainExpertise() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-center text-3xl font-bold text-gray-900 mb-3">
          Our <span className="text-blue-600">Domain Expertise</span>
        </h2>

        <p className="text-center text-base text-gray-600 mb-10">
          <span className="text-blue-600">Specialized Programs</span>{" "}
          Designed to Fuel Innovation
        </p>

        {/* Top 6 */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {domains.slice(0,6).map((d)=> {
            const Icon = d.icon;

            return (
              <div
                key={d.label}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center hover:shadow-md transition"
              >
                <div className="mb-4">
                  <Icon
                    size={54}
                    strokeWidth={2}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-semibold text-center text-gray-900">
                  {d.label}
                </h3>

              </div>
            );
          })}
        </div>

        {/* Center last card */}
        <div className="flex justify-center">
          <div className="w-full md:w-[360px] bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center hover:shadow-md transition">
            <CreditCard
              size={54}
              strokeWidth={2}
              className="text-blue-600 mb-4"
            />

            <h3 className="text-xl font-semibold text-center text-gray-900">
              Fintech Innovation Lab
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}