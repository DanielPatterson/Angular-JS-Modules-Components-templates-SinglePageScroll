'use strict';
  
// Register the "secondSection" component, along with its associated controller and template
angular.
  module('secondSection').
  component('secondSection', {
    templateUrl: 'app/templates/secondSection/secondSection.template.html',
    controller: ['$http', '$routeParams',
      function secondSectionDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/secondSection/secondSection.json').then(function(response) {
          self.secondSection = response.data;
        });
      }
    ]
});