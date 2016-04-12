'use strict';

eventsApp.directive('eventThumbnail', function() {
  return {
    restict: 'E',
    replace: true,
    templateUrl: '/templates/directives/eventThumbnail.html',
    scope: {
      event: "=event"
    }
  };
});