import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./themeSwitcher";
import Carousel from "./carousel"; // Import the Carousel component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports",
  description:
    "Two components of the sports app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F7F7F8] dark:bg-[#292B32]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
