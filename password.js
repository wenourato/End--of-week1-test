console.log("Welcome!  Thanks for using the password validator tool!");
console.log("Enter password to continue");
let errors = 0
numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let password = "passwordWork5";
if (password.length < 10) {
    errors++
  console.log("Password is not long enough.");
}
let containsNum = false;
for (let i = 0; i < numArr.length; i++) {
  if(password.includes(numArr[i])) {
    containsNum = true;
  }
}
if(!containsNum) {
    errors++
    console.log('Password does not contain a number.')
}
if(errors === 0) {
    console.log("You have successfully created a password!")
}