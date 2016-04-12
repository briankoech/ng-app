'use strict';

eventsApp.controller('MainMenuController', function($scope, $location) {
  $scope.createEvent = function() {
    console.log($location);
    $location.url('/newEvent');
  };
});