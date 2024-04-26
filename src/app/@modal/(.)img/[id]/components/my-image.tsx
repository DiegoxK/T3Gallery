"use server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function MyImage({ id }: { id: string }) {
  const idAsNumber = Number(id);

  if (isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);

  return (
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
  );
}
