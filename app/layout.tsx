import ReduxProvider from "@/providers/ReduxProvider";
import ProductsBootstrap from "@/providers/ProductsBootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
                    <ProductsBootstrap/>
                    <Footer/>
                </ReduxProvider>
            </body>
        </html>
    );
}

export const metadata = {
    manifest: "/manifest.json",
};