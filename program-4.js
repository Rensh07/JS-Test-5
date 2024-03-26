// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accNum, balance) {
    this.accNum = accNum;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit ${amount} to account ${this.accNum}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds in account ${this.accNum}`);
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount} from account ${this.accNum}`);
  }

  displayAccDetails() {
    console.log(`Account Number: ${this.accNum}, Balance: ${this.balance}`);
  }
}

const acc1 = new BankAccount("112200", 1000);
const acc2 = new BankAccount("334400", 2000);

acc1.deposit(300);
acc2.withdraw(500);
acc1.withdraw(1500);

acc1.displayAccDetails();
acc2.displayAccDetails();
