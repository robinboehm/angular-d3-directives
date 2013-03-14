'use strict';

angular.module('examplesApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
        $scope.words =
        ["Hallo","Test","Lorem","Ipsum","Lorem","ipsum","dolor","sit","amet,","consetetur","sadipscing","elitr,","sed","diam","nonumy","eirmod","tempor","invidunt","ut","labore","et","dolore","magna","aliquyam","erat,","sed","diam"];
  }]);
