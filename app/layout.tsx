import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/components/navbar";
import Image from "next/image";
import Eclipse from "@/components/eclipse";
import TopLeft from "@/components/topLeft-grad";
import Planets from "@/components/planet-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="background-container">
          <Eclipse />
          <Planets />
          <TopLeft />
          <div className="content">
            <Navbar2 />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
