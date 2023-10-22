let users: object[];
users = [];

let user1: { name: string; id: number; class?: number };
user1 = { name: "sabbir", id: 1 };
users.push(user1);

let user2: { name: string; id: number; class?: number };
user2 = { name: "Sani", id: 2, class: 10};
users.push(user2);

let user3: { name: string; id: number; class: number };
user3 = { name: "Sani", id: 2, class:10};
users.push(user3);

console.log(users);

for (const key in users) {
console.log(users[key]["name"])
}