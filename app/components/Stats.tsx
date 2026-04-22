"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
{
 value:10,
 suffix:"K+",
 label:"Professionals Trained For Exceptional Career Success",
},
{
 value:200,
 suffix:"+",
 label:"Sessions Delivered With Unmatched Learning Excellence",
},
{
 value:5,
 suffix:"K+",
 label:"Active Learners Engaged In Dynamic Courses",
},
];

function useCountUp(end,triggered){
const [n,setN]=useState(0);

useEffect(()=>{
if(!triggered) return;

let start;

const step=(ts)=>{
if(!start) start=ts;
const p=Math.min((ts-start)/1400,1);

setN(Math.floor(end*p));

if(p<1) requestAnimationFrame(step);
};

requestAnimationFrame(step);
},[end,triggered]);

return n;
}

function Stat({stat}){
const ref=useRef(null);
const [triggered,setTriggered]=useState(false);
const n=useCountUp(stat.value,triggered);

useEffect(()=>{
const obs=new IntersectionObserver(
([e])=>{
if(e.isIntersecting){
setTriggered(true);
obs.disconnect();
}
},
{threshold:.5}
);

if(ref.current) obs.observe(ref.current);

return()=>obs.disconnect();
},[]);

return(
<div
ref={ref}
className="flex-1 text-center px-10"
>

<div className="inline-flex
w-32 h-14
rounded-full bg-blue-100
items-center justify-center mb-7">

<span className="text-3xl font-bold text-blue-600">
{n}{stat.suffix}
</span>

</div>

<p className="text-black text-[17px] leading-8 max-w-[340px] mx-auto">
{stat.label}
</p>

</div>
)
}

export default function Stats(){
return(
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-8">

<h2 className="text-center text-4xl font-bold mb-4">
Our <span className="text-blue-600">Track Record</span>
</h2>

<p className="text-center text-xl text-gray-600 mb-20">
The Numbers Behind <span className="text-blue-600">Our Success</span>
</p>


{/* SINGLE LINE EXACT LAYOUT */}
<div className="flex items-start justify-center">

<Stat stat={stats[0]} />

<div className="h-36 w-px bg-gray-300 mt-2"></div>

<Stat stat={stats[1]} />

<div className="h-36 w-px bg-gray-300 mt-2"></div>

<Stat stat={stats[2]} />

</div>

</div>
</section>
)
}