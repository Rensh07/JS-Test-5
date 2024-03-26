// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accNum, accName, balance) {
    this.accNum = accNum;
    this.accName = accName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount.");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }
    this.balance -= amount;
  }

  transfer(amount, toAcc) {
    if (amount > this.balance) {
      console.log("Insufficient balance for transfer.");
      return;
    }
    this.withdraw(amount);
    toAcc.deposit(amount);
    console.log(
      `Transferred ₹ ${amount} from account ${this.accNum} to account ${toAcc.accNum}.`
    );
  }

  displayBalance() {
    console.log(`Account ${this.accNum} balance: ₹ ${this.balance}`);
  }
}

const account1 = new BankAccount("SBI-1", "Sam", 100);
const account2 = new BankAccount("SBI-2", "John", 200);

account1.displayBalance();
account2.displayBalance();

account1.deposit(500);
account1.displayBalance();

account1.withdraw(400);
account1.displayBalance();

account1.transfer(700, account2);
account1.transfer(50, account2);

account1.displayBalance();
account2.displayBalance();
