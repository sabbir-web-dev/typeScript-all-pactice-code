class User {
  // poperties, mathods , constructor
  name: string;
  age: number;

  constructor(x: string, y: number) {
    this.name = x;
    this.age = y;
  }
  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let user1 = new User("Sabbir", 18);
let user2 = new User("Tamim", 17);

user1.display();
user2.display();
