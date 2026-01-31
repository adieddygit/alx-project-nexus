import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
            <div>
                <h3 className="font-semibold mb-2">NexusStore</h3>
                <p className="text-gray-500">A modern PWA e-commerce platform built with Next.js</p>
            </div>

            <div>
                <h4 className="font-semibold mb-2">Links</h4>
                <ul className="space-y-1">
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>    
            </div>

            <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p>Email: support@nexusstore.dev</p>
                <p>Emmanuel Adi built for ALX Project Nexus</p>
            </div>

            <div className="text-center text-xs text-gray-500 pb-4">
                &copy; {new Date().getFullYear()} NexusStore. All right reserved.
            </div>
        </div>
        </footer>
    );
};

export default Footer;