let userId: string | number | boolean;
userId = "123";
userId = 123;

function userIdInfo(userId: number | string) {
  console.log(userId);
}

userIdInfo("12");
userIdInfo(12)
