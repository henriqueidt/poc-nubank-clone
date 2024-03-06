import useAuth from "@/lib/auth/useAuth";
import { formatCurrency } from "@/lib/utils/formatUtils";

export default function AccountDashboard() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { balance } = user || {};

  return <div>R${formatCurrency(balance || 0)}</div>;
}
