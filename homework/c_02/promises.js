// create promise


//  exercise one Promise
const buyNewPhone = (amount) => {
    return new Promise((resolve, reject) => {
        if (amount >= 99) {
            const confirm = "I will buy new phone";
            return resolve(confirm);
        }
        else {
            const reason = "Not enough money to buy new phone";
            return reject(reason);
        }
    })
}

buyNewPhone(22)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })


//  exercise two Promise - Ceteris Paribus all things being equal.
// let currentmoney = 10;
// let spentmoney = 10;
// const ceterisParibus = new Promise(
//     (resolve, reject) => {
//         if (currentmoney == spentmoney) {
//             const message = "Ceteris Paribus all things being equal.";
//             return resolve(message);
//         } else {
//             const message = "We done have Ceteris Paribus";
//             return reject(message)
//         }

//     })

// const checker = function () {
//     ceterisParibus
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// checker();



// //  exercise tree Promise - Fill the tanks with oil
const calcOilLeft = (sold) => {

    var total = 1000;
    var current = "";

    let result = total - sold;
    current = result;

    return new Promise((resolve, reject) => {
        if (current > 100) {
            const confirm = "You still have oli in the tanks";
            return resolve(confirm);
        } else {
            const confirm = "Please fill the thanks with oli there are left only " + current + "liters";
            return reject(confirm);
        }
    });
}


calcOilLeft(933)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });


const cb = (currentmoney, spentmoney) => {

    return new Promise(
        (resolve, reject) => {
            if (currentmoney == spentmoney) {
                const message = "Ceteris Paribus all things being equal.";
                return resolve(message);
            } else {
                const message = "We done have Ceteris Paribus";
                return reject(message)
            }

        })
}

cb(25, 60)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })