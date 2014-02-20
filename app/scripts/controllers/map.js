'use strict';

angular.module('sensingApp')
  .controller('MapCtrl', function ($scope, Mapservice) {

    $scope.initializeApp = function(){
        Mapservice.initialize();
    };

  });
