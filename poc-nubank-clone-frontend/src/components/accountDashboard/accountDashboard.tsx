import useAuth from "@/lib/auth/useAuth";
import { formatCurrency } from "@/lib/utils/formatUtils";
import classes from "./accountDashboard.module.css";
import IconButton from "../iconButton/iconButton";
import pixIcon from "../../../public/icons/pix-icon.svg";
import cardIcon from "../../../public/icons/card-icon.svg";
import moneyIcon from "../../../public/icons/money-icon.svg";
import graphIcon from "../../../public/icons/graph-icon.svg";
import PixModal from "../pixModal/pixModal";
import ActionPanel from "../actionPanel/actionPanel";

export default function AccountDashboard() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { balance } = user || {};

  return (
    <div className={classes.accountDashboard}>
      <div className={classes.topRegion}>
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
      <ActionPanel
        icon={cardIcon}
        title="Cartão de crédito"
        description="Fatura atual"
        value="R$40.000,00"
      />
      <ActionPanel
        icon={moneyIcon}
        title="Empréstimo"
        description="Valor disponível"
        value="R$100.000,00"
      />
      <ActionPanel
        icon={graphIcon}
        title="Investimentos"
        description="Valor total"
        value="R$5.000,00"
      />
    </div>
  );
}
