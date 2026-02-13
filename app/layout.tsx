import ReduxProvider from "@/providers/ReduxProvider";
import ProductsBootstrap from "@/providers/ProductsBootstrap";
import Header from "@/components/HeaderClient";
import Footer from "@/components/Footer";
import "./globals.css";
import CartDrawer from "@/components/CartDrawerClient";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header/>
                    <main className="min-h-screen">{children}</main>
                    <CartDrawer/>
                    <ProductsBootstrap/>
                    <Footer/>
                </ReduxProvider>
            </body>
        </html>
    );
}

export const metadata = {
    manifest: "/manifest.json",
    title: "NeXusStore",
    description: "Modern E-commerce Web App built with Next.js"
};