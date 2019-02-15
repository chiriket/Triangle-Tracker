function Triangle() {

var base = parseFloat(prompt("Enter base length of the triangle"));
var height = parseFloat(prompt("Enter height length of the triangle"));
var hypotenus = parseFloat(prompt("Enter hypotenus length of the triangle"));

if (base===height && height===hypotenus && hypotenus===base){
 alert("This is an equilateral triangle");
}
else if(base===height || height===hypotenus || hypotenus===base){
  alert("This is an Isosceles Triangle");
}
else if((base+height) <=hypotenus || (height + hypotenus) <=base ||(hypotenus + base) <=height){
  alert("This is not a triangle!");
}
else {
  alert("This is a Scalene triangle");
}};
