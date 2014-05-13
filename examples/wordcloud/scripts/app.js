'use strict';

angular.module('examplesApp',[])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
            // Using template to enable using example without server, templateURL require Ajax call
        template: '' +
            '<h3>Simple Words as Array</h3>' +
            '<wordcloud words="words"></wordcloud>' +
            '<h3>Simple Words as Array with on-click function to console.log</h3>' +
            '<wordcloud words="words" on-click="myOnClickFunction(element)" on-hover="myOnHoverFunction(element)"></wordcloud>' +
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
