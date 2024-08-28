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
      <body className="font-pretendard lg:grid lg:grid-cols-6 gap-5">
        <div className="lg:col-span-1">
          <Nav />
        </div>
        <div className="pt-20 lg:pt-10 lg:col-span-5 p-5">{children}</div>
      </body>
    </html>
  );
}
