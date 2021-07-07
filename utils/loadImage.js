const tf = require("@tensorflow/tfjs-node");
const Jimp = require("jimp");

const preProcess = (image) => {
  // const values = imageByteArray(image);
  image.resize(224, 224);
  const values = image.bitmap.data;
  const outShape = [1, image.bitmap.width, image.bitmap.height, 4];
  let input = tf.tensor4d(values, outShape, "float32");

  // Slice away alpha
  input = input.slice(
    [0, 0, 0, 0],
    [1, image.bitmap.width, image.bitmap.height, 3]
  );

  return input;
};

const loadLocalImage = async (filename) => {
  try {
    const image = await Jimp.read(filename);
    return preProcess(image);
  } catch (err) {
    console.log(err);
  }
};

const getImage = async (filename) => {
  try {
    this.image = await loadLocalImage(filename);
  } catch (error) {
    console.log("error loading image", error);
  }
  return this.image;
};

module.exports = { getImage };
