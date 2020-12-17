
// callback funtction homework

/* Exercize one
   define function learning, and define function letslearn who takes callback as argument 
 */

const learning = () => {
    console.log("i love learning javascript");
};

const letsLearn = (callback) => {
    callback();
};
// letsLearn = ((callback) => {
//     callback()
// })
letsLearn(learning);


// Exercize two  money convertor
function moneyValue(callback) {
    console.log(callback);
}

function moneyConvertor(mkdenar, callback) {

    const dolar = 56;
    let result = (mkdenar / dolar);

    callback("Total dolar" + result);
}
moneyConvertor(5000, moneyValue);


// Brick calculator
function totalBrick(callback) {
    console.log(callback)
}
function brickCalc(h, w, callback) {
    var brick = 12;
    var result = (h * w) * brick;
    callback("Total number of brick " + Math.round(result));

}
brickCalc(4.1, 2.9, totalBrick)