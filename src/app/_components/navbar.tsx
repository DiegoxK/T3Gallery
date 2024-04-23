import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Vibur } from "next/font/google";
import { cn } from "~/lib/utils";

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
        <span>T3 Gallery</span>
      </h1>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton>
            <div className="link m-5 cursor-pointer">Sign up</div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
