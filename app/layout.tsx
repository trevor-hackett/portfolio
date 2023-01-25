import { Navbar } from "@/components/navbar";
import { Open_Sans } from "@next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <div className="mx-auto w-11/12 max-w-6xl min-h-screen flex flex-col">
          <Navbar />
          <div className="grow flex flex-col justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
