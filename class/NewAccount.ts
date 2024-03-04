import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (amount: number): string => {
        const newAmount = amount + 10; // Acrescenta 10 ao valor do depósito
        this.addToBalance(newAmount); // Atualiza o saldo com o novo valor
        return `Você depositou R$ ${newAmount}`; // Retorna uma mensagem de confirmação
    }
}

