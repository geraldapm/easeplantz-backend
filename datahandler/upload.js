const path = require("path");
const { readFileUtil, writeFileUtil } = require("../utils/datawrite");
const uploadfile = path.join(__dirname, "..", "database", "filedata.json");

const readFile = () => {
  try {
    const parsedjson = readFileUtil(uploadfile);
    return parsedjson;
  } catch (err) {
    console.log(err);
    return;
  }
};

const writeFile = (arr) => {
  try {
    writeFileUtil(arr, uploadfile);
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = { writeFile, readFile };
