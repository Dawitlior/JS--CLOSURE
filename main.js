//CLOSURE
//משתנים שהוגדרו בסקופ האב אם קיים של הפונקציה  ,יהיו מוכרים בסקופ הבן
//זו תכונה חשובה שמאפשרת גמישות אבל מסוכנת
1;
function myFunction() {
  console.log(foo);
}
let foo = "Hello";
myFunction();

2;

function myFunc() {
  const answer = a + b;
  return answer;
}
let a = 5;
let b = 2;
let c = myFunc();
console.log(c);

3;
if (x == 5) {
  console.log(five);
} else {
  console.log(four);
}
let x = 4
//-----------------------------------------------------------------
//במקרה הזה המשתנה פוו הופך לעצמאי למרות שהגדרנו מחוץ לסקופ משתנה עם אותו שם

function someFunction(){
    let fo = 2;
    const answer = fo + bar;
    return answer;
}
let fo = 1000;
let bar = 2;
let bazi = someFunction();
console.log(bazi);