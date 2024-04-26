"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "~/components/ui/dialog";

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
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
