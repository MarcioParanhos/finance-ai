import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TrasactionTypeBadgeProps {
    transaction: Transaction
}

const TransactionTypeBadge = ({transaction}: TrasactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted font-bold text-green-500 hover:bg-muted">
            <CircleIcon className="mr-2 fill-green-500" size={10} />
            Depósito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="text-danger bg-muted font-bold hover:bg-muted">
            <CircleIcon className="fill-danger mr-2" size={10} />
            Despesa
          </Badge>
        );
      }
      if (transaction.type === TransactionType.INVESTMENT) {
        return (
          <Badge className="bg-muted font-bold text-white hover:bg-muted">
            <CircleIcon className="mr-2 fill-white" size={10} />
            Investimento
          </Badge>
        );
      }
}
 
export default TransactionTypeBadge;