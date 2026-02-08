import { Truck, ShieldCheck, Sparkles } from "lucide-react";
import { title } from "process";

const features = [
    { icon: Truck, title: "Fast Delivery", desc: "Swift and reliable shipping worldwide." },
    { icon: ShieldCheck, title: "Secure Payments", desc: "Your transactions are always protected." },
    { icon: Sparkles, title: "Premium Products", desc: "Curated quality you can trust."}
];

export function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
                <div
                key={title}
                className="p-8 rounded-2xl border bg-black shadow-sm hover:shadow-lg transition">
                <Icon className="w-8 h-8 text-indigo-600" />
                <h3 className="mt-4 font-bold text-xl">{ title }</h3>
                <p className="mt-2 text-gray-200">{desc}</p>
                </div>
            ))}
        </div>
        </section>
    );
}