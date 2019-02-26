"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderRouter = (0, _express.Router)();
OrderRouter.post('/', _order.default.postOrder);
OrderRouter.put('/:id', _order.default.modifyOrders);
OrderRouter.get('/', _order.default.fetchAllOrders);
var _default = OrderRouter;
exports.default = _default;