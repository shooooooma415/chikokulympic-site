import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientHeader from "./components/ClientHeader";
import Footer from "./components/Footer";
import MuiRootProvider from "./components/MuiRootProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "遅刻リンピック公式サイト",
  description:
    "遅刻リンピックは、遅刻をテーマにしたユニークなスポーツイベントです。競技内容や参加方法を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MuiRootProvider>
          <ClientHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MuiRootProvider>
      </body>
    </html>
  );
}
