abstract class User {
  name: string;
  age: number;

  constructor(name:string, age:number) {
      this.name = name;
      this.age = age;        
      }
  abstract display () : void;
}
class Student extends User {
  studentId : number;

  constructor(name:string,age:number,studentId:number){
    super(name,age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Id: ${this.studentId}`)
  }
}

let user = new Student("sabbir",19,242406);
user.display()