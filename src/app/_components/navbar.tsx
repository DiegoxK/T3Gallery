"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Vibur } from "next/font/google";
import { useRouter } from "next/navigation";
import { cn } from "~/lib/utils";
import { UploadButton } from "~/utils/uploadthing";

const fontVibur = Vibur({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const router = useRouter();

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
        <SignedOut>
          <SignInButton>
            <div className="link m-5 cursor-pointer">Sign up</div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
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
