/* @flow */

import './scale.css';

const SCALE_WIDTH: number = 50;
const SCALE_HEIGHT: number = 10;
const BLOCK_WIDTH: number = 20;

var marks = [];

for (var i=0; i<SCALE_WIDTH; i++) {
  marks.push({type: Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1) });
}

var container = document.getElementsByClassName('ruler-container')[0];

var rulerInnerView = container;

function render() {
  rulerInnerView.innerHTML = '';
  
  marks.forEach(function(mark, markNum) {
    let rulerItem = document.createElement('div');
    rulerItem.className = "ruler-row";
    
    for (var i=0; i<SCALE_HEIGHT; i++) {
      let markItem = document.createElement('div');
      markItem.setAttribute("data-type", mark.type - 1 == i ? mark.type : i + 1);
      markItem.className = mark.type - 1 == i ? "mark" : "mark empty";

      if (mark.type - 1 == i && markNum < marks.length - 1) {
        let lineItem = document.createElement('hr');
        lineItem.className = "line";        
        let lineOptions = calculateLineOptions(i+1, marks[markNum+1].type);
        lineItem.setAttribute("style", `width: ${lineOptions.width}; transform: ${lineOptions.transform};`);
        markItem.appendChild(lineItem);
      }

      rulerItem.appendChild(markItem);
    }

    rulerInnerView.appendChild(rulerItem);
  });
}

function calculateLineOptions(currentMark, nextMark) {

  /*  /B
     /|
    / |
   /__|
  A    C */

  const PI = 3.14;

  let AC = BLOCK_WIDTH, BC = Math.abs(nextMark - currentMark) * BLOCK_WIDTH;
  let AB = Math.floor( Math.sqrt( Math.pow(AC, 2) + Math.pow(BC, 2) ) );
  let angleA = Math.asin( BC / AB );
  angleA = Math.floor(angleA*180/PI);

  if (nextMark < currentMark) {
    angleA = -angleA;
  }

  return {
    width: `${AB}px`,
    transform: `rotate(${angleA}deg)`
  };
}

function reset(e) {
  for (var i=0; i<SCALE_WIDTH; i++) {
    marks[i].type = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);
  }
  
  render();
}

render();

container.addEventListener('click', reset);