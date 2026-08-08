import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Uttkarsh Yadav | Frontend Developer",
  description:
    "Portfolio of Uttkarsh Yadav - Frontend Developer specializing in React.js, Next.js and modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
          bg-[#030712]
          text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}