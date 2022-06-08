const express = require("express");
const router = express.Router();
let order = require("../models/model");
const {
  getOrders,
  postOrders,
  updateOrders,
  deleteOrders,
} = require("../controllers/control");

module.exports = router;

router.get("/:id", getOrders); //get status of order and it is name

router.post(
  "/",
  postOrders //req.params.id
); //the order is processed

router.put("/:id", updateOrders); //the order is fullfilled

router.delete("/:id", deleteOrders);

module.exports = router;
