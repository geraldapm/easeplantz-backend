const getUploadHandler = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: `memasuki GET service dari server back-end`,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
  return res.status(500).json({
    status: "failed",
    message: "internal server execption",
  });
};

const addFileUploadHandler = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: `memasuki POST service dari server back-end`,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
  return res.status(500).json({
    status: "failed",
    message: "internal server execption",
  });
};

const deleteFileUploadHandler = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: `memasuki DELETE service dari server back-end`,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
  return res.status(500).json({
    status: "failed",
    message: "internal server execption",
  });
};

module.exports = {
  getUploadHandler,
  addFileUploadHandler,
  deleteFileUploadHandler,
};
