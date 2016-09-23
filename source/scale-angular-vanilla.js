'use strict';

angular.module('scale', ['ng']).directive('scale', [function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var SCALE_WIDTH = 50,
          SCALE_HEIGHT = 10,
          BLOCK_WIDTH = 20;

      var marks = [];

      for (var i=0; i < SCALE_WIDTH; i++) {
        marks.push({type: Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1) });
      }

      function renderRulers() {
        element[0].innerHTML = '';

        var rulerCont = document.createElement('div');
        rulerCont.className = "ruler-container";   

        element[0].appendChild(rulerCont);
        
        marks.forEach(function(mark, markNum) {
          var rulerItem = document.createElement('div');
          rulerItem.className = "ruler-row";    
          renderRow(rulerItem, mark, markNum);
          rulerCont.appendChild(rulerItem);
        });
      }

      function renderRow(rulerItem, mark, markNum) {
        for (var i=0; i < SCALE_HEIGHT; i++) {
          var markItem = document.createElement('div');
          markItem.setAttribute("data-type", mark.type - 1 == i ? mark.type : i + 1);
          markItem.className = mark.type - 1 == i ? "mark pinned" : "mark empty";

          if (mark.type - 1 <= i) markItem.className += " painted";

          if (mark.type - 1 == i && markNum < marks.length - 1) {
            var lineItem = document.createElement('div');
            lineItem.className = "line";
            var lineOpts = calculateLineOptions(i+1, marks[markNum+1].type);
            lineItem.setAttribute("style", `width: ${lineOpts.width}; transform: ${lineOpts.transform};`);
            markItem.appendChild(lineItem);
          }

          rulerItem.appendChild(markItem);
        }
      }

      /*    /B
           /|
          / |
         /__|
        A    C */

      function calculateLineOptions(currentMark, nextMark) {
        var AC = BLOCK_WIDTH, 
            BC = Math.abs(nextMark - currentMark) * BLOCK_WIDTH;
        var AB = Math.hypot( AC, BC );
        var angleA = Math.fround( Math.asin( BC / AB ) * 180 / Math.PI);

        if (nextMark < currentMark) angleA = -angleA;

        return {
          width: AB + 'px',
          transform: 'rotate(' + angleA + 'deg)'
        };
      }

      function reset(e) {
        for (var i=0; i<SCALE_WIDTH; i++) {
          marks[i].type = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);
        }
        
        renderRulers();
      }

      renderRulers();

      element[0].addEventListener('click', reset);
    }
  }
}]);