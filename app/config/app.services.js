'use strict';

angular.module('core.myTemplate').factory('coreFactoryService', ['$resource',
    function($resource) {
      return $resource('app/json/:pageId.json', {}, {
		  query: {method: 'GET'}
      });
    }
]);