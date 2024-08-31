import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibe ― WMV",
  description: "The 3D Video Slider Carousel is an advanced web component developed using Next.js, designed to provide an immersive and interactive user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
