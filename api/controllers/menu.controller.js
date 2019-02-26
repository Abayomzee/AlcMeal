"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenus: function fetchAllMenus(req, res) {
    var allMenus = _menu.default.fetchAllMenus();

    return res.json({
      status: 'Success',
      data: allMenus
    }).status(200);
  },
  setupMenu: function setupMenu(req, res) {
    var getMenu = req.body;

    var createdMenu = _menu.default.setMenu(getMenu);

    return res.json({
      status: 'Success',
      data: createdMenu
    }).status(200);
  }
};
var _default = MenuController;
exports.default = _default;