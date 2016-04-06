(function() {
  'use strict';

  eventsApp.controller('EditEventController', function($scope, eventData) {
      $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
          eventData.save(event)
            .$promise
            .then(function(response) {
              console.log('success', response);
              window.alert(event.name);
            })
            .catch(function(err) {
              console.log('failure', err);
            });
        }
      };

      $scope.cancelEdit  = function() {
        window.location = "/EventDetails.html";
      };
  });
})();