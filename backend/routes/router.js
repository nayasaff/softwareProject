const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrders,
  updateOrders,
  deleteOrders,
} = require("../controllers/control");

module.exports = router;

router.get("/", getOrders);

router.post(
  "/",
  setOrders //req.params.id
); //the order is processed

router.put("/:id", updateOrders); //the order is fullfilled

router.delete("/:id", deleteOrders);

module.exports = router;
