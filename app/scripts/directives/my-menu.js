'use strict';

angular.module('sensingApp')
    .directive('myMenu', function(Mapservice) {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {
                myData: '='
            },
            link: function postLink(scope, element, attrs) {
                element.text('this is the myMenu directive');

            }
        };
    });
