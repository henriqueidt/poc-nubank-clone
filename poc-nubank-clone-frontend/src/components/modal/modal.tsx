import { ReactNode, useState } from "react";
import IconButton from "../iconButton/iconButton";
import pixIcon from "../../../public/icons/pix-icon.svg";
import closeIcon from "../../../public/icons/close-icon.svg";
import classes from "./modal.module.css";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: Function;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
    onClose();
  };

  return (
    <>
      <IconButton
        isVisibleTitle
        icon={pixIcon}
        title="Área Pix"
        variant="lightGray"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <div className={classes.overlay}>
          <div className={classes.modal}>
            <div className={classes.topRegion}>
              <IconButton
                icon={closeIcon}
                title="Close Modal"
                onClick={handleClose}
              />
            </div>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
