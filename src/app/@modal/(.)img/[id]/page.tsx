import { Suspense } from "react";
import ImageDialog from "./components/image-dialog";
import MyImage from "./components/my-image";

export default function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <ImageDialog>
      <Suspense fallback={<div>Loading...</div>}>
        <MyImage id={imageId} />
      </Suspense>
    </ImageDialog>
  );
}
