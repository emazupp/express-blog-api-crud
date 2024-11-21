const posts = require("../data/posts");

function findPostById(res, id) {
  const findedPost = posts.find((post) => post.id === id);
  return findedPost ? findedPost : res.status(404).json({ error: "Not Found" });
}

function filterPostByTag(res, tag) {
  const filteredPost = posts.filter((post) => post.tags.includes(tag));
  return filteredPost.length
    ? filteredPost
    : res.send("Nessun elemento trovato con i tag richiesti");
}

// * INDEX
function index(req, res) {
  const { tag } = req.query;
  res.json(filterPostByTag(res, tag));
}

// * SHOW
function show(req, res) {
  const id = parseInt(req.params.id);
  const findedPost = findPostById(res, id);
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
  const indexOfFindedPost = posts.indexOf(findPostById(res, id));
  posts.splice(indexOfFindedPost, 1);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
