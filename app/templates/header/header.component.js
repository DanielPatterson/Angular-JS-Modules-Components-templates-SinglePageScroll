'use strict';
  
// Register the "headerSection" component, along with its associated controller and template
angular.
  module('headerSection').
  component('headerSection', {
    templateUrl: 'app/templates/header/header.template.html',
    controller: ['$http', '$routeParams',
      function headerSectionDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/header/header.json').then(function(response) {
          self.header = response.data;
        });
		
      }
    ]
});