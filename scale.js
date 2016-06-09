/* @flow */

import './scale.css';

const SCALE_WIDTH: number = 50;
const SCALE_HEIGHT: number = 10;

var marks = [];

for (var i=0; i<SCALE_WIDTH; i++) {
  marks.push({type: Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1) });
}

var container = document.getElementsByClassName('ruler-container')[0];

var rulerInnerView = container;

function render() {
  rulerInnerView.innerHTML = '';
  
  marks.forEach(function(mark) {
    var rulerItem = document.createElement('div');
    rulerItem.className = "ruler-row";
    
    for (var i=0; i<SCALE_HEIGHT; i++) {
      var markItem = document.createElement('div');
      markItem.setAttribute("data-type", mark.type - 1 == i ? mark.type : i + 1);
      markItem.className = mark.type - 1 == i ? "mark" : "mark empty";

      if (mark.type - 1 == i) {
        var lineItem = document.createElement('hr');
        lineItem.className = "line";
        markItem.appendChild(lineItem);
      }

      rulerItem.appendChild(markItem);
    }

    rulerInnerView.appendChild(rulerItem);
  });
}

function reset(e) {
  for (var i=0; i<SCALE_WIDTH; i++) {
    marks[i].type = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);
  }
  
  render();
}

render();

container.addEventListener('click', reset);