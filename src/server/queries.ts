import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) {
    notFound();
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) {
    notFound();
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    notFound();
  }

  if (image.userId !== user.userId) {
    notFound();
  }

  return image;
}
