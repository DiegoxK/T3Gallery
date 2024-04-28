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
      <Suspense fallback={<Loading />}>
        <MyImage id={imageId} />
      </Suspense>
    </ImageDialog>
  );
}

const Loading = () => {
  return (
    <div className="frame flex aspect-square items-center justify-center">
      <span
        style={{
          height: "38px",
          width: "38px",
        }}
        className="loader"
      />
    </div>
  );
};
