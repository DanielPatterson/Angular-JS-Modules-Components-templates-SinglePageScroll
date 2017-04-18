'use strict';

// Register "rootApp" component, along with its associated controller and template
angular.
  module('rootApp').
  component('rootApp', {
    templateUrl: 'app/root/root.template.html',
    controller: ['$http', '$routeParams',
      function rootAppController($http, $routeParams) {
        var self = this;

        $http.get('app/root/root.json').then(function(response) {
          self.rootAppdata = response.data;
        });
		
      }
    ]
});