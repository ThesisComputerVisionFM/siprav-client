import { ReactNode } from "react";

type ModalType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export type ModalProps = Pick<ModalType, "isOpen" | "close"> & {
  children: ReactNode;
};

export type EventModalProps = Pick<ModalType, "isOpen" | "close">;
