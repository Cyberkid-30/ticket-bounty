"use client";

import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

interface onArgs {
  actionState: ActionState;
}

interface useActionFeedbackOptions {
  onSuccess?: (onargs: onArgs) => void;
  onError?: (onargs: onArgs) => void;
}

const useActionFeedback = (
  actionState: ActionState,
  options: useActionFeedbackOptions
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = prevTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }
    prevTimestamp.current = actionState.timestamp;
  }, [isUpdate, actionState, options]);
};

export { useActionFeedback };
