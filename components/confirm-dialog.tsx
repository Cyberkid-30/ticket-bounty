"use client";
import { cloneElement, ReactElement, useActionState, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { SubmitButton } from "./form/submit-button";
import Form from "./form/form";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";

interface UseConfirmDialogProps {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: ReactElement<{ onClick?: () => void }>;
}

const useConfirmDialog = ({
  title = "Are you absolutely sure?",
  description = "  This action cannot be undone. Make sure you understand the consequences.",
  action,
  trigger,
}: UseConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);
  //
  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((state) => !state),
  });

  const handleSuccess = () => setIsOpen(false);

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={actionState}
              onSuccess={handleSuccess}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
