'use strict';

angular.module('sensingApp')
    .controller('NavbarCtrl', function($scope, Mapservice, Emulator) {

        // collection of projects
        $scope.projects = [];
        /*{
            "project":{
                "name": "para",
                "date": "2013-08-10"
            },
            "layers":{
                "layer-01": {
                    "caption": "Modis Satellite",
                    "mapfile": "/var/www/mapfile.map",
                    "mapserver": "http://tugui.dmz.inpe.br",
                    "layer": "[paraModis]"
                },
                "layer-02":{
                    "caption": "ANN",
                    "mapfile": "/var/www/mapfile.map",
                    "mapserver": "http://tugui.dmz.inpe.br",
                    "layer": "[paraANN]"
                }
            }
            }*/

        // collection of  layers
        // base layers + projects
        $scope.layers = [];

        // load json to create projects
        // also insert into maps
        $scope.createProjectMenu = function(projectsJSON) {
            this.createLayersFromProjects(projectsJSON);

        };

        // load json to create base layers
        // alson insert into maps
        $scope.createBaseLayerMenu = function(baseLayersJSON) {
            this.creteBaseLayers(baseLayersJSON);

        };

        // load json to create:
        // - Home menu
        // - Contribute menu
        $scope.createSimpleMenu = function() {

        };

        $scope.clickProject = function(data, layerindex) {
            console.log(data);
            console.log(layerindex);

            var keys = [];
            for (var key in data.layers) {
                if (data.layers.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }

            var layername = data.project.name + '.' + keys[layerindex];
            Mapservice.toogleLayer(layername);

        }

        $scope.initialize = function() {

            // emulate restful call
            var projects = Emulator.getProjects();
            this.projects = projects;
            //this.createLayersFromProjects(projects);
            //Mapservice.createLayersFromProjects(projects);

        };



    });
