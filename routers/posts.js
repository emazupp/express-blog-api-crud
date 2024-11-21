// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

// * INDEX
router.get("/", (req, res) => {
  res.json(posts);
});

// * SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredPost = posts.find((post) => post.id === id);
  res.json(filteredPost);
});

// * STORE
router.post("/", (req, res) => {
  const text = "Creazione nuovo post";
  res.json(text);
});

// * UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const text = `Modifica totale del post con id: ${id}`;
  res.json(text);
});

// * MODIFY
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const text = `Modifica parziale del post con id: ${id}`;
  res.json(text);
});

// * DESTROY
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const text = `Cancellazione del post con id: ${id}`;
  res.json(text);
});

module.exports = router;
