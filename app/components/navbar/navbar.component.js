'use strict';
  
// Register the "navbarDefault" component, along with its associated controller and template
angular.
  module('navbarDefault').
  component('navbarDefault', {
    templateUrl: 'app/components/navbar/navbar.template.html',
    controller: ['$http', '$routeParams',
      function navbarDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/components/navbar/navbar.json').then(function(response) {
			// Begin scrollTo function
			$(function() {
				$('a[href*=#]:not([href=#])').click(function() {
					if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 2000);
							return false;
						}
					}
				});
			});
			// EndOf scrollTo function
			
            self.navbar = response.data;
        });
		
		
      
	  }
	  
    ]
});