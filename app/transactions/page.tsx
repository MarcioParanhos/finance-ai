import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";

const TransactonsPage = async () => {
  // Acessar as trasações do banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      {/* Titulo e Botão de Adicionar */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Trasações</h1>
        <Button className="rounded-full">
          Adicionar Trasação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions}/>
    </div>
  );
};

export default TransactonsPage;
