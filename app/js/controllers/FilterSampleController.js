(function() {
  'use strict';

  angular.module('eventsApp')
    .controller('FilterSampleController', 
      function($scope, $filter) {
        $scope.data = {};

        var durations = $filter('durations');
        $scope.data.duration1 = durrations(1);
        $scope.data.durations2 = duration(2);
        $scope.data.durations3 = duration(3);
        $scope.data.durations4 = duration(4);
      });
})();