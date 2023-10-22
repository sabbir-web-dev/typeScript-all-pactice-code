var users;
users = [];
var user1;
user1 = { name: "sabbir", id: 1 };
users.push(user1);
var user2;
user2 = { name: "Sani", id: 2, class: 10 };
users.push(user2);
var user3;
user3 = { name: "Sani", id: 2, class: 10 };
users.push(user3);
console.log(users);
for (var key in users) {
    console.log(users[key]["name"]);
}
