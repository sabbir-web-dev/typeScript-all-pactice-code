
class User {
  userName: string;
  age: number;

  constructor(user: string, age: number) {
    this.userName = user;
    this.age = age
  }

  display(): void{
    console.log(`Name: ${this.userName}, Age: ${this.age}`)
  }
}

let user1 = new User ("Sabbir",18);
user1.display();

class Student extends User {
  stdentId : number;

  constructor(userName : string, age: number, studentId: number){
    super(userName,age);
    this.stdentId = studentId;
  }

  display(): void{
    console.log(`Name: ${this.userName}, Age: ${this.age}, Id: ${this.stdentId}`);
  }
}

let user2 = new Student("Tamim",16,12039);
user2.display();
