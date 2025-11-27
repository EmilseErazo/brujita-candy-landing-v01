import type { Metadata } from "next";
import { Inter, Creepster } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const creepster = Creepster({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-creepster"
});

export const metadata: Metadata = {
    title: "Brujita Candy Bar | Dulces que Hechizan",
    description: "Mesas dulces, decoración y ambientación de eventos con un toque mágico.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${creepster.variable} font-sans bg-slate-950 text-white antialiased`}>
                {children}
            </body>
        </html>
    );
}
