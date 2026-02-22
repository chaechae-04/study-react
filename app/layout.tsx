import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Terminal } from "lucide-react";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "study-react",
  description: "Interactive React study playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-200">

        {/* ===== Navbar ===== */}
        <header className="w-full border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">

            {/* Terminal Box */}
            {/* <div
              className={`${jetbrains.className}
                bg-green-400
                text-white
                text-sm
                px-4
                py-1.5
                rounded-sm
                tracking-wider
              `}
            >
              &gt;_
            </div> */}

            {/* Square Terminal Icon */}
            <div className="w-7 h-7 bg-green-400 rounded-sm flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>

            {/* Title */}
            <span className="text-neutral-200 font-medium tracking-wide">
              study-react
            </span>

          </div>
        </header>

        {/* ===== Page Content ===== */}
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>

      </body>
    </html>
  );
}