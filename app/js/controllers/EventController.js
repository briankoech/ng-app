(function() {
  'use strict';

  eventsApp.controller('EventController',
    function EventController() {

      var self = this;

      self.snippet = '<apn style="color:red">Hi there</span>';
      self.boolValue = false;
      self.sortorder = 'name';
      self.buttonDisabled = true;
      self.mystyle = {color: 'red'};
      self.myclass = 'blue';
      self.event = {
        name: 'Angular Boot Camp',
        date: new Date(),
        time: '10.30 am',
        location: {
          address: 'Google Headquaters',
          city: 'Mountain View',
          province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
          {
            name: 'cDirective Masterclass Introductory',
            creatorName: 'Bob Smith',
            duration: 1,
            level: 'Advanced',
            abstract: 'In the session you will learn the ins and outs of directives',
            upVoteCount: 0
          },
          {
            name: 'aScopes for fun and profit',
            creatorName: 'John Doe',
            duration: 2,
            level: 'Intermediate',
            abstract: 'In the session you will learn the ins and outs of directives',
            upVoteCount: 0
          },
          {
            name: 'bWell behaved Controllers',
            creatorName: 'Bob Smith',
            duration: 4,
            level: 'Introductory',
            abstract: 'In the session you will learn the ins and outs of directives',
            upVoteCount: 0
          },
        ]
      };

      self.upVoteSession = function(session) {
        session.upVoteCount++;
      };

      self.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    }
  );
})();
