import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


const iconClass = "text-indigo-600 hover:text-white p-1 transition-all duration-200 hover:-translate-y-1"

const Footer = () => {
    return (
        <footer className="backdrop-blur-md bg-black/80 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
            <div>
                <h3 className="font-bold mb-2 text-2xl italic">Ne╳us<span className="text-indigo-600">Store</span></h3>
                <p className="text-gray-500 mt-2 max-w-sm">A modern PWA e-commerce platform built with Next.js</p>
            </div>

            <div>
                <h4 className="font-semibold text-2xl mb-2">Links</h4>
                <ul className="space-y-1">
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>    
            </div>

            <div className="grid md:grid-cols-2">
            <div >
                <h4 className="font-semibold text-2xl mb-2">Contact</h4>
                <p>Email: support@nexusstore.dev</p>
            </div>

            {/* Socials */}
            <div className="p-2 text-4xl">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className={iconClass}>  
              <FacebookIcon fontSize="large" />
            </Link>
            
            <Link
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
            className={iconClass}>
                <TwitterIcon fontSize="large"/>
            </Link>
            <Link
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              aria-label="LinkedIn"
              className={iconClass}>
              <LinkedInIcon fontSize="large"/>
            </Link>

            <Link
              href="https://instagram.com/your-handle"
              target="_blank"
              aria-label="Instagram"
              className={iconClass}>
              <InstagramIcon fontSize="large"/>
            </Link>
            </div>
            </div>

            <div className="text-center text-md text-gray-500 pb-4">
                &copy; {new Date().getFullYear()} Ne╳usStore. By Emmanuel Adi. All right reserved.
            </div>
        </div>
        </footer>
    );
};

export default Footer;