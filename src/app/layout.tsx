import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { dark } from "@clerk/themes";
import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import NavBar from "./_components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "hsl(201.4, 87.5%, 3.1%)",
          },
        }}
      >
        <body
          className={cn(
            "flex min-h-screen flex-col bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <NavBar />
          <main className="container my-2 flex grow flex-col">{children}</main>
        </body>
      </ClerkProvider>
    </html>
  );
}
