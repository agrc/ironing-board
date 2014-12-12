/* jshint maxlen:false */
define(['dojo/has', 'esri/config'], function (has, esriConfig) {
    // force api to use CORS on mapserv thus removing the test request on app load
    // e.g. http://mapserv.utah.gov/ArcGIS/rest/info?f=json
    esriConfig.defaults.io.corsEnabledServers.push('mapserv.utah.gov');
    
    window.AGRC = {
        // app: app.App
        //      global reference to App
        app: null,

        // version.: String
        //      The version number.
        version: '0.0.0',

        // apiKey: String
        //      The api key used for services on api.mapserv.utah.gov
        apiKey: '', // acquire at developer.mapserv.utah.gov

        // initialExtent: Object
        //      Defines in what extent the map is initially loaded
        initialExtent: {
            scale: 144447.638572,
            center: [425132, 4512466]
        },
        topics: {
            layers: {
                resize: 'layers.resize'
            },
            addLayer: 'addLayer',
            layer: {
                toggleDynamicLayer: 'layer.toggleDynamicLayer'
            },
            slider: {
                change: 'slider.change'
            }
        },
        urls: {
            mapService: '/arcgis/rest/services/BBEcon/MapServer'
        },
        fieldNames: {

        },
        markerSymbolHeight: 35,
        markerSymbolWidth: 26,
        groups: [{
            groupClass: 'broadband',
            name: 'Broadband',
            layers: [{
                name: 'Fiber Short Term',
                type: 'dynamic',
                layerId: '0',
                onByDefault: true
            }, {
                name: 'Fiber Custom Order',
                type: 'dynamic',
                layerId: '1',
                onByDefault: true
            }, {
                name: 'Other Fixed Broadband',
                type: 'dynamic',
                layerId: '2, 3, 4',
                onByDefault: false
            }]
        }, {
            groupClass: 'transportation',
            name: 'Transportation',
            layers: [{
                name: 'International Airport',
                type: 'feature',
                layerId: '5',
                controlledByParent: true,
                marker: 'airports.svg'
            }, {
                name: 'Regional Commercial Airports',
                type: 'feature',
                layerId: '6',
                controlledByParent: true,
                marker: 'airports.svg'
            }, {
                name: 'Major and Regional Airports with Paved Runways',
                type: 'feature',
                layerId: '7',
                controlledByParent: true,
                marker: 'airports.svg'
            }]
        }, {
            groupClass: 'demographics',
            name: 'Workforce',
            layers: [{
                name: 'Higher Education Schools',
                type: 'feature',
                layerId: '8',
                controlledByParent: true,
                marker: 'universities.svg'
            }]
        }, {
            groupClass: 'lifestyle',
            name: 'Lifestyle',
            layers: [{
                name: 'National Parks, National Monuments, State Parks',
                type: 'feature',
                layerId: '9',
                controlledByParent: true,
                marker: 'parks.svg'
            }, {
                name: 'Ski Areas',
                type: 'feature',
                layerId: '10',
                controlledByParent: true,
                marker: 'skiing.svg'
            }, {
                name: 'Golf Courses',
                type: 'feature',
                layerId: '11',
                controlledByParent: true,
                marker: 'golfing.svg'
            }, {
                name: 'Hospitals',
                type: 'feature',
                layerId: '12',
                controlledByParent: true,
                marker: 'hospitals.svg'
            }]
        }]
    };

    if (has('agrc-api-key') === 'prod') {
        // mapserv.utah.gov
        window.AGRC.apiKey = 'AGRC-A94B063C533889';
    } else if (has('agrc-api-key') === 'stage') {
        // test.mapserv.utah.gov
        window.AGRC.apiKey = 'AGRC-AC122FA9671436';
    } else {
        // localhost
        window.AGRC.apiKey = 'AGRC-63E1FF17767822';
    }

    return window.AGRC;
});