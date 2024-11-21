const posts = require("../data/posts");

// * INDEX
function index(req, res) {
  res.json(posts);
}

// * SHOW
function show(req, res) {
  const id = parseInt(req.params.id);
  const filteredPost = posts.find((post) => post.id === id);
  res.json(filteredPost);
}

// * STORE
function store(req, res) {
  const text = "Creazione nuovo post";
  res.json(text);
}

// * UPDATE
function update(req, res) {
  const id = parseInt(req.params.id);
  const text = `Modifica totale del post con id: ${id}`;
  res.json(text);
}

// * MODIFY
function modify(req, res) {
  const id = parseInt(req.params.id);
  const text = `Modifica parziale del post con id: ${id}`;
  res.json(text);
}

// * DESTROY
function destroy(rew, res) {
  const id = parseInt(req.params.id);
  const text = `Cancellazione del post con id: ${id}`;
  res.json(text);
}

module.exports = { index, show, store, update, modify, destroy };
