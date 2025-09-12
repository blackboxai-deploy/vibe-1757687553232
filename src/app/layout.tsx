import type { Metadata } from "next";
import { Inter, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing"
});

export const metadata: Metadata = {
  title: "Beautiful E-Card - You're the Best Human Being Ever",
  description: "A heartfelt e-card with beautiful animations and multiple themes",
  keywords: "e-card, greeting card, digital card, best wishes, appreciation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}