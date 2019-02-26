"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealServices = {
  fetchAllMeals: function fetchAllMeals() {
    var allMeals = _dummyData.default.meals.map(function (meals) {
      var newMeal = new _meal.default();
      newMeal.id = meals.id;
      newMeal.name = meals.name;
      newMeal.price = meals.price;
      newMeal.size = meals.size;
      return newMeal;
    });

    return allMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return meal;
  },
  getMeal: function getMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  deleteMeal: function deleteMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    var mealIndex = _dummyData.default.meals.indexOf(meal);

    var removeMeal = _dummyData.default.meals.splice(mealIndex, 1); // console.log(removeMeal);
    // console.log(mealIndex);


    return removeMeal || {};
  },
  updateMeal: function updateMeal(meal, id) {
    // get the meal id and index
    var mealId = _dummyData.default.meals.find(function (Ameal) {
      return Ameal.id == id;
    });

    var getMealIndex = _dummyData.default.meals.indexOf(mealId);

    mealId.id = id;

    if (meal.name == null) {
      mealId.name = mealId.name;
    } else {
      mealId.name = meal.name;
    }

    if (meal.size == null) {
      mealId.size = mealId.size;
    } else {
      mealId.size = meal.size;
    }

    if (meal.price == null) {
      mealId.price = mealId.price;
    } else {
      mealId.price = meal.price;
    }

    _dummyData.default.meals.splice(getMealIndex, 1, mealId);

    return mealId;
  }
};
var _default = MealServices;
exports.default = _default;