const ioHandler = require("./ioHandler.js");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const unzipper = require("unzipper");
const fs = require("fs/promises");
const { pipeline } = require("pipeline");




ioHandlerHandler.unzip()
    .then(() => ioHandler.readDir())
    .then((arr) => ioHandler(arr))
    .catch((err) => console.log(err));


function readSomething() {
    return New Promise ((resolve, reject) => {
        pipeline(
            fs.createReadStream("abc.txt"),
            unzipper.Extract(),
            (err) => console.log(err)
        )
    })
}

readSomething()
.then()
.catch()