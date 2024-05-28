import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Буккроссинг.рф | Приложение по обмену книгами",
  description: "Буккроссинг — это глобальное движение, цель которого — делиться книгами с другими",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
