const ioHandler = require("./ioHandler.js");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const unzipper = require("unzipper");
const fs = require("fs/promises");
const { pipeline } = require("pipeline");



