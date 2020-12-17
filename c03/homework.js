const fs = require("fs");


// Lets create folders

const directory = "nodejs/assets/css/";
const mainpage = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link kref="assets/css/style.css">
</head>

<body>
    <h1>This is h1</h1>
    <p>This is p</p>
</body>

</html>`;


const styles = `body {
background: #444444;
font-size: 22px;
color: #ffff;
  }

h1 {
    color: red;
    font-size: 4rem;
}
p {
    font-size: 2rem;
}
`;

// fs.mkdir(directory, { recursive: true }, err => {
//     if (!err) {
//         fs.writeFile('nodejs/assets/css/style.css', styles, err => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                  fs.writeFile('nodejs/index.html', mainpage, err => {
//                         if (!err) {
//                             console.log("Success");
//                         }
//                         else {
//                             console.log(err);
//                         }
//                     })
//                             console.log("Success");
//                 }
//             })

//     } else {
//         console.log(err);
//     }
// })

 

const createProject = () => {
    return new Promise((success, fail) => {
        fs.mkdir(directory, { recursive: true }, err => {
            if(err){
                return fail(err)
            }
            return success();
        });
    }
}

createProject()
.then(()=>{
    console.log("Success")
})
.catch(err =>{
    console.log(err)
})