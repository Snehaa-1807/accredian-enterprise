"use client";
import { useState } from "react";

const testimonials = [
{
logo:"/images/clients/adp.png",
quote:
"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
},
{
logo:"/images/clients/bayer.png",
quote:
"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
}
];

export default function Testimonials() {
const [current,setCurrent]=useState(0);

return(
<section id="testimonials" className="py-14 bg-white">
<div className="max-w-6xl mx-auto px-6">

{/* Heading */}
<h2 className="text-center text-3xl sm:text-4xl font-bold mb-3">
Testimonials from{" "}
<span className="text-blue-600">
Our Partners
</span>
</h2>

<p className="text-center text-base text-gray-600 mb-12">
What <span className="text-blue-600">Our Clients</span> Are Saying
</p>


{/* Desktop */}
<div className="hidden md:grid md:grid-cols-2 gap-5 mb-6">
{testimonials.map((item)=>(
<div
key={item.logo}
className="
bg-white
border border-gray-200
rounded-xl
px-10 py-8
min-h-[250px]
hover:shadow-sm
transition
"
>

<img
src={item.logo}
alt="client logo"
className="h-12 object-contain mb-6"
/>

<p className="text-[17px] leading-9 text-gray-700">
“{item.quote}”
</p>

</div>
))}
</div>


{/* Mobile */}
<div className="md:hidden">
<div
className="
bg-white
border border-gray-200
rounded-xl
p-7
"
>
<img
src={testimonials[current].logo}
alt="client logo"
className="h-10 object-contain mb-6"
/>

<p className="text-gray-700 text-sm leading-8">
“{testimonials[current].quote}”
</p>

</div>

<div className="flex justify-center gap-2 mt-5">
{testimonials.map((_,i)=>(
<button
key={i}
onClick={()=>setCurrent(i)}
className={`
w-2.5 h-2.5 rounded-full
${i===current ? "bg-blue-600":"bg-gray-300"}
`}
/>
))}
</div>
</div>


{/* Desktop dots */}
<div className="hidden md:flex justify-center gap-2 mt-5">
<div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>

</div>
</section>
);
}