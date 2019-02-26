"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("./../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menusRouter = (0, _express.Router)();
menusRouter.get('/', _menu.default.fetchAllMenus);
menusRouter.post('/', _menu.default.setupMenu);
var _default = menusRouter;
exports.default = _default;