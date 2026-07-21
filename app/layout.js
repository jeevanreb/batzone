import { Figtree } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/context/lenis-wrapper";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bat Zone",
  description: "Product Page from Bat Zone",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <LenisWrapper>
          <Toaster />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
