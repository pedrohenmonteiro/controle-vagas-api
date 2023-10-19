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
    <div
      className="fixed inset-0 flex bg-black bg-opacity-25  blackdrop-blur-sm justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[800px] flex flex-col ">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded-lg ">{children}</div>
      </div>
    </div>
  );
}
