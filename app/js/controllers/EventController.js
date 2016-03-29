'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {

    $scope.snippet = '<apn style="color:red">Hi there</span>';
    $scope.boolValue = false;
    $scope.sortorder = 'name';
    $scope.buttonDisabled = true;
    $scope.mystyle = {color: 'red'};
    $scope.myclass = 'blue';
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/1990',
      time: '10.30 am',
      location: {
        address: 'Google Headquaters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directive Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In the session you will learn the ins and outs of directives',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In the session you will learn the ins and outs of directives',
          upVoteCount: 0
        },
        {
          name: 'Well behaved Controllers',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In the session you will learn the ins and outs of directives',
          upVoteCount: 0
        },
      ]
    };

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
