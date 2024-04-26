"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Vibur } from "next/font/google";
import Link from "next/link";

import { cn } from "~/lib/utils";
import UploadButton from "./ui/upload-button";

const fontVibur = Vibur({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 px-12">
      <h1
        className={cn(
          "sign text-4xl font-bold backdrop-blur-lg",
          fontVibur.className,
        )}
      >
        {/* <span>T3</span> */}
        <Link className="text-center" href="/">
          <span>T3 Gallery</span>
        </Link>
      </h1>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton>
            <div className="link m-5 cursor-pointer text-lg">Sign up</div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          <UploadButton />
          <UserButton
            appearance={{
              elements: {
                rootBox: "h-10 w-10",
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
