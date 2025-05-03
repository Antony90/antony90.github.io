import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antony Antoniou",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} bg-black antialiased`}>
        <div className="flex min-h-screen flex-col items-center gap-6 py-6 font-[family-name:var(--font-outfit)]">
          <NavBar />
          <main className="mx-auto grow flex w-full max-w-[1150px] flex-col items-center gap-12 px-0 sm:px-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
