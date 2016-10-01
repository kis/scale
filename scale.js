/*
 * Angular JS Scale
 *
 * Project started on: Wed, 21 Sep 2016 - 5:00:00 PM
 * Current version: 1.0.0
 *
 * Released under the MIT License
 * --------------------------------------------------------------------------------
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Stepkin Kirill (https://github.com/kirillstepkin)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * --------------------------------------------------------------------------------
 */

'use strict';

angular.module('scale', ['ng']).directive('scale', ['$templateCache', function($templateCache) {
  return {
    restrict: 'E',
    templateUrl: 'scale.htm',
    scope: {
      data: '='
    },
    link: function(scope, element, attrs) {
      scope.theme = attrs.theme || 'default';

      var SCALE_WIDTH = 50,
          SCALE_HEIGHT = 10,
          BLOCK_WIDTH = 20;

      scope.rowBlocks = new Array(SCALE_HEIGHT);
      scope.marks = scope.data;

      scope.calcStyle = function(keyBlock, keyMark) {
        var i = keyBlock,
            j = scope.marks[keyMark+1].value;

        var AC = BLOCK_WIDTH, 
            BC = Math.abs(j - i) * BLOCK_WIDTH;
        var AB = Math.hypot( AC, BC );
        var angleA = Math.fround( Math.asin( BC / AB ) * 180 / Math.PI);

        if (j < i) angleA = -angleA;

        return {
          "width": AB + "px",
          "transform": "rotate(" + angleA + "deg)"
        };
      };
    }
  }
}]).run( [ '$templateCache' , function( $templateCache ) {
  var template = '<div class="ruler-container {{theme}}">' + 
    '<div class="ruler-row" ng-repeat="(keyMark, mark) in marks track by $index">' +
      '<div class="mark" ng-class="{\'painted\': $index > mark.value, \'empty\': $index < mark.value}" ng-repeat="(keyBlock, block) in rowBlocks track by $index">' +
        '<div class="line" ng-if="$index == mark.value && keyMark < marks.length - 1" ng-style="calcStyle(keyBlock, keyMark)"></div>' +
      '</div>' + 
    '</div>' +
  '</div>';

  $templateCache.put( 'scale.htm' , template );
}]);