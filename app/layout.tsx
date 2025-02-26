import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});
export const metadata: Metadata = {
  title: "ai-saas-image app",
  description: "ai-saas-image app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} ${notoSansJP.style} antialiased`}>{children}</body>
    </html>
  );
}
