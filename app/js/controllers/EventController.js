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

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
