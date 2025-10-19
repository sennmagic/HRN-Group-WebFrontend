import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/organisms/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "HRN Group",
  description: "-Nepal",
};
import Navbar from "@/components/organisms/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
