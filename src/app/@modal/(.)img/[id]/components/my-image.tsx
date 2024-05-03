"use server";
import Image from "next/image";
import { deleteImage, getImage } from "~/server/queries";

import {
  DialogTitle,
  DialogFooter,
  DialogHeader,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { notFound } from "next/navigation";

export default async function MyImage({ id }: { id: string }) {
  const idAsNumber = Number(id);

  if (isNaN(idAsNumber)) {
    notFound();
  }

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
        <form
          className="w-full"
          action={async () => {
            "use server";
            await deleteImage(idAsNumber);
          }}
        >
          <Button type="submit" className="w-full" variant="destructive">
            Delete
          </Button>
        </form>
      </DialogFooter>
    </>
  );
}
