import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Locomote",
  description:
    "Locomote is your one-stop solution for hassle-free bus travel booking. Say goodbye to long queues and last-minute rushes – with EasyBus, your journey begins with simplicity, speed, and security.",
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
