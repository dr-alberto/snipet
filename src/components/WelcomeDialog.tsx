import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface WelcomeDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const WelcomeDialog: React.FC<WelcomeDialogProps> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
    // Store in localStorage that the user has closed the welcome dialog
    localStorage.setItem("wdc", "true");
  };


  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <div className="flex flex-col items-center">
          <img
            src="/puzzle.png"
            alt="Project Illustration"
            className="w-36 py-12 h-auto mb-4" // Adjust styles as needed
          />
          <DialogHeader className="px-8 mb-8">
            <DialogTitle className="text-2xl font-bold text-center text-gray-800">
              Welcome to Snipet
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 mb-4">
              Quickly find and copy common development snippets to supercharge
              your projects!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleClose}>Let's go</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
