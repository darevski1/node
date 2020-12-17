const fs = require('fs');
let text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
// fs.writeFile('data.txt', text, err => {
//     if (!err) {
//         return console.log(err);
//     } else {
//         console.log("Directory created");
//     }
// })

// fs.readFile("data.txt", 'utf8', (err, data) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(data);
// });

// fs.appendFile('data.txt', "dodavanje ne nov text vo fajlot", err => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Success append");

// });

const writeFile = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, err => {
            if (err) {
                return fail(err)
            }
            return success;
        })
    })
}
writeFile('data.txt', "Pero")
    .then(() => {
        console.log();
    })
    .catch(() => {
        console.log();
    })


const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf', (err, data) => {
            if (err) {
                return fail(err)
            }
            return success(data);
        });
    });
};

fileRead('data.txt')
    .then(() => {
        console.log(data);
    })
    .catch(() => {
        console.log(err);
    });