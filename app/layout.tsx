import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Arindam Hazra | XynoxTheDev",
    description: "Full Stack Developer | Cloud Enthusiast | Open Source Contributor",
    robots: {
    index: true,
    follow: true,
    },
    authors: [
        { name: 'Arindam Hazra', url: 'https://github.com/XynoxTheDev' },
    ],
    metadataBase: new URL('https://arindamhazra.xyz/'),
    keywords: [
        'Arindam Hazra',
        'XynoxTheDev',
        'Full Stack Developet',
        'Cloud Enthusiast',
        'Open Source Contributor',
        'Portfolio',
        'software',
        'development',
        'software-development',
        'website',
        'website-development',
        'web-development',
        'web',
        'landing',
        'page',
        'discord',
        'bot',
        'app',
        'mobile',
        'consulting',
        'it',
        'information',
        'technology',
        'internet',
        'discordbot',
        'professional',
        'business',
        'startup',
        'portfolio',
    ],
};
    

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="w-full bg-black bg-grid-white/[0.10] relative">
            {children}
        </body>
    </html>
  );
}
