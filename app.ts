import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'


// conta de pessoa
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
console.log(peopleAccount)
peopleAccount.withdraw(10)
console.log(peopleAccount)

// conta company
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
console.log(companyAccount)
companyAccount.getLoan(25)
console.log(companyAccount)

// conta nova com regra de 10+ no deposito
const newAccount: NewAccount = new NewAccount('Alexandre', 30)
newAccount.deposit(600)
console.log(newAccount)