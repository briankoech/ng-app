(function() {
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {

      $scope.snippet = '<span style="color:red">Hi there</span>';
      $scope.boolValue = false;
      $scope.sortorder = 'name';
      $scope.event = $route.current.locals.event;
      // eventData.getEvent($routeParams.eventId)
      //   .$promise
      //   .then(function(event) {
      //     $scope.event = event;
      //     console.log(event);
      //   })
      //   .catch(function(response) {
      //     console.log(response);
      //   });
      $scope.reload = function() {
        $route.reload();
      };

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
