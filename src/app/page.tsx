import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
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
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {images.map((image) => {
            const imageName = image.name;
            const slicedName = imageName.slice(0, 15);

            return (
              <div className="frame text-center" key={image.id}>
                <Link className="link" href={`/img/${image.id}`}>
                  <div className="relative aspect-square object-cover">
                    <Image
                      src={image.url}
                      alt="Image"
                      fill
                      className="aspect-square object-cover"
                    />
                  </div>
                  <p className="mt-2 border pb-1">
                    {imageName.length === slicedName.length
                      ? imageName
                      : slicedName + "..."}
                  </p>
                </Link>
              </div>
            );
          })}
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
