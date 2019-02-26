"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

var _order = _interopRequireDefault(require("./../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  postAnOrder: function postAnOrder(order) {
    var orderLength = _orderDummyData.default.Orders.length;
    var lastOrder = _orderDummyData.default.Orders[orderLength - 1].id;
    order.id = lastOrder + 1;

    _orderDummyData.default.Orders.push(order);

    return order;
  },
  modifyOrder: function modifyOrder(order, id) {
    // get the order id and index
    var orderId = _orderDummyData.default.Orders.find(function (anOrder) {
      return anOrder.id == id;
    });

    var getOrderIndex = _orderDummyData.default.Orders.indexOf(orderId);

    orderId.id = id;

    if (order.userName == null) {
      orderId.username = orderId.username;
    } else {
      orderId.username = order.userName;
    }

    if (order.address == null) {
      orderId.address = orderId.address;
    } else {
      orderId.address = order.address;
    }

    if (order.items == null) {
      orderId.items = orderId.items;
    } else {
      orderId.items = order.items;
    }

    _orderDummyData.default.Orders.splice(getOrderIndex, 1, orderId);

    return orderId;
  },
  getAllOrders: function getAllOrders() {
    var allOrders = _orderDummyData.default.Orders.map(function (orders) {
      var newOrder = new _order.default();
      newOrder.id = orders.id;
      newOrder.userName = orders.username;
      newOrder.address = orders.address;
      newOrder.items = orders.items;
      return newOrder;
    });

    return allOrders || {};
  }
};
var _default = OrderService;
exports.default = _default;