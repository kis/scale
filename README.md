# Scale

[![NPM Version](https://img.shields.io/npm/v/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)
[![Download Month](https://img.shields.io/npm/dm/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)
[![Download Total](https://img.shields.io/npm/dt/angular-scale.svg)](https://www.npmjs.com/package/angular-scale)

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/placeit1.jpg)

Angular plugin for building scale of items. Chart ruler completely on HTML/CSS/JS. Bar chart, line chart, calendar view visualisation. Diagram, graph, pyramid visualisation of large datasets. Showreel. The source for this module is in the [main repo](https://github.com/kirillstepkin/scale). Please create issues and pull requests.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/output_eSVfyQ.gif)

Inspired by [kinopoisk.ru](https://www.kinopoisk.ru/) chart written using Adobe Flash. Also d3.js has such kind of chart written on Canvas. But this chart is just on HTML/CSS without using libraries. Feel free for contribute.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/84d858c0af.png)

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
		<scale data="data" 
			   width="50" 
			   height="10"
			   box-size="14"
			   line="true"
			   theme="default">
		</scale>

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
		var value = Math.floor(Math.random() * SCALE_HEIGHT + 1);

		$scope.data.push({
			value: value, //Value from 1 to SCALE_HEIGHT
			title: (i + 1) + " item" //Description
		});
	}
}]);
```

### Options

```html
<scale data="data" 
	   width="50" 
	   height="10"
	   box-size="14"
	   line="true"
	   theme="default">
</scale>
```

* **data** is an array of objects [{value: 0}, ... , {value: 10}]. This is the dataset of the chart.
* **width** is the horizontal length of the data array. If width param is less than the length of the data array then user will see the last values of the data array. 
* **height** is the vertical length.
* **box-size** is size of each box in pixels.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/46cd396faa.jpg)

* **line** is param that determines if this is a line-chart.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/a03def3092.jpg)

* **theme** is color scheme of the chart.

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/a657bab0f7.jpg)

Please check the example folder to see how it's going on practice.

### Themes

* default
* purple
* grey

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/img/024486fd94.jpg)

### Changelog

* 10/02/2016 Implemented tooltips.
* 10/01/2016 Implemented different color schemes.
* 09/20/2016 Rewriting the project as an Angular.js plugin.
* 06/05/2016 Finished writing function for calculating angle of the line that connects the points of the chart. Rendering chart.

### License

Copyright (c) 2016 [Kirill Stepkin](https://www.npmjs.com/~kirillstyopkin)

Inspired by [kinopoisk.ru](https://www.kinopoisk.ru/) chart.

[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/kirillstepkin/scale)
