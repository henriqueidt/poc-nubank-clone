import { ReactNode, useState } from "react";
import IconButton from "../iconButton/iconButton";
import pixIcon from "../../../public/icons/pix-icon.svg";
import closeIcon from "../../../public/icons/close-icon.svg";
import classes from "./modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

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
            <IconButton
              icon={closeIcon}
              title="Close Modal"
              onClick={() => setIsOpen(!isOpen)}
            />
            children
          </div>
        </div>
      ) : null}
    </>
  );
}
