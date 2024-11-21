const posts = require("../data/posts");

// * INDEX
function index(req, res) {
  res.json(posts);
}

// * SHOW
function show(req, res) {
  const id = parseInt(req.params.id);
  const findedPost = posts.find((post) => post.id === id);
  res.json(findedPost);
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
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const indexOfFindedPost = posts.indexOf(posts.find((post) => post.id === id));
  posts.splice(indexOfFindedPost, 1);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
