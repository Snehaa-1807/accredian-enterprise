import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 py-4 px-6">
<div className="max-w-7xl mx-auto">

<div className="bg-[#eef3fb] rounded-3xl h-[430px] px-14
flex items-center justify-between relative overflow-hidden">

{/* Left */}
<div className="max-w-[500px]">
<h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
Next-Gen <span className="text-blue-600">Expertise</span>
<br/>
For Your <span className="text-blue-600">Enterprise</span>
</h1>

<p className="text-lg leading-9 text-gray-800 mb-8">
Cultivate high-performance teams through expert learning.
</p>

<div className="flex flex-wrap gap-5 mb-8">
{["Tailored Solutions","Industry Insights","Expert Guidance"].map(item=>(
<div key={item} className="flex items-center gap-2">
<CheckCircle className="w-5 h-5 text-green-600"/>
<span className="text-sm font-medium">
{item}
</span>
</div>
))}
</div>

<Link
href="#faqs"
className="bg-blue-600 text-white px-7 py-3 rounded-xl text-base font-semibold"
>
Enquire Now
</Link>
</div>


{/* Right image */}
<div className="absolute right-8 bottom-0">
<img
src="/images/hero-professionals.png"
alt="Professionals"
className="h-[400px] object-contain"
/>
</div>

</div>
</div>
</section>
  );
}