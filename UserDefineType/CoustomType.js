var users = [];
var user1;
var user2;
var user3;
user1 = { name: "sabbir", id: 2, select: true, age: 12 };
user2 = { name: "sani", id: 3, select: true, age: 21 };
user3 = { name: "Aslam", id: 5, select: true, age: 13 };
users.push(user1, user2, user3);
console.log(users);
var request;
request = "GET";
function requestHendle(request) {
    console.log(request);
}
requestHendle("POST");
