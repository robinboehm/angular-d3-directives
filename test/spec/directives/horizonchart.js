'use strict';

describe('Directive: horizonChart', function () {

  beforeEach(module('d3'));

    var element,
        width = 800,
        height = 600;

    it('should be registred with d3', inject(function (d3) {
        expect(d3.horizon).toBeDefined();
    }));

    it('should render a svg', inject(function ($rootScope, $compile) {
        element = angular.element('<horizon-chart></horizon-chart>');
        element = $compile(element)($rootScope);
        /*
         http://api.jquery.com/attr/

         For example,
         selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked, and defaultSelected
         should be retrieved and set with the .prop() method.
          */
        expect(element.children().prop("tagName")).toBe("svg");

    }));


    it('should render a svg with width and height ', inject(function ($rootScope, $compile) {
        element = angular.element('<horizon-chart></horizon-chart>');
        element = $compile(element)($rootScope);
        expect(element.children().attr("width")).toBeDefined();
        expect(element.children().attr("height")).toBeDefined();
    }));


    it('should render a svg path with data', inject(function ($rootScope, $compile) {
        $rootScope.mockData = {value:[1,0]};
        element = angular.element('<horizon-chart data="mockData"></horizon-chart>');
        element = $compile(element)($rootScope);
        var pathElement = angular.element(element.find("path")[1]);
        //http://www.w3schools.com/svg/svg_path.asp
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height+"L"+width+","+height+"L0,"+height+"Z");

    }));


    it('should render a svg path with data and correct bands', inject(function ($rootScope, $compile) {
        var fixBandSize = 3;
        $rootScope.mockData = {value:[1,0]};
        element = angular.element('<horizon-chart data="mockData" fix-bands="'+fixBandSize+'"></horizon-chart>');
        element = $compile(element)($rootScope);
        var pathElement = angular.element(element.find("path")[1]);
        //http://www.w3schools.com/svg/svg_path.asp
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height*fixBandSize+"L"+width+","+height*fixBandSize+"L0,"+height*fixBandSize+"Z");

    }));



    /*
    TODO: Test dont working 100% correct.
    digest triggers update Wachtes


    it('should update bands on change', inject(function ($rootScope, $compile) {
        $rootScope.mockData = {value:[1,0]};
        $rootScope.mockBands = 1;

        element = angular.element('<horizon-chart data="mockData" bands="mockBands"></horizon-chart>');
        element = $compile(element)($rootScope);
        var pathElement = angular.element(element.find("path")[1]);


        //http://www.w3schools.com/svg/svg_path.asp

        // With n Bands
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height*$rootScope.mockBands+"L"+width+","+height*$rootScope.mockBands+"L0,"+height*$rootScope.mockBands+"Z");

        // Change bands, trigger watch
        $rootScope.mockBands++;
        $rootScope.$digest();

        // With n + 1 bands
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height*$rootScope.mockBands+"L"+width+","+height*$rootScope.mockBands+"L0,"+height*$rootScope.mockBands+"Z");

    }));


    it('should update a svg path with data change event', inject(function ($rootScope, $compile) {
        $rootScope.mockData = {value:[1,0]};

        element = angular.element('<horizon-chart data="mockData"></horizon-chart>');
        element = $compile(element)($rootScope);
        var pathElement = angular.element(element.find("path")[1]);


        //http://www.w3schools.com/svg/svg_path.asp

        // With n Bands
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height+"L"+width+","+height+"L0,"+height+"Z");

        // Change bands, trigger watch
        $rootScope.mockData.value.push(0);
        $rootScope.$digest();

        // With n + 1 bands
        // M0,0L800,600L800,600L0,600L400,600L0,600Z
        expect(pathElement.attr("d")).toBe("M0,0L"+width+","+height+"L800,"+height+"L0,"+height+"L"+width/2+","+height+"L0,"+height+"Z");

    }));

     */


});
