// app/layout.js (Your updated file)

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Remove Navbar and Footer imports from here
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import LayoutWrapper from "../../components/LayoutWrapper"; // Import the new wrapper
import AuthProvider from "../../Context/AuthProvider";
import { Toaster } from "react-hot-toast";
import QueryProvider from "../../Context/QueryProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayira",
  description: "An Modern Ecommerce Platform",
  icons: {
    icon: "/WhatsApp Image 2025-09-04 at 10.49.24 PM.jpeg", // path from public folder
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <QueryProvider>

            <LayoutWrapper>{children}</LayoutWrapper>
            <Toaster position="top-right" reverseOrder={false} />
          </QueryProvider>
         
        </AuthProvider>
        
        {/* 2. Add the Google Translate Scripts here */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          id="google-translate-api"
          strategy="afterInteractive"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </body>
    </html>
  );
}
