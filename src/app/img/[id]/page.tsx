import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "~/components/ui/button";
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

  return (
    <div className="flex flex-col gap-5 border bg-background p-4 text-center xl:mx-52 xl:px-20 xl:pb-10">
      <h1 className="break-all px-6 xl:px-4">{image.name}</h1>
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
      <Button className="w-full" variant="destructive">
        Delete
      </Button>
    </div>
  );
}
