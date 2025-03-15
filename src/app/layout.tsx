import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MVIEIRAB - Portfolio",
  description: "Personal portfolio of MVIEIRAB - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <div className="animate-fadeIn">
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
} 