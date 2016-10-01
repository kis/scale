# Scale

[![NPM Version](https://img.shields.io/npm/v/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)
[![Download Month](https://img.shields.io/npm/dm/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)
[![Download Total](https://img.shields.io/npm/dt/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)

Angular plugin for building scale of items. Chart ruler completely on HTML/CSS/JS.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/output_eSVfyQ.gif)

Inspired by kinopoisk.ru chart written using Adobe Flash. Also d3.js has such kind of chart written on Canvas. But this chart is just on HTML/CSS without using libraries. Feel free for contribute.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/84d858c0af.png)

### Install

```
bower install angular-scale 
npm install angular-scale 
```

### Use

```html
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="../scale.css">
	</head>
	<body ng-controller="main">
		<scale data="data"></scale>

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
		<script src="../scale.js"></script>
		<script src="./index.js"></script>
	</body>
</html>
```

```javascript
angular.module('myApp', ['scale']).controller('main', ['$scope', function($scope) {
	$scope.data = [];

	var SCALE_WIDTH = 50,
	    SCALE_HEIGHT = 10;

	for (var i=0; i < SCALE_WIDTH; i++) {
		var value = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);

		$scope.data.push({
			value: value 
		});
	}
}]);
```

### Future features

* Implement different color schemes
* Implement more options and controls to edit chart features

### Changelog

* 10/01/2016 Updated project README.
* 09/20/2016 Rewriting the project as an Angular.js plugin.
* 06/05/2016 Finished writing function for calculating angle of the line that connects the points of the chart. Rendering chart.

### License

Copyright (c) 2016 [Kirill Stepkin](https://www.npmjs.com/~kirillstyopkin)

Inspired by [kinopoisk.ru](https://www.kinopoisk.ru/) chart.

Released under the [MIT License](https://github.com/goldfire/howler.js/blob/master/LICENSE.md).
