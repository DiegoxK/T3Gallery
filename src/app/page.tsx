import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <>
      {images.length === 0 ? (
        <div className="sign flex grow items-center justify-center text-2xl">
          <span>Click The Upload Button To Start Uploading!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {images.map((image) => (
            <div className="frame text-center" key={image.id}>
              <img src={image.url} alt="Image" />
              <p className="my-2">{image.name.slice(0, 28) + "..."}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <div className="sign flex grow items-center justify-center text-2xl">
          <span>Sign In To Start Uploading!</span>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </>
  );
}
