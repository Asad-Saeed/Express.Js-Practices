const express = require("express");
const router = express.Router();
const members = require("../../data");

// Get All member
router.get("/", (req, res) => {
  res.status(200).json(members);
});

// Get Single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res
      .status(200)
      .json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(404).json({ message: `Id:${req.params.id} is not found!` });
  }
});

module.exports = router;
