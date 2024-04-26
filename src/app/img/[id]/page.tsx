import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getImage } from "~/server/queries";

export default async function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);

  if (isNaN(idAsNumber)) {
    notFound();
  }

  const image = await getImage(idAsNumber);

  const uploadInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex flex-col gap-5 border bg-background p-4 pb-8 text-center xl:mx-52 xl:px-20 xl:pb-10">
      <p className="neon mt-2 break-all px-6 xl:px-4">{image.name}</p>
      <div className="frame text-center" key={image.id}>
        <div className="relative aspect-square object-cover">
          <Image
            src={image.url}
            alt="Image"
            fill
            className="aspect-square object-cover"
          />
        </div>
      </div>
      <div className="sign w-full">
        <span>Uploaded By:</span>
        <span>{uploadInfo.username}</span>
      </div>
    </div>
  );
}
