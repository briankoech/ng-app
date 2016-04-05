eventsApp.controller('EditProfileController', 
  ['$scope', 'gravatarUrlBuilder', function($scope, gravatarUrlBuilder) {
    $scope.user = {};

    $scope.getGravatarUrl = function(email) {
      return gravatarUrlBuilder.buildGravatarUrl(email);
    };    
}]);