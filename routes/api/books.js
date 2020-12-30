const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  

// Matches with "/api/books/:id"
router.route("/:id")
  .post(booksController.create)
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
