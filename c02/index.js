const cb = () => {
    console.log("Time out");
}
cb();
setTimeout(cb, 1000);

console.log("***");

function showresult(output) {
    console.log(output);
}

function res(temp, convert, cb) {

    if (convert == "c2f") {
        let value = (temp * 1.8) + 32;
        cb(value);
    } else if (convert == "f2c") {
        let value = (temp - 32) / 1.8;
        cb(value);
    }

    convert == "f2c" ? value = (temp * 1.8) + 32 : value = (temp - 32) / 1.8;
    cb(value)

}

res(42, "c2f", showresult);



const sumPosiveNUmbers = (num, num1) => {
    return new Promise((success, fail) => {

        if (num > 0 && num1 > 0) {
            return success(num + num1);
        }
        else {
            return fail("Fail");

        }

    });
}

sumPosiveNUmbers(2, -2)
    .then(rs => {
        console.log(rs)
    })
    .catch(err => {
        console.log(err)
    })
