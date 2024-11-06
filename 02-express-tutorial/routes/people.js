const express = require("express");
const router = express.Router();
const { people } = require("../data");
const {
  getPeople,
  createPerson,
  deletePerson,
  editPerson
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.delete("/:id", deletePerson);
// router.put("/:id", editPerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").delete(deletePerson).put(editPerson);

module.exports = router;
