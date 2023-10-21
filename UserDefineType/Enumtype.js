// numaeic enum 
var requsType;
(function (requsType) {
    // ReadData,
    // SaveData,
    // DeleteData
    // or 
    requsType[requsType["ReadData"] = 1] = "ReadData";
    requsType[requsType["SaveData"] = 2] = "SaveData";
    requsType[requsType["DeleteData"] = 3] = "DeleteData";
})(requsType || (requsType = {}));
// console.log(requsType)
console.log(requsType[2]);
// string enum 
var requsType2;
(function (requsType2) {
    requsType2["readData"] = "Read Data";
    requsType2["deleteData"] = "Delete Data";
})(requsType2 || (requsType2 = {}));
console.log(requsType2.readData);
console.log(requsType2["readData"]);
// heterogeneoud enum 
var requsType3;
(function (requsType3) {
    requsType3[requsType3["id"] = 1] = "id";
    requsType3["name"] = "Sabbir";
})(requsType3 || (requsType3 = {}));
console.log(requsType3.id);
console.log(requsType3[1]);
