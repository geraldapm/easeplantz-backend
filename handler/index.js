const getIndexHandler = async (req, res) => {
  try {
    const { name = "fulan", hobby = "senyum" } = req.query;
    console.log(`Nama saya ${name} dan hobi saya ${hobby}`);
    return res.status(200).json({
      status: "success",
      message: `nama saya ${name} dan hobi saya ${hobby}`,
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

module.exports = getIndexHandler;
