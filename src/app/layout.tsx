import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { dark } from "@clerk/themes";
import { Inter as FontSans } from "next/font/google";

import { ourFileRouter } from "./api/uploadthing/core";

import { cn } from "~/lib/utils";

import NavBar from "../components/navbar";
import { Toaster } from "../components/ui/sonner";

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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "hsl(260, 43%, 2%)",
          },
        }}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body
          className={cn(
            "flex min-h-screen flex-col bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <NavBar />
          <main className="container mb-[8%] flex grow flex-col">
            {children}
          </main>
          {modal}
          <Toaster />
          <div id="modal-root" />
        </body>
      </ClerkProvider>
    </html>
  );
}
