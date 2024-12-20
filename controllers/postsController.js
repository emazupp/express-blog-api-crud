const posts = require("../data/posts");

function findPostById(res, id) {
  const findedPost = posts.find((post) => post.id === id);
  if (findedPost) return findedPost;
  else {
    const err = new Error("Id post not founded");
    err.code = 404;
    throw err;
  }
}

function filterPostByTag(res, tag) {
  const filteredPost = posts.filter((post) => post.tags.includes(tag));
  return filteredPost.length
    ? filteredPost
    : res.send("Nessun elemento trovato con i tag richiesti");
}

function invalidParamsError() {
  const err = new Error("Invalid params");
  err.code = 400;
  throw err;
}

// * INDEX
function index(req, res) {
  const { tag } = req.query;
  tag ? res.json(filterPostByTag(res, tag)) : res.json(posts);
}

// * SHOW
function show(req, res) {
  const id = parseInt(req.params.id);
  const findedPost = findPostById(res, id);
  res.json(findedPost);
}

// * STORE
function store(req, res) {
  const { title, content, img, tags } = req.body;
  if (!title || !content || !img || !tags?.length) invalidParamsError();
  const id = posts.at(-1).id + 1;
  const newPost = { id, title, content, img, tags };
  posts.push(newPost);
  res.json(newPost);
}

// * UPDATE
function update(req, res) {
  const id = parseInt(req.params.id);
  const { title, content, img, tags } = req.body;
  if (!title || !content || !img || !tags?.length) invalidParamsError();

  const findedPost = findPostById(res, id);

  findedPost.title = title;
  findedPost.content = content;
  findedPost.img = img;
  findedPost.tags = tags;

  res.json(findedPost);
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
