export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }



  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value;
    } else {
      throw new Error();
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  setBalance = (value: number): void => {
    this.balance = +value;
  };

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error();
  };
}
