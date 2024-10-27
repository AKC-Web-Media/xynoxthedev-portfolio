import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arindam Hazra | XynoxTheDev",
  description: "Made by AdityaKrCodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="w-full h-screen bg-black bg-grid-white/[0.10] relative">
            {children}
        </body>
    </html>
  );
}
