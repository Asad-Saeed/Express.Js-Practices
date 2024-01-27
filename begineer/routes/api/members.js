const express = require("express");
const router = express.Router();
const members = require("../../data");
const uuid = require("uuid");

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

// Create a Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  };
  if (!newMember.name && !newMember.email) {
    return res
      .status(400)
      .json({ message: "Name and Email are required fields" });
  }
  members.push(newMember);
  res.status(201).json(members);
});

// Update a member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;
        member.status = updateMember.status
          ? updateMember.status
          : member.status;
        res.status(200).json({ message: "Member Updated", member });
      }
    });
  } else {
    res.status(404).json({ message: `Id:${req.params.id} is not found!` });
  }
});

// Delete a member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res
      .json({
        message: `Id:${req.params.id} is delete from records`,
        members: members.filter(
          (member) => member.id !== parseInt(req.params.id)
        ),
      });
  } else {
    res.status(404).json({ message: `Id:${req.params.id} is not found!` });
  }
});

module.exports = router;
