import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OrientPath Strategic Consulting and Research",
  description: "Your strategic ally in mastering the complex dynamics of today's global markets. We bring clarity and direction to your business challenges.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
