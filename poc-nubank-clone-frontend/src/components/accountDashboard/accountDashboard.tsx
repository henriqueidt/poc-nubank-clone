import useAuth from "@/lib/auth/useAuth";
import { formatCurrency } from "@/lib/utils/formatUtils";
import classes from "./accountDashboard.module.css";
import IconButton from "../iconButton/iconButton";
import pixIcon from "../../../public/icons/pix-icon.svg";
import PixModal from "../pixModal/pixModal";

export default function AccountDashboard() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { balance } = user || {};

  return (
    <div className={classes.accountDashboard}>
      <h1 className={classes.title}>Conta</h1>
      <div className={classes.balance}>{formatCurrency(balance || 0)}</div>
      <div className={classes.actionsWrap}>
        <div className={classes.actionButtons}>
          <PixModal />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Pagar"
            variant="lightGray"
          />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Transferir"
            variant="lightGray"
          />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Depositar"
            variant="lightGray"
          />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Cobrar"
            variant="lightGray"
          />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Caixinhas"
            variant="lightGray"
          />
          <IconButton
            isVisibleTitle
            icon={pixIcon}
            title="Investir"
            variant="lightGray"
          />
        </div>
      </div>
    </div>
  );
}
