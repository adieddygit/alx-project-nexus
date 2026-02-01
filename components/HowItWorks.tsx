export function HowItWorks() {
    return (
        <section className="py-24 bg-gray-200">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl text-black font-bold">How It Works</h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-700">
                {["Browse", "Add to Cart", "Checkout"].map((step, i) => (
                    <div key={step} className="p-6">
                        <div className="w-12 h-12 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        {i + 1}
                        </div>
                        <h3 className="mt-4 font-semibold">{step}</h3>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}