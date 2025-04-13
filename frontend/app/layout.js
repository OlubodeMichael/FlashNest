import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import StudyProvider from "@/context/StudyContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlashNest",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <StudyProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
          </body>
        </StudyProvider>
      </AuthProvider>
    </html>
  );
}
