'use strict';
  
// Register the "historySection" component, along with its associated controller and template
angular.
  module('thirdSection').
  component('thirdSection', {
    templateUrl: 'app/templates/thirdSection/thirdSection.template.html',
    controller: ['$http', '$routeParams',
      function thirdSectionDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/thirdSection/thirdSection.json').then(function(response) {
          self.thirdSection = response.data;
        });
      }
    ]
});