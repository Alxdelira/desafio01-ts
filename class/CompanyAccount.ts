import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): string => {
    if (this.validateStatus()) { 
      if (amount > 0) { 
        const newAmount = amount
        this.addToBalance(newAmount); 
        return `Você pegou um empréstimo de R$ ${amount}`;
      } else {
        throw new Error("O valor do empréstimo deve ser maior que zero.");
      }
    } else {
      throw new Error("Não foi possível realizar o empréstimo. Verifique o status da conta.");
    }
  }
}
