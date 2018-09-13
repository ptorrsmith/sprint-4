
// my solution 
function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : (num < 0) ? "negative" : "not a number";
  }
  
// testing solution on a range of values 
var list = [1, null, -2, 0, "", 2923382,'',"Cat", undefined];
for (var i = 0; i < list.length; i++) {
    console.log(checkSign(list[i]));
} 