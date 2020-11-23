
// callback funtction homework

/* Exercize one
   define function learning, and define function letslearn who takes callback as argument 
 */

learning = () => {
    console.log("i love learning javascript");
}

letsLearn = (callback) => {
    callback()
}
// letsLearn = ((callback) => {
//     callback()
// })
letsLearn(learning)


// Exercize two  money convertor
function moneyValue(callback) {
    console.log(callback)
}

function moneyConvertor(mkdenar, callback) {

    const dolar = 56;
    result = (mkdenar / dolar)

    callback(result)
}

moneyConvertor(5000, moneyValue)