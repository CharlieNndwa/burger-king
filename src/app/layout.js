import "./globals.css";
import { Flamenco } from "next/font/google";
import Bottomnav from "@/components/home/bottomNav";

const flamenco = Flamenco({ subsets: ["latin"], weight: ["400"] });

export  const metadata = {
  title: "Burger King 2.0",
  description: "Burger king website clone in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={flamenco.className}>
        {children}
        <Bottomnav/>
        </body>
    </html>
  );
}
