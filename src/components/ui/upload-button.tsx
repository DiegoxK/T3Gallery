import { useUploadThing } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import { UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export default function UploadButton() {
  const router = useRouter();

  const { inputProps, isUploading } = useUploadThingInputProps(
    "imageUploader",
    {
      onClientUploadComplete: () => {
        router.refresh();
      },
    },
  );

  return (
    <div className="flex items-center">
      {!isUploading ? (
        <label htmlFor="upload-button">
          <UploadCloudIcon
            size={30}
            className="neon-svg cursor-pointer text-purple-100"
          />
        </label>
      ) : (
        <Loading size="35px" />
      )}

      <input
        className="sr-only"
        id="upload-button"
        type="file"
        disabled={isUploading}
        {...inputProps}
      />
    </div>
  );
}

const Loading = ({ size }: { size: string }) => {
  return (
    <span
      style={{
        height: size,
        width: size,
      }}
      className="loader"
    />
  );
};
