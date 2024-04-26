"use client";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export default function ImageDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={(open) => {
        if (!open) {
          setTimeout(() => {
            router.back();
          }, 200);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>{image.name}</DialogTitle> */}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
