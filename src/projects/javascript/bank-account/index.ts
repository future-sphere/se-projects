class BankAccountClass {
  private balance: number;
  private history: string[];

  constructor(balance) {
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(
      `Deposit of $${amount}, remaining balance: $${this.balance}`,
    );
  }

  withdraw(amount) {
    this.balance -= amount;
    this.history.push(
      `Withdraw of $${amount}, remaining balance: $${this.balance}`,
    );
  }

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history;
  }
}

export function BankAccountFunction(balance) {
  this.balance = balance;
  this.history = [];
  return {
    deposit: (amount) => {
      this.balance += amount;
      this.history.push(
        `Deposit of $${amount}, remaining balance: $${this.balance}`,
      );
    },
    withdraw: (amount) => {
      this.balance -= amount;
      this.history.push(
        `Withdraw of $${amount}, remaining balance: $${this.balance}`,
      );
    },
    getBalance: () => this.balance,
    getHistory: () => this.history,
  };
}

const account = new BankAccountClass(100);

account.deposit(50);
account.withdraw(10);
console.log(account.getBalance());
console.log(account.getHistory());
