'use strict';
  
// Register the "firstSection" component, along with its associated controller and template
angular.
  module('firstSection').
  component('firstSection', {
    templateUrl: 'app/templates/firstSection/firstSection.template.html',
    controller: ['$http', '$routeParams',
      function firstSectionDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/firstSection/firstSection.json').then(function(response) {
          self.firstSection = response.data;
        });
      }
    ]
});