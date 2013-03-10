'use strict';

angular.module('examplesApp', ['d3'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<wordcloud words="words"></wordcloud>',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
