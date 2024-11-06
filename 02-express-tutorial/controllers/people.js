const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  const newPerson = { id: people.length + 1, name };
  people.push(newPerson);
  res.status(201).json({ success: true, data: people });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const personIndex = people.findIndex((person) => person.id === Number(id));

  if (personIndex === -1) {
    return res
      .status(404)
      .json({ success: false, msg: `No person found with id ${id}` });
  }

  people.splice(personIndex, 1);
  res.status(200).json({ success: true, data: people });
};

const editPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  person.name = name;
  res.status(200).json({ success: true, data: people });
};

module.exports = { getPeople, createPerson, deletePerson, editPerson };
