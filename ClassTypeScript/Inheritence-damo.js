var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(user, age) {
        this.userName = user;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Sabbir", 18);
user1.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.stdentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.age, ", Id: ").concat(this.stdentId));
    };
    return Student;
}(User));
var user2 = new Student("Tamim", 16, 12039);
user2.display();
