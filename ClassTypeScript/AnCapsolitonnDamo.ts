abstract class User {
  // public private protected read only
  protected name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract display(): void;
}
class Student extends User {
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Id: ${this.studentId}`);
  }
  setName(studentName: string): void {
    this.name = studentName;
  }
  getName(): string {
    return this.name;
  }
}

let user = new Student("sabbir", 19, 242406);

user.setName("Tamim");
console.log(user.getName());
