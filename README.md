# Scale

Angular plugin for building scale of items. Chart ruler completely on HTML/CSS/JS.

[https://www.npmjs.com/package/angular-scale](https://www.npmjs.com/package/angular-scale)

![alt text](https://raw.githubusercontent.com/kirillstepkin/scale/master/output_eSVfyQ.gif)

### Getting started

```
bower install angular-scale 
npm install angular-scale 
```

```html
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="./scale.css">
	</head>
	<body>
		...

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
		<script src="./scale.js"></script>
		<script src="./index.js"></script>
	</body>
</html>
```

```html
<scale></scale>
```

```javascript
var myApp = angular.module( "myApp", [ "scale" ]);
```

### License

Copyright (c) 2016 [Kirill Stepkin](https://www.npmjs.com/~kirillstyopkin)

Inspired by [kinopoisk.ru](https://www.kinopoisk.ru/) chart.

Released under the [MIT License](https://github.com/goldfire/howler.js/blob/master/LICENSE.md).
