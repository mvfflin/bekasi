import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Kota Bekasi - Sigma 5",
    description: "Website mengenai kota bekasi",
    openGraph: {
        title: "Kota Bekasi - Sigma 5",
        description:
            "Website berisikan informasi mengenai hal-hal yang ada di Kota Bekasi seperti sejarahnya, kearifan lokalnya, dan lain lain.",
        images: "https://nnc-media.netralnews.com/IMG-Netral-News-User-31-CG3UI2J9OS.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
