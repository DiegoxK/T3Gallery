"use server";
import Image from "next/image";
import { getImage } from "~/server/queries";

import {
  DialogTitle,
  DialogFooter,
  DialogHeader,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export default async function MyImage({ id }: { id: string }) {
  const idAsNumber = Number(id);

  if (isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="break-all px-6 xl:px-4">
          {image.name}
        </DialogTitle>
      </DialogHeader>
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
      <DialogFooter>
        <Button className="w-full" variant="destructive">
          Delete
        </Button>
      </DialogFooter>
    </>
  );
}
