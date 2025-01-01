import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Fotter from "./Fotter";
import MouseTrail from "./Component/HoverAnimation/HoverMe";


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
  title: {
    default : 'Next Hero',
    template: '%s | Next Hero'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-8">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar></Navbar>
        <MouseTrail></MouseTrail>
        {children}
        <footer> 
          <Fotter></Fotter>
        </footer>
      </body>
    </html>
  );
}
