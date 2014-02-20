'use strict';

angular.module('sensingApp')
    .service('Mapservice', function Mapservice() {

        this.print = function() {
            console.log('here log');
        }

        this.initialize = function() {

            var geographic = new OpenLayers.Projection("EPSG:4326");
            var mercator = new OpenLayers.Projection("EPSG:900913");

            // var base = new OpenLayers.Layer.OSM("OpenStreetMap", null, {
            //     buffer: 3
            // }, {
            //     isBaseLayer: false,
            //     opacity: 1.0,
            // });

            var configuration = {
                map: '/var/www/local.map',
                layers: ["natural-earth-02"],
                // transparent: true,
                // units: 'meters'
            };

            var options = {
                visibility: true,
                isBaseLayer: false,
                // singleTile: false,
                maxResolution: 'auto'
            };

            var base = new OpenLayers.Layer.WMS("base", "http://localhost/cgi-bin/mapserv", configuration, options);

            var m = new OpenLayers.Map({
                projection: mercator,
                div: "map",
                allOverlays: true,
                layers: [base],
                controls: [
                    new OpenLayers.Control.PinchZoom(),
                    new OpenLayers.Control.ZoomBox(),
                    new OpenLayers.Control.ZoomPanel(),
                    new OpenLayers.Control.Navigation({
                        dragPanOptions: {
                            enableKinetic: true
                        }
                    }),
                ],
                center: [0, 0],
                zoom: 2
            });

            // return map
            this.map = m;
        }

        this.insertLayer = function(name, layername, mapserver, mapfile) {
            /*
          modis: new OpenLayers.Layer.WMS("Modis (250m) - 2013-08-04",
            mapserv_url, {
                map: "/var/www/local.map",
                layers: "2013216",
                transparent: "true",
                units: 'meters'
            }, {
                visibility: false,
                isBaseLayer: false,
                singleTile: false,
                opacity: 0.8,
                // maxExtent: new OpenLayers.Bounds(minx,miny,maxx,maxy),
                // getMaxExtent: new OpenLayers.Bounds(-58.5446999999999989, -13.1942000000000004, -49.4528999999999996, 5.6916000000000002),
                maxResolution: "auto"
            }),
          */
            var configuration = {
                map: mapfile,
                layers: layername,
                transparent: true,
                units: 'meters'
            };

            var options = {
                visibility: false,
                isBaseLayer: false,
                singleTile: false,
                maxResolution: 'auto'
            };

            var layer = new OpenLayers.Layer.WMS(name, mapserver, configuration, options);

            var m = this.map;
            if (m) {
                m.addLayer(layer);
            }

        };

        this.toogleLayer = function(layername) {
            var m = this.map;
            var layer = m.getLayersByName(layername)[0];

            layer.setVisibility(!layer.getVisibility());
        }

        this.addLayers = function(layers) {
            var m = this.map;
            if (m) {
                m.addLayers(layers);
            }
        }

        this.createLayersFromProjects = function(projectsJSON) {


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

            for (var i = 0; i < projectsJSON.length; i++) {
                var item = projectsJSON[i];

                for (var layer in item.layers) {
                    if (item.layers.hasOwnProperty(layer)) {

                        this.insertLayer(item.project.name + '.' + layer, item.layers[layer].layer, item.layers[layer].mapserver, item.layers[layer].mapfile);

                    }
                }

            };

        }

    });
