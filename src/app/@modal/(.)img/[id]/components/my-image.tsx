"use server";
import { getImage } from "~/server/queries";

export default async function MyImage({ id }: { id: string }) {
  const idAsNumber = Number(id);

  if (isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);

  return <img src={image.url} alt="Image" />;
}
