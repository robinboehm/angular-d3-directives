'use strict';

describe('Directive: wordcloud', function () {
  beforeEach(module('ruhrjsApp'));

    // instantiate service
    beforeEach(module('ruhrjsApp',['d3']));


    var element,
        mockArray=["1","2","3","4","5"]; // TODO: Using testacular mock mechanisms

    it('should not not create a svg with an empty wordcloud words attribute', inject(function ($rootScope, $compile) {
        element = angular.element('<wordcloud></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));

    it('should render a svg', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));

    it('should render an text element for every word', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
        // expect $("text",element).length = mockArray.length
    }));

    it('should use the font-size attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words" font-size="123"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));

    it('should not render the wordcloud with invalid font-size attribute value', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words" font-size="a"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
        // expect $("text",element).length = mockArray.length
    }));

    it('should use the font-family attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words" font-family="Arial"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));

    it('should use the font-family Impact as default attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));

    it('should use the font-family attribute', inject(function ($rootScope, $compile) {
        $rootScope.words = mockArray;
        element = angular.element('<wordcloud words="words"></wordcloud>');
        element = $compile(element)($rootScope);
        //expect(element.text()).toBe('this is the wordcloud directive');
    }));
});
