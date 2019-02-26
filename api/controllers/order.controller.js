"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  postOrder: function postOrder(req, res) {
    var orderBody = req.body;

    var orderCreated = _order.default.postAnOrder(orderBody);

    return res.json({
      status: 'Success',
      data: orderCreated
    }).status(200);
  },
  modifyOrders: function modifyOrders(req, res) {
    var orderBody = req.body;
    var orderId = req.params.id;

    var editOrder = _order.default.modifyOrder(orderBody, orderId);

    return res.json({
      status: 'Success',
      data: editOrder
    }).status(200);
  },
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _order.default.getAllOrders();

    return res.json({
      status: 'Success',
      data: allOrders
    }).status(200);
  }
};
var _default = OrderController;
exports.default = _default;