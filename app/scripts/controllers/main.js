'use strict';

angular.module('uuKveldApp')
  .controller('MainCtrl', function ($scope) {
    $scope.submitForm = function() {
      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        console.log('our form is amazing');
      }
    };
  });
