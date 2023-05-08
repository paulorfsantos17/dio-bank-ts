import { ChallengeAccount } from "./class/ChallengeAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const newAccount : PeopleAccount = new PeopleAccount(123, 'name', 1)
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2)
const challengeAccount: ChallengeAccount = new ChallengeAccount('teste', 3)

challengeAccount.deposit(15)
challengeAccount.getBalance()

// companyAccount.getLoan(15)
// companyAccount.getBalance()

// newAccount.getBalance()
// newAccount.deposit(10)
// newAccount.getBalance()
// newAccount.withdraw(9)
// newAccount.getBalance()