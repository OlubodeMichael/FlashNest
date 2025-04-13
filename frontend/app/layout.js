import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import StudyProvider from "@/context/StudyContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlashNest - Your Flashcard Learning Platform",
  description:
    "Create, study, and master flashcards with FlashNest. The modern way to learn and memorize.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <StudyProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            <Toaster position="top-right" />
          </body>
        </StudyProvider>
      </AuthProvider>
    </html>
  );
}
