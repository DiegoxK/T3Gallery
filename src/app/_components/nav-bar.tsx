import { Vibur } from "next/font/google";
import { cn } from "~/lib/utils";

const fontVibur = Vibur({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
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
}
