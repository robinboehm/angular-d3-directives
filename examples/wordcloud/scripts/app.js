'use strict';

angular.module('examplesApp', ['d3'])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
            // Only for example in the route provider
        template: '' +
            '<h3>Simple Words as Array</h3>' +
            '<wordcloud words="words"></wordcloud>' +
            '<h3>Adjustable size</h3>' +
            '<wordcloud words="words" width="300" height="300"></wordcloud>' +
            '<h3>Font-Family and -Size attributes</h3>' +
            '<wordcloud words="words" font-size="50" font-family="Arial"></wordcloud>' +
            '',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
