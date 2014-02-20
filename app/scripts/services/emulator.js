'use strict';

angular.module('sensingApp')
    .service('Emulator', function Emulator() {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.getProjects = function() {
            return [{
                    "project": {
                        "name": "para",
                        "caption": "Pará Project",
                        "date": "2013-08-10"
                    },
                    "layers": {
                        "layer-01": {
                            "caption": "Modis Satellite",
                            "visible": true,
                            "mapfile": "/var/www/local.map",
                            "mapserver": "http://localhost/cgi-bin/mapserv",
                            "layer": ["2013216"]
                        },
                        "layer-02": {
                            "caption": "ANN",
                            "visible": false,
                            "mapfile": "/var/www/local.map",
                            "mapserver": "http://localhost/cgi-bin/mapserv",
                            "layer": ["ANNClassified"]
                        }
                    }
                }
                // {
                //     "project": {
                //         "name": "para",
                //         "caption": "Pará Project",
                //         "date": "2013-08-10"
                //     },
                //     "layers": {
                //         "layer-01": {
                //             "caption": "Modis Satellite",
                //             "mapfile": "/var/www/mapfiles/local.map",
                //             "mapserver": "http://tugui.dmz.inpe.br/cgi-bin/mapserv",
                //             "layer": ["2013216"]
                //         },
                //         "layer-02": {
                //             "caption": "ANN",
                //             "mapfile": "/var/www/mapfiles/local.map",
                //             "mapserver": "http://tugui.dmz.inpe.br/cgi-bin/mapserv",
                //             "layer": ["ANNClassified"]
                //         }
                //     }
                // }
                , {
                    "project": {
                        "name": "roraima",
                        "caption": "Roraima Project",
                        "date": "2013-08-10"
                    },
                    "layers": {
                        "layer-01": {
                            "caption": "Modis Satellite",
                            "visible": false,
                            "mapfile": "/home/forestwatchers/map/maps2012.map",
                            "mapserver": "http://forestwatchers.net/cgi-bin/mapserv",
                            "layer": ["annBuild"]
                        },
                        "layer-02": {
                            "caption": "ANN",
                            "visible": false,
                            "mapfile": "/home/forestwatchers/map/maps2012.map",
                            "mapserver": "http://forestwatchers.net/cgi-bin/mapserv",
                            "layer": ["annClass"]
                        }
                    }
                }, {
                    "project": {
                        "name": "awaguaja",
                        "caption": "Awá-Guajá Area",
                        "date": "2013-08-10"
                    },
                    "layers": {
                        "layer-01": {
                            "caption": "Modis Satellite",
                            "visible": false,
                            "mapfile": "/home/forestwatchers/map/maps2012.map",
                            "mapserver": "http://forestwatchers.net/cgi-bin/mapserv",
                            "layer": ["awaSat"]
                        },
                        "layer-02": {
                            "caption": "ANN",
                            "visible": false,
                            "mapfile": "/home/forestwatchers/map/maps2012.map",
                            "mapserver": "http://forestwatchers.net/cgi-bin/mapserv",
                            "layer": ["annCertAwa"]
                        },
                        "layer-03": {
                            "caption": "CLASS",
                            "visible": false,
                            "mapfile": "/home/forestwatchers/map/maps2012.map",
                            "mapserver": "http://forestwatchers.net/cgi-bin/mapserv",
                            "layer": ["annClassAwa"]
                        }
                    }
                }];
        }

    });
