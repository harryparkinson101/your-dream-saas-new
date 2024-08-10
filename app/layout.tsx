import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Dream Saas",
  description: "SaaS Web Development Agency",
};

const RootLayout = ({ children, className = "" }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`z-0 inline-block h-full w-full bg-light p-0 dark:bg-dark  ${className}`}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
