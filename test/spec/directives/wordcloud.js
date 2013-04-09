'use strict';

describe('Directive: wordcloud', function () {

  beforeEach(module('d3'));



    var element,
        mockArray=["1","2","3","4","5"]; // TODO: Using testacular mock mechanisms

    it('should not not create a svg with an empty words definition', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud></wordcloud>');
        element = $compile(element)($rootScope);
        expect(element.children().children().length).toBe(0);

    }));

    it('should render a svg', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        expect(element.children().children().length).toBe(1);
    }));

    it('should render an text element for every word', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        expect(element.children().children().children().length).toBe(mockArray.length);
    }));


    //TODO: Behaviour not 100% correct. Some-times test fails.
    // Operations with random -> improve test for this
    it('should use the font-size attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        var element1,element2,subelement1,subelement2;
        element1 = angular.element('<wordcloud words="words" font-size="10"></wordcloud>');
        element1 = $compile(element1)($rootScope);
        subelement1 = element1.children().children().children()[0];

        element2 = angular.element('<wordcloud words="words" font-size="40"></wordcloud>');
        element2 = $compile(element2)($rootScope);
        subelement2 = element2.children().children().children()[0];

        var size1 = parseInt(angular.element(subelement1).css("font-size").replace(/[A-Za-z$-]/g, ""));
        var size2 = parseInt(angular.element(subelement2).css("font-size").replace(/[A-Za-z$-]/g, ""));

        expect(size2).toBeGreaterThan(size1);
    }));

    it('should not render the wordcloud with invalid font-size attribute value', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words" font-size="a"></wordcloud>');
        element = $compile(element)($rootScope);
        expect(element.children().children().length).toBe(0);
    }));

    it('should use the font-family attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words" font-family="Arial"></wordcloud>');
        element = $compile(element)($rootScope);

        var subelement = element.children().children().children()[0];
        expect(angular.element(subelement).css("font-family")).toBe('Arial');
    }));

    it('should use the font-family Impact as default attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);

        var subelement = element.children().children().children()[0];
        expect(angular.element(subelement).css("font-family")).toBe('Impact');
    }));


    it('should parse string value to wordCloud', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud>Hello,World</wordcloud>');
        element = $compile(element)($rootScope);

        expect(element.children().children().children().length).toBe(2);
    }));

    it('should delete Strings inside after compile', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud>Hello,World</wordcloud>');
        element = $compile(element)($rootScope);

        element.children().remove();
        expect(element.text()).toBe("");
    }));


    it('should parse subelements to wordCloud', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud><word>Hello</word><word>Javascript</word><word>World</word></wordcloud>');
        element = $compile(element)($rootScope);

        expect(element.children().children().children().length).toBe(3);
    }));


    it('should delete subelements after compile', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud><word>Hello</word><word>Javascript</word><word>World</word></wordcloud>');
        element = $compile(element)($rootScope);

        expect(element.children().length).toBe(1);
    }));
});
