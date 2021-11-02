var isa_one = 13;
var isa_two = 15;
var ass = 12;
var essa = 42;
var sum = isa_one + isa_two + ass + essa;
if (sum <= 100 && sum >= 90) {
  console.log(" a grade");
} else if (sum <= 89 && sum >= 80) {
  console.log(" B grade");
} else if (sum <= 79 && sum >= 70) {
  console.log(" C grade");
} else if (sum <= 69 && sum >= 60) {
  console.log(" D grade");
} else if (sum <= 59 && sum >= 50) {
  console.log(" E grade");
} else {
  console.log("fail");
}
