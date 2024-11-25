function notFound(req, res, next) {
  res.status(404);
  res.json({ error: err.message });
}

module.exports = notFound;
