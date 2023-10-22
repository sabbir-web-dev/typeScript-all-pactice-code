type User = { name: string; id: number; select: boolean; age?: number };
const users: User[] = [];

let user1: User;
let user2: User;
let user3: User;

user1 = { name: "sabbir", id: 2, select: true, age: 12 };
user2 = { name: "sani", id: 3, select: true, age: 21 };
user3 = { name: "Aslam", id: 5, select: true, age: 13 };

users.push(user1, user2, user3);

console.log(users);

type RequestType = "GET" | "POST";

let request: RequestType;
request = "GET";

function requestHendle (request: RequestType){
  console.log(request);
}

requestHendle("POST");