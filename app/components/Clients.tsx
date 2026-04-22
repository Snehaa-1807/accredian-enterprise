const clients = [
 {name:"Reliance", logo:"/images/clients/reliance.png"},
 {name:"HCL", logo:"/images/clients/hcl.png"},
 {name:"IBM", logo:"/images/clients/ibm.png"},
 {name:"CRIF", logo:"/images/clients/crif.png"},
 {name:"ADP", logo:"/images/clients/adp.png"},
 {name:"Bayer", logo:"/images/clients/bayer.png"},
];

export default function Clients() {
return (
<section id="clients" className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-8">

<h2 className="text-center text-4xl font-bold mb-4">
Our Proven <span className="text-blue-600">Partnerships</span>
</h2>

<p className="text-center text-xl text-gray-600 mb-20">
Successful Collaborations With the{" "}
<span className="text-blue-600">
Industry’s Best
</span>
</p>

<div className="
grid 
grid-cols-2 
sm:grid-cols-3 
lg:grid-cols-6 
gap-12 
items-center
justify-items-center
">
{clients.map((client)=>(
<div
key={client.name}
className="
flex items-center justify-center
transition duration-300
"
>
<img
src={client.logo}
alt={client.name}
className="
h-20 md:h-24
w-auto
object-contain
"
/>
</div>
))}
</div>

</div>
</section>
);
}