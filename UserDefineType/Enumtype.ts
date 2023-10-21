// numaeic enum 
enum requsType {
  // ReadData,
  // SaveData,
  // DeleteData

  // or 

  ReadData = 1,
  SaveData =2,
  DeleteData =3

}
// console.log(requsType)
console.log(requsType[2])



// string enum 
enum requsType2{
  readData = "Read Data",
  deleteData = "Delete Data"
}
console.log(requsType2.readData);
console.log(requsType2["readData"]);


// heterogeneoud enum 
enum requsType3{
  id = 1,
  name = "Sabbir"
}
console.log(requsType3.id)
console.log(requsType3[1])