import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { PageProvider } from "./context/PageContext";
import { LocaleProvider } from "./context/LanguageContext";
import { HydrationGate } from "./context/HydrationGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomas Bran | Web Dev",
  description: "Tomas Bran | Fullstack Developer",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LocaleProvider>
            <PageProvider>
              <HydrationGate>
                <Navbar />
                {children}
              </HydrationGate>
            </PageProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
