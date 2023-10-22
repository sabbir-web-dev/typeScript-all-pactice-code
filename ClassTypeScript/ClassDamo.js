var User = /** @class */ (function () {
    function User(x, y) {
        this.name = x;
        this.age = y;
    }
    User.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Sabbir", 18);
var user2 = new User("Tamim", 17);
user1.display();
user2.display();
