import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: 'Some fucking title',
    description: 'Fucking description',
    type: "video.other",
    url: 'https://file-examples.com/storage/fef6bc58a467a23f99bc53c/2017/04/file_example_MP4_640_3MG.mp4',
    videos: [{
      url: 'https://file-examples.com/storage/fef6bc58a467a23f99bc53c/2017/04/file_example_MP4_640_3MG.mp4',
      width: 640,
      height: 360,
    }]
  }
};
// test

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
