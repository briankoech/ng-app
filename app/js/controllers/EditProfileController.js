eventsApp.controller('EditProfileController', 
  ['$scope', 'gravatarUrlBuilder', function($scope, gravatarUrlBuilder) {
    $scope.user = {
      emailAddress: 'angularjsdemo@gmail.com'
    };

    $scope.getGravatarUrl = function(email) {
      return gravatarUrlBuilder.buildGravatarUrl(email);
    };    
}]);