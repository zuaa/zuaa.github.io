/**
 * Created by xuping on 2016/2/28.
 */
var math = require('mathjs');

// functions and constants
math.round(math.e, 3);            // 2.718
math.atan2(3, -3) / math.pi;      // 0.75
math.log(1000, 10);               // 3
math.sqrt(-4);                    // 2i
math.pow([[-1, 2], [3, 1]], 2);   // [[7, 0], [0, 7]]

// expressions
math.eval('12 / (2.3 + 0.7)');    // 4
math.eval('5.08 cm to inch');     // 2 inch
math.eval('sin(45 deg) ^ 2');     // 0.5
math.eval('9 / 3 + 2i');          // 3 + 2i
math.eval('det([-1, 2; 3, 1])');  // -7

// chaining
math.chain(3)
    .add(4)
    .multiply(2)
    .done(); // 14

var level=10
var levelFun=function(level){
   return  math.chain(1).add(level/10).multiply(200*level).done()
}

for(var i=1;i<100;i++){
    console.log(math.ceil(levelFun(i)))
}