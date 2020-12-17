const fs = require("fs");
const f = "./data.json";

const writeJsonFIle = (data) => {
    return Promise((success, fail) => {
        fs.writeFiwriteJsonFIlele(f, JSON.stringify(data), (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const readJsonFile = () => {
    return new Promise((success, fail) => {
        fs.readFile(f, 'utf8', (err, data) => {
            if (err) {
                return fail(err)
            }
            return success(JSON.parse(data));

        })
    })
}

module.exports = {
    writeJsonFIle,
    readJsonFile,
}