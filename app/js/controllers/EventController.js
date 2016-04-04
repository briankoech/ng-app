(function() {
  'use strict';

  eventsApp.controller('EventController',
    function EventController(eventData) {

      var self = this;

      self.snippet = '<apn style="color:red">Hi there</span>';
      self.boolValue = false;
      self.sortorder = 'name';
      self.buttonDisabled = true;
      self.mystyle = {color: 'red'};
      self.myclass = 'blue';
      self.event = eventData.event;
     

      self.upVoteSession = function(session) {
        session.upVoteCount++;
      };

      self.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    }
  );
})();
