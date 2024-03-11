import IconButton from "../../iconButton/iconButton";
import pixIcon from "../../../../public/icons/pix-icon.svg";
import classes from "./initialStep.module.css";

export default function InitialStep({
  onChangeStep,
}: {
  onChangeStep: Function;
}) {
  return (
    <div className={classes.actions}>
      <IconButton
        isVisibleTitle
        icon={pixIcon}
        title="Transferir"
        variant="lightGray"
        onClick={() => onChangeStep("enterValue")}
      />
    </div>
  );
}
