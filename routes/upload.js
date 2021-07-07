const express = require("express");
const router = express.Router();
const {
  getUploadHandler,
  addFileUploadHandler,
  deleteFileUploadHandler,
} = require("../handler/upload");

router.get("/", getUploadHandler);
router.post("/", addFileUploadHandler);
router.delete("/", deleteFileUploadHandler);

module.exports = router;
