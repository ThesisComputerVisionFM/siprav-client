import { IoClose } from "react-icons/io5";
import { ModalProps } from "../types/modal";

const Modal = ({ isOpen, close, children }: ModalProps) => {
  if (!isOpen) return;

  return (
    <div
      className="fixed px-8 inset-0 z-50 flex items-center justify-center bg-black/60 cursor-pointer"
      onClick={close}
    >
      <section
        className="w-fit max-h-[100%-6rem] overflow-x-hidden overflow-y-auto bg-white rounded-xl p-8 shadow-lg cursor-default flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose className="text-2xl self-end cursor-pointer" onClick={close} />
        {children}
      </section>
    </div>
  );
};

export default Modal;
