'use strict';

angular.module('examplesApp', ['d3'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
            // Only for example in the route provider
        template: '' +
            '' +
            '<h1>WordCloud D3 Directive</h1>' +
            '<h2>By Robin Böhm</h2>' +
            '' +
            '<h3>Simple Words</h3>' +
            '<wordcloud words="words"></wordcloud>' +
            '<h3>Adjustable size</h3>' +
            '<wordcloud words="words" width="300" height="300"></wordcloud>' +
            '<h3>Font-Family and -Size attributes</h3>' +
            '<wordcloud words="words" font-size="10" font-family="Arial"></wordcloud>' +
            '',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
