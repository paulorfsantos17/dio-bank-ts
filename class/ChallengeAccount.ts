import { DioAccount } from "./DioAccount";

export class ChallengeAccount extends DioAccount {
  constructor(name: string, numberAccount: number) {
    super(name, numberAccount);
  }

  deposit = (value: number):void => {
    this.setBalance(value + 10);
  };
}
