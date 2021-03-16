const express = require("express");
const router = express.Router();
const Argonaute = require("../models/Argonaute");

// http://localhost:4000/api/argonautes
router.get("/", (req, res, next) => {
  // Get all the argonautes
  Argonaute.find()
    .then((argonauteDocuments) => {
      res.status(200).json(argonauteDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/argonautes
router.post("/", (req, res, next) => {
  // Create an argonaute
  Argonaute.create(req.body)
    .then((argonauteDocuments) => {
      res.status(201).json(argonauteDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
