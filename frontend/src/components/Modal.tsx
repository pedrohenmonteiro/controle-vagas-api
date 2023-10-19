type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isVisible, onClose, children }: ModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).id === "wrapper") onClose();
  };
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="bg-black opacity-25 fixed inset-0"
        id="wrapper"
        onClick={handleClose}
      ></div>
      <div className="w-[800px] relative">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded-lg relative z-10">{children}</div>
      </div>
    </div>
  );
}
