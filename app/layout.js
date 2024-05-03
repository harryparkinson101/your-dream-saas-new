import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navabar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Dream Saas",
  description: "SaaS Web Developement Agency",
};

export default function RootLayout({ children, className = "" }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`z-0 inline-block h-full w-full bg-light p-0 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 ${className}`}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
