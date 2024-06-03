import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const myFont = localFont({ src: "./ClashDisplay-Medium.woff2" });

export const metadata: Metadata = {
  title: "uifry",
  description: "System Batch Uifry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="icon"
          // href="/icon?<generated>"
          href="https://ik.imagekit.io/qz6ubt34n4/uifry-removebg-preview.png?updatedAt=1717417915855"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={cn("min-h-screen bg-background", myFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
