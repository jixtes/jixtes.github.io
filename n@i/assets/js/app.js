var app = angular.module('app', ['dataService']);

app.controller('appCtrl', ['$scope', function ($scope) {
}]);

app.directive('collapse', function () {
  return function (scope, element, attrs) {
    $(element).on('click', function () {
      $(attrs.target).collapse('toggle');
    });
  };
});
