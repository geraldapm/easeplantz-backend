const fs = require("fs");

const readFileUtil = (filepath) => {
  try {
    const jsonString = fs.readFileSync(filepath, "utf8");
    const parsedjson = JSON.parse(jsonString);
    if (!parsedjson) {
      const obj = {};
      writeFileUtil(obj, filepath);
      // console.log('new JSON initialized');
    }
    console.log("read completed");
    // console.log(parsedjson);
    return parsedjson;
  } catch (err) {
    console.log(err);
    return;
  }
};

const writeFileUtil = (arr, filepath) => {
  try {
    const jsonString = JSON.stringify(arr);
    fs.writeFileSync(filepath, jsonString);
    console.log("write completed");
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = { readFileUtil, writeFileUtil };
