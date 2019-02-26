"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("./../services/meal.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'Success',
      data: allMeals
    }).status(200);
  },
  AddMeals: function AddMeals(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'Success',
      data: createdMeal
    }).status(200);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var mealId = req.params.id;

    var getMeal = _meal.default.getMeal(mealId);

    return res.json({
      status: 'Success',
      data: getMeal
    }).status(201);
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var mealId = req.params.id;

    var removeMeal = _meal.default.deleteMeal(mealId);

    return res.json({
      status: 'Success',
      data: removeMeal
    }).status(201);
  },
  updateMeal: function updateMeal(req, res) {
    var mealBody = req.body;
    var mealId = req.params.id;

    var editMeal = _meal.default.updateMeal(mealBody, mealId);

    return res.json({
      status: 'Success',
      data: editMeal
    }).status(201);
  }
};
var _default = MealController;
exports.default = _default;