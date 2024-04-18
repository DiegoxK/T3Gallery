import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { Vibur } from "next/font/google";
import { cn } from "~/lib/utils";

const fontVibur = Vibur({
  weight: "400",
  subsets: ["latin"],
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-6 px-12">
      <h1
        className={cn(
          "sign text-4xl font-bold backdrop-blur-lg",
          fontVibur.className,
        )}
      >
        {/* <span>T3</span> */}
        <span>T3 Gallery</span>
      </h1>
      <div className="flex gap-4">
        <a className="link m-5" href="#">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background dark min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NavBar />
        <div className="container my-2">{children}</div>
      </body>
    </html>
  );
}
