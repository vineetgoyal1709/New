const Mark_Mass=50;
const John_Mass=60;
const Mark_Height=1.69;
const John_Height=1.76;
const Mark_BMI= Mark_Mass/(Mark_Height*Mark_Height);
const John_BMI= John_Mass/(John_Height*John_Height);
console.log("BMI of John is:" + John_BMI+"and the BMI of Mark is: "+ Mark_BMI);
const markHigherBmi=Mark_BMI>John_BMI;
console.log(markHigherBmi);
