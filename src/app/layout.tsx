import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./Nav";

export const metadata: Metadata = {
  title: "JS Study",
  description: "Let's go!",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="font-pretendard w-6xl grid grid-cols-8">
        <Nav />
        <div className="col-span-3"></div>
        {children}
      </body>
    </html>
  );
}
