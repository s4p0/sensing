'use strict';

angular.module('sensingApp')
    .directive('fcProject', function(Mapservice) {
        return {
            // template: '<div></div>',
            replace: true,
            templateUrl: 'views/menu-project.html',
            restrict: 'AECM',
            scope: {
                data: '=source',
                visible: '='
            },
            controller: function($scope) {
                $scope.counter = 0;
                $scope.layersName = [];
                $scope.layers = [];

                $scope.count = function() {
                    $scope.counter++;
                    console.log($scope.counter);
                    console.log($scope.data);
                };

                $scope.clickLayer = function(idx) {
                    var layer = $scope.layers[idx];
                    layer.setVisibility(!layer.getVisibility());
                }

                $scope.createLayer = function(obj) {
                    var name = obj.project.name;

                    for (var n in obj.layers) {
                        if (obj.layers.hasOwnProperty(n)) {
                            //obj.layers.layer;
                            // $scope.layersName.push(n);

                            var layername = name + "." + n;
                            var mapserver = obj.layers[n].mapserver;

                            $scope.layersName.push(layername);

                            var configuration = {
                                map: obj.layers[n].mapfile,
                                layers: obj.layers[n].layer,
                                transparent: true,
                                units: 'meters'
                            };
                            var options = {
                                // visibility: false,
                                visibility: obj.layers[n].visible,
                                isBaseLayer: false,
                                singleTile: false,
                                maxResolution: 'auto'
                            };
                            var layer = new OpenLayers.Layer.WMS(name, mapserver, configuration, options);
                            $scope.layers.push(layer);

                            Mapservice.addLayers($scope.layers);
                        }
                    }

                }


            },

            link: function postLink(scope, element, attrs) {
                // var name = scope.source.project.name;
                // element.text(name);

                scope.createLayer(scope.data);

            }
        };
    });
