// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branch) {
    this.branches.push(branch);
  }

  removeBranch(branch) {
    const i = this.branches.indexOf(branch);
    if (i > -1) {
      this.branches.splice(i, 1);
    }
  }

  displayBranches() {
    console.log(`Branches of ${this.bankName}:`);
    this.branches.forEach((branch, i) => {
      console.log(`${i + 1}. ${branch}`);
    });
  }
}

const bank = new Bank("Bank of India");

// Add branches
bank.addBranch("Joshipura");
bank.addBranch("Kalwa");
bank.addBranch("Janjarda");

// Display all branches
bank.displayBranches();

// Remove a branch
bank.removeBranch("Janjarda");

// Display all branches again
bank.displayBranches();
