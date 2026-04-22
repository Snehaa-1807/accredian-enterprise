import {
Lightbulb,
MessagesSquare,
RefreshCw,
Cpu,
MoveUpRight,
Target,
Package
} from "lucide-react";

const items = [
{
icon:Lightbulb,
title:"Tailored Solutions",
desc:"Programs customized to your organization's goals and challenges.",
top:true
},
{
icon:MessagesSquare,
title:"Expert Guidance",
desc:"Learn from industry leaders with real-world success.",
top:false
},
{
icon:RefreshCw,
title:"Innovative Framework",
desc:"Proprietary methods for impactful, application-driven results.",
top:true
},
{
icon:Cpu,
title:"Advanced Technology",
desc:"State-of-the-art LMS for seamless learning experiences.",
top:false
},
{
icon:MoveUpRight,
title:"Diverse Offerings",
desc:"Courses across industries, skill levels and emerging fields.",
top:true
},
{
icon:Target,
title:"Proven Impact",
desc:"Trusted by leading organizations for measurable ROI.",
top:false
},
{
icon:Package,
title:"Flexible Delivery",
desc:"Online and offline options tailored to your needs.",
top:true
}
];

export default function AccredianEdge(){
return(
<section className="pt-24 pb-56 bg-white">
<div className="max-w-7xl mx-auto px-8">

<h2 className="text-center text-4xl font-bold mb-4">
The <span className="text-blue-600">Accredian Edge</span>
</h2>

<p className="text-center text-lg text-gray-600 mb-48">
Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
</p>


{/* pushed timeline lower */}
<div className="relative flex justify-center items-center mt-28 mb-44">

{items.map((item,i)=>{
const Icon=item.icon;

return(
<div key={item.title} className="relative flex items-center">

{/* TOP LABELS MOVED HIGHER */}
{item.top && (
<div className="absolute -top-52 w-44 left-1/2 -translate-x-1/2">
<div className="w-[2px] h-16 bg-blue-600 ml-1 mb-2"></div>
<div className="w-2 h-2 rounded-full bg-sky-400 mb-2"></div>

<h4 className="font-bold text-xl mb-1">
{item.title}
</h4>

<p className="text-gray-700 text-sm leading-6">
{item.desc}
</p>
</div>
)}

{/* BOTTOM LABELS */}
{!item.top && (
<div className="absolute top-28 w-44 left-1/2 -translate-x-1/2">
<div className="w-2 h-2 rounded-full bg-blue-600 mb-2"></div>
<div className="w-[2px] h-16 bg-blue-600 ml-1 mb-2"></div>

<h4 className="font-bold text-xl mb-1">
{item.title}
</h4>

<p className="text-gray-700 text-sm leading-6">
{item.desc}
</p>
</div>
)}

{/* Circle */}
<div className="relative">
<div className="absolute -inset-3 rounded-full border-2 border-dashed border-gray-300"></div>

<div className="relative w-36 h-36 rounded-full bg-white border-[3px] border-blue-600 shadow-xl flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center">
<Icon size={42} className="text-white"/>
</div>
</div>
</div>

{i<items.length-1 &&(
<div className="mx-2 text-gray-300 text-6xl font-light">
›
</div>
)}

</div>
)
})}

</div>
</div>
</section>
)
}