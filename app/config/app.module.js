'use strict';

// Define the "myApp" module
angular.module('myApp', [
'ngRoute',
'rootApp',
'navbarDefault',
'headerSection',
'firstSection',
'secondSection',
'thirdSection'
]);

// Define the `core` module
angular.module('core', ['core.myTemplate']);

// Define the `core.myTemplate` module
angular.module('core.myTemplate', ['ngResource']);