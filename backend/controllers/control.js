const getOrders = (req, res) => {
  res.status(200).json({ message: "Get order" });
};

const setOrders = (req, res) => {
  res.status(200).json({ message: "Set order" });
};

const updateOrders = (req, res) => {
  res.status(200).json({ message: "Update order" });
};
const deleteOrders = (req, res) => {
  res.status(200).json({ message: "Cancell the order" });
};

module.exports = {
  getOrders,
  setOrders,
  updateOrders,
  deleteOrders,
};
