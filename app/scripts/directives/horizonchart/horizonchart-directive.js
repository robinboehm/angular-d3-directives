'use strict';

angular.module('d3')
    .directive('horizonChart', ['d3', function (d3) {
        return {
            restrict: 'E',
            scope: {
                // attributes
                width:      "@",
                height:     "@",
                fixBands:   "@",
                mode:       "@",

                // Bindings
                data:       "=",
                bands:      "=",

                // EventCallbacks
                onClick:    "&",
                onHover:    "&"
            },
            link: function postLink(scope, element, attrs) {
                // Default Values
                var width               = 800;
                var height              = 600;
                var fixBands            = 1;
                var mode                = "mirror";     // Mirror / Offset
                var interpolate         = "basic";      // linear or basis, monotone, step-before, etc.

                // Scope vars
                var bands, data;

                // Chart Vars
                var svg,chart;


                // Check and set attributes, else keep then default values
                if (angular.isDefined(attrs.width))         width           = attrs.width;
                if (angular.isDefined(attrs.height))        height          = attrs.height;
                if (angular.isDefined(attrs.fixBands))      fixBands        = attrs.fixBands * 1 || 0;
                if (angular.isDefined(attrs.mode))          mode            = attrs.mode;
                if (angular.isDefined(attrs.interpolate))   interpolate     = attrs.interpolate;

                // Check Scope
                if (angular.isDefined(scope.data))          data            = scope.data;
                if (angular.isDefined(scope.bands))         bands           = scope.bands;

                // Fallback, if no band binding is defined
                if(angular.isUndefined(bands)){
                    bands = fixBands;
                }

                // Helper Functions
                var parseSimpleData = function (data) {
                    return data.value.map(function (value, i) {
                        return [i, value];
                    });
                };

                var parseWithTimestamp = function (data) {
                    return data.value.map(function (value, i) {
                        return [data.timestamp[i], value];
                    });
                };

                var parseData = function (data) {
                    if(angular.isDefined(data) && angular.isDefined(data.value) && angular.isDefined(data.timestamp)){
                        data = parseWithTimestamp(data);
                    }
                    else if(angular.isDefined(data) && angular.isDefined(data.value)){
                        data = parseSimpleData(data);
                    }
                    else{
                        data = parseSimpleData({value:[]});
                    }
                    return data;
                };

                // Chart Factory
                var horizonChartFactory = function (data) {
                    var rootElement = element[0];
                    svg = d3
                        .select(rootElement)
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    chart = d3
                        .horizon()
                        .width(width)
                        .height(height)
                        .bands(bands)
                        .mode(mode)
                        .interpolate(interpolate);

                    svg.data([parseData(data)]).call(chart);
                    //TODO Handle ajax json calls
                    //d3.json("unemployment.json",parseData);
                }
                horizonChartFactory(data);


                // Handle Data Updates
                var updateChart = function(){
                    chart.bands(scope.bands);
                    svg.data([parseData(data)]).call(chart);
                }

                var doDeepWatch = true;
                scope.$watch('bands',updateChart,doDeepWatch);
                scope.$watch('data',updateChart,doDeepWatch);

            }
        };
    }]);
