import { SignedIn, SignedOut } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model) => desc(model.id),
  });

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {images.map((image) => (
        <div key={image.id}>
          <img className="frame" src={image.url} alt="Image" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
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
