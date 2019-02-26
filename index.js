var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./api/routes/meal.routes"));

var _menu = _interopRequireDefault(require("./api/routes/menu.route"));

var _order = _interopRequireDefault(require("./api/routes/order.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 9001;
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  return res.send('App is now working fine');
});
app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menus', _menu.default);
app.use('/api/v1/orders', _order.default);
app.listen(port, function () {
  console.log("App is listening on port ".concat(port));
});
module.exports = app;