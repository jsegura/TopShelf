'use strict';

angular.module('guildApp')
  .controller('ApplicationListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('/api/applications').success(function(applications) {
      $scope.applications = applications;
    });

    $scope.selectApplication = function(application) {
        $location.path('/admin/applications/edit/' + application._id);
    }
    $scope.deleteApplication = function(application) {
        $http.delete('/api/applications/' + application._id).success(function() {
            $http.get('/api/applications').success(function(applications) {
              $scope.applications = applications;
            });
        });
    }

      
        $scope.getApplicationById = function(id) {
            var results = jQuery.grep($scope.application, function( application, i ) {
                return ( application._id === id );
            });
            return results[0];
        }
        


    $scope.addNew = function() {
        $location.path('/applications/edit')
    }
  }]);
