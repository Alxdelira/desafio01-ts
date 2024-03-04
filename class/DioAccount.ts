export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true


  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
  protected addToBalance(amount: number): void {
    this.balance += amount;
  }

  protected getBalance(): number {
    return this.balance;
  }

  deposit = (balance: number): string => {
    if (this.validateStatus()) {
      this.balance = balance
      return `Voce depositou R$ ${balance}`
    }
    throw new Error("Não foi possível realizar o depósito.");
  }

  withdraw = (amount: number): string => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Você sacou R$ ${amount}`;
      } else {
        throw new Error("Saldo insuficiente para realizar o saque.");
      }
    } else {
      throw new Error("Não foi possível realizar o saque. Verifique o status da conta.");
    }
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
