"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuDummyData = _interopRequireDefault(require("../utils/menuDummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuServices = {
  fetchAllMenus: function fetchAllMenus() {
    var getMenus = _menuDummyData.default.menus.map(function (menus) {
      var newMenu = new _menu.default();
      newMenu.id = menus.menuId;
      newMenu.menuName = menus.name;
      newMenu.menuMeals = menus.meals;
      return newMenu;
    });

    return getMenus;
  },
  setMenu: function setMenu(menu) {
    var menuLength = _menuDummyData.default.menus.length;
    var lastMenu = _menuDummyData.default.menus[menuLength - 1].menuId;
    menu.menuId = lastMenu + 1;

    _menuDummyData.default.menus.push(menu);

    return menu;
  }
};
var _default = MenuServices;
exports.default = _default;