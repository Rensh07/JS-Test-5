// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index >= 0) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(`Departments of ${this.universityName}:`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1}. ${department}`);
    });
  }
}

const university = new University("MIT");

// Add departments
university.addDepartment("Computer Science");
university.addDepartment("Mathematics");

// Display all departments
university.displayDepartments();

// Remove department
university.removeDepartment("Mathematics");

// Display all departments again
university.displayDepartments();
