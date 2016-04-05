(function() {
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll) {

      $scope.snippet = '<span style="color:red">Hi there</span>';
      $scope.boolValue = false;
      $scope.sortorder = 'name';
      $scope.buttonDisabled = true;
      $scope.mystyle = {color: 'red'};
      $scope.myclass = 'blue';
      eventData.getEvent()
        .$promise
        .then(function(event) {
          $scope.event = event;
          console.log(event);
        })
        .catch(function(response) {
          console.log(response);
        });

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };

      $scope.scrollToSession = function() {
        $anchorScroll();
      };

      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    }
  );
})();
